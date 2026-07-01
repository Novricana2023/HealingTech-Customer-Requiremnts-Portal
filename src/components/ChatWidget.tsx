"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, ArrowRight, Bot } from "lucide-react";
import { contactInfo, whatsappUrl } from "@/data/contact";
import {
  ASSISTANT_NAME,
  welcomeMessage,
  popupTeaser,
  quickActions,
  getLocalReply,
} from "@/lib/chat-knowledge";
import { createTextRevealer, sleep } from "@/lib/text-revealer";
import ChatMarkdown from "@/components/ChatMarkdown";
import { brand } from "@/lib/brand";

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
}

const POPUP_KEY = "healingtech-labs-chat-popup-seen";
const THINKING_MS = 550;

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const welcomeStarted = useRef(false);
  const revealerRef = useRef<ReturnType<typeof createTextRevealer> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(POPUP_KEY)) return;
    const timer = setTimeout(() => {
      if (!open) setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [open]);

  const dismissPopup = () => {
    setShowPopup(false);
    sessionStorage.setItem(POPUP_KEY, "1");
  };

  const openChat = () => {
    dismissPopup();
    setOpen(true);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing, streaming]);

  useEffect(() => {
    return () => revealerRef.current?.cancel();
  }, []);

  const updateBotMessage = useCallback((botId: string, text: string) => {
    setMessages((prev) => prev.map((m) => (m.id === botId ? { ...m, text } : m)));
  }, []);

  const revealBotReply = useCallback(
    async (botId: string, fullText: string, { thinking = true }: { thinking?: boolean } = {}) => {
      revealerRef.current?.cancel();

      if (thinking) {
        setTyping(true);
        await sleep(THINKING_MS);
        setTyping(false);
      }

      setStreaming(true);
      setStreamingId(botId);
      setMessages((prev) => {
        if (prev.some((m) => m.id === botId)) {
          return prev.map((m) => (m.id === botId ? { ...m, text: "" } : m));
        }
        return [...prev, { id: botId, from: "bot", text: "" }];
      });

      await new Promise<void>((resolve) => {
        const revealer = createTextRevealer(
          (text) => updateBotMessage(botId, text),
          () => {
            revealerRef.current = null;
            setStreaming(false);
            setStreamingId(null);
            resolve();
          }
        );
        revealerRef.current = revealer;
        revealer.push(fullText);
        revealer.finish();
      });
    },
    [updateBotMessage]
  );

  useEffect(() => {
    if (!open || messages.length > 0 || welcomeStarted.current) return;
    welcomeStarted.current = true;

    const botId = "welcome";
    void revealBotReply(botId, welcomeMessage);
  }, [open, messages.length, revealBotReply]);

  const openWhatsApp = useCallback(() => {
    window.open(
      whatsappUrl(
        contactInfo.whatsappNumbers[0].phone,
        "Hello HealingTech Labs, I'd like to discuss a project."
      ),
      "_blank"
    );
  }, []);

  const handleWhatsAppAction = useCallback(async () => {
    const botId = `bot-${Date.now()}`;
    await revealBotReply(
      botId,
      "Opening WhatsApp so you can speak with our team directly. We typically respond quickly!"
    );
    setTimeout(openWhatsApp, 400);
  }, [openWhatsApp, revealBotReply]);

  const streamReply = useCallback(
    async (userText: string, history: Message[]) => {
      const botId = `bot-${Date.now()}`;
      revealerRef.current?.cancel();
      setTyping(true);
      setStreaming(false);
      setStreamingId(null);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...history, { from: "user", text: userText }],
          }),
        });

        const contentType = res.headers.get("content-type") || "";

        if (contentType.includes("application/json")) {
          const data = await res.json();
          if (data.useLocal) {
            const local = getLocalReply(userText);
            if (local === "ACTION:WHATSAPP") {
              setTyping(false);
              await handleWhatsAppAction();
              return;
            }
            setTyping(false);
            await revealBotReply(botId, local, { thinking: false });
            return;
          }
        }

        if (!res.body) throw new Error("No stream");

        await sleep(THINKING_MS);
        setTyping(false);
        setStreaming(true);
        setStreamingId(botId);
        setMessages((prev) => [...prev, { id: botId, from: "bot", text: "" }]);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let fullText = "";

        await new Promise<void>((resolve) => {
          const revealer = createTextRevealer(
            (text) => updateBotMessage(botId, text),
            () => {
              revealerRef.current = null;
              setStreaming(false);
              setStreamingId(null);
              resolve();
            }
          );
          revealerRef.current = revealer;

          const pump = async () => {
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              const chunk = decoder.decode(value, { stream: true });
              fullText += chunk;
              revealer.push(chunk);
            }
            revealer.finish();
          };

          void pump();
        });

        if (!fullText.trim()) {
          const local = getLocalReply(userText);
          if (local === "ACTION:WHATSAPP") {
            setMessages((prev) => prev.filter((m) => m.id !== botId));
            await handleWhatsAppAction();
            return;
          }
          await revealBotReply(botId, local, { thinking: false });
        }
      } catch {
        setTyping(false);
        setStreaming(false);
        setStreamingId(null);
        const local = getLocalReply(userText);
        if (local === "ACTION:WHATSAPP") {
          await handleWhatsAppAction();
          return;
        }
        await revealBotReply(botId, local, { thinking: false });
      }
    },
    [handleWhatsAppAction, revealBotReply, updateBotMessage]
  );

  const handleUserMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing || streaming) return;

    const history = messages;
    setMessages((prev) => [...prev, { id: `user-${Date.now()}`, from: "user", text: trimmed }]);
    void streamReply(trimmed, history);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const text = input;
    setInput("");
    handleUserMessage(text);
  };

  const busy = typing || streaming;

  return (
    <>
      <AnimatePresence>
        {showPopup && !open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            className="fixed bottom-24 right-6 z-50 w-[320px] max-w-[calc(100vw-2rem)]"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-4">
              <button onClick={dismissPopup} className="absolute top-2 right-2 p-1 rounded-lg text-slate-400 hover:bg-slate-100" aria-label="Dismiss">
                <X size={16} />
              </button>
              <div className="flex gap-3">
                <div className="shrink-0 w-11 h-11 rounded-full overflow-hidden ring-2 ring-teal-100">
                  <Image src={brand.logo} alt="" aria-hidden="true" width={44} height={44} className="object-cover w-full h-full" />
                </div>
                <div className="pr-4">
                  <p className="text-xs font-semibold text-brand-teal flex items-center gap-1">
                    <Bot size={14} /> AI Assistant
                  </p>
                  <p className="mt-1 text-sm text-slate-700 leading-snug">{popupTeaser}</p>
                  <button onClick={openChat} className="mt-3 text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-brand-teal to-brand-blue">
                    Chat now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[390px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white"
          >
            <div className="bg-gradient-to-r from-brand-teal to-brand-blue px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/40 bg-white">
                  <Image src={brand.logo} alt={brand.logoAlt} width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm flex items-center gap-1.5">
                    {ASSISTANT_NAME}
                    <Sparkles size={14} className="text-teal-200" />
                  </p>
                  <p className="text-teal-100 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    Online · Powered by AI
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg text-white/80 hover:bg-white/20" aria-label="Close chat">
                <X size={20} />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-brand-teal to-brand-blue text-white rounded-br-md whitespace-pre-line"
                        : "bg-white text-slate-700 border border-slate-100 shadow-sm rounded-bl-md"
                    }`}
                  >
                    {msg.from === "bot" ? (
                      <>
                        <ChatMarkdown content={msg.text || "\u200b"} />
                        {streaming && streamingId === msg.id && (
                          <span
                            className="inline-block w-0.5 h-4 bg-brand-teal ml-0.5 align-middle animate-pulse"
                            aria-hidden="true"
                          />
                        )}
                      </>
                    ) : (
                      msg.text
                    )}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm flex gap-1 items-center">
                    <Bot size={14} className="text-brand-teal mr-1" />
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-slate-100 bg-white">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleUserMessage(action.message)}
                  disabled={busy}
                  className="text-xs px-2.5 py-1.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100 hover:bg-teal-100 disabled:opacity-50"
                >
                  {action.label}
                </button>
              ))}
            </div>

            <div className="p-3 border-t border-slate-100 bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !busy && handleSend()}
                placeholder="Ask HealingTech Labs AI..."
                disabled={busy}
                className="flex-1 px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
              />
              <button
                onClick={handleSend}
                disabled={busy || !input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand-teal to-brand-blue text-white disabled:opacity-50"
                aria-label="Send"
              >
                <Send size={18} />
              </button>
            </div>

            <div className="px-3 pb-3 flex gap-2">
              <Link href="/requirements" onClick={() => setOpen(false)} className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-teal-50 flex items-center justify-center gap-1">
                Requirements Portal <ArrowRight size={12} />
              </Link>
              <button onClick={openWhatsApp} className="flex-1 text-xs font-semibold py-2 rounded-lg bg-green-50 text-green-700 hover:bg-green-100">
                WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => (open ? setOpen(false) : openChat())}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue text-white font-semibold shadow-xl shadow-teal-500/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Assistant"
      >
        {!open && <span className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-20" />}
        {open ? <X size={22} className="relative" /> : <Bot size={22} className="relative" />}
        {!open && <span className="relative text-sm hidden sm:inline">AI Assistant</span>}
      </motion.button>
    </>
  );
}
