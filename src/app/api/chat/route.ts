import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/lib/chat-knowledge";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ useLocal: true });
    }

    const chatMessages = messages.slice(-12).map(
      (m: { from: string; text: string }) => ({
        role: m.from === "user" ? ("user" as const) : ("assistant" as const),
        content: m.text,
      })
    );

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: getSystemPrompt() }, ...chatMessages],
        max_tokens: 350,
        temperature: 0.65,
      }),
    });

    if (!response.ok) {
      console.error("OpenAI error:", await response.text());
      return NextResponse.json({ useLocal: true });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json({ useLocal: true });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ useLocal: true });
  }
}
