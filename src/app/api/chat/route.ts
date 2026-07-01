import { NextRequest } from "next/server";
import { getSystemPrompt } from "@/lib/chat-knowledge";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid messages" }), {
        status: 400,
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ useLocal: true }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const chatMessages = messages.slice(-16).map(
      (m: { from: string; text: string }) => ({
        role: m.from === "user" ? ("user" as const) : ("assistant" as const),
        content: String(m.text).slice(0, 2000),
      })
    );

    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: getSystemPrompt() }, ...chatMessages],
        max_tokens: 450,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!openAIResponse.ok) {
      if (process.env.NODE_ENV === "development") {
        console.error("OpenAI error:", await openAIResponse.text());
      }
      return new Response(JSON.stringify({ useLocal: true }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = openAIResponse.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed.startsWith("data: ")) continue;
              const data = trimmed.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch {
                // skip malformed chunks
              }
            }
          }
        } catch (err) {
          if (process.env.NODE_ENV === "development") {
            console.error("Stream error:", err);
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Chat API error:", error);
    }
    return new Response(JSON.stringify({ useLocal: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
