"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { contactInfo, whatsappUrl } from "@/data/contact";

interface Message {
  id: string;
  from: "bot" | "user";
  text: string;
}

const quickActions = [
  {
    label: "What services do you offer?",
    reply:
      "We build AI & automation, web apps, mobile apps, websites, custom software, ERP systems, and smart enterprise platforms. Explore our Services section or open the Requirements Portal to get started.",
  },
  {
    label: "How do I start a project?",
    reply:
      "Visit our Requirements Portal, select the service that matches your project, and complete the form. The more detail you provide, the better we can design your solution.",
  },
  {
    label: "Do you build ERP systems?",
    reply:
      "Yes! We offer Maphunziro LMS, Boma ERP, HealthBridge, BizCore, and more. Visit Explore ERP Solutions on our website to browse the full portfolio.",
  },
  {
    label: "Talk to someone on WhatsApp",
    reply: "whatsapp",
  },
];

const welcomeMessage =
  "Hi! I'm the HealingTech Assistant. Ask me anything about our services, or choose a quick option below to get started.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setMessages([{ id: "welcome", from: "bot", text: welcomeMessage }]);
        setTyping(false);
      }, 800);
    }
  }, [open, messages.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const botReply = (text: string) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), from: "bot", text },
      ]);
      setTyping(false);
    }, 900);
  };

  const handleQuickAction = (action: (typeof quickActions)[0]) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), from: "user", text: action.label },
    ]);

    if (action.reply === "whatsapp") {
      botReply("Connecting you to our team on WhatsApp...");
      setTimeout(() => {
        window.open(
          whatsappUrl(
            contactInfo.whatsappNumbers[0].phone,
            "Hello HealingTech Systems, I'd like to discuss a project."
          ),
          "_blank"
        );
      }, 1200);
      return;
    }

    botReply(action.reply);
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), from: "user", text: trimmed },
    ]);
    setInput("");

    const lower = trimmed.toLowerCase();
    if (lower.includes("whatsapp") || lower.includes("contact") || lower.includes("call")) {
      botReply("Connecting you to our team on WhatsApp...");
      setTimeout(() => {
        window.open(
          whatsappUrl(
            contactInfo.whatsappNumbers[0].phone,
            "Hello HealingTech Systems, I'd like to discuss a project."
          ),
          "_blank"
        );
      }, 1200);
    } else if (lower.includes("erp")) {
      botReply(quickActions[2].reply);
    } else if (lower.includes("start") || lower.includes("project") || lower.includes("form")) {
      botReply(quickActions[1].reply);
    } else if (lower.includes("service") || lower.includes("build") || lower.includes("offer")) {
      botReply(quickActions[0].reply);
    } else {
      botReply(
        "Thanks for your message! For detailed project discussions, open our Requirements Portal or chat with us on WhatsApp. Our team responds quickly."
      );
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-teal to-brand-blue px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/40 bg-white">
                  <Image src="/logo.jpeg" alt="HealingTech" width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm flex items-center gap-1">
                    HealingTech Assistant
                    <Sparkles size={14} className="text-teal-200" />
                  </p>
                  <p className="text-teal-100 text-xs">Online · Ready to help</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:bg-white/20 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-brand-teal to-brand-blue text-white rounded-br-md"
                        : "bg-white text-slate-700 border border-slate-100 shadow-sm rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm flex gap-1">
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-teal-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick actions */}
            <div className="px-3 py-2 flex flex-wrap gap-1.5 border-t border-slate-100 bg-white">
              {quickActions.slice(0, 3).map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleQuickAction(action)}
                  className="text-xs px-2.5 py-1.5 rounded-full bg-teal-50 text-teal-700 border border-teal-100 hover:bg-teal-100 transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-slate-100 bg-white flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about our services..."
                className="flex-1 px-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
              />
              <button
                onClick={handleSend}
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand-teal to-brand-blue text-white hover:shadow-lg transition-shadow"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>

            {/* Footer links */}
            <div className="px-3 pb-3 flex gap-2">
              <Link
                href="/requirements"
                onClick={() => setOpen(false)}
                className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-brand-teal transition-colors flex items-center justify-center gap-1"
              >
                Requirements Portal <ArrowRight size={12} />
              </Link>
              <a
                href={`mailto:${contactInfo.emailTo}`}
                className="flex-1 text-center text-xs font-semibold py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-brand-teal transition-colors"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pl-4 pr-5 py-3.5 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue text-white font-semibold shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <span className="absolute inset-0 rounded-full bg-teal-400 animate-ping opacity-20" />
        {open ? <X size={22} className="relative" /> : <MessageCircle size={22} className="relative" />}
        {!open && <span className="relative text-sm hidden sm:inline">Chat with us</span>}
      </motion.button>
    </>
  );
}
