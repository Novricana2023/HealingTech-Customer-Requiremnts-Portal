"use client";

import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";
import ChatWidget from "@/components/ChatWidget";

export default function ClientEnhancements({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <PageTransition>{children}</PageTransition>
      <BackToTop />
      <ChatWidget />
    </>
  );
}
