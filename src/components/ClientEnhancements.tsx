"use client";

import BackToTop from "@/components/BackToTop";
import ChatWidget from "@/components/ChatWidget";

export default function ClientEnhancements({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BackToTop />
      <ChatWidget />
    </>
  );
}
