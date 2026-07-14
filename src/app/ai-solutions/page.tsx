import AISolutionsSection from "@/components/AISolutionsSection";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI Solutions",
  description:
    "HealingTech Labs builds practical AI solutions including custom assistants, chatbots, automation, machine learning, and intelligent product features.",
  path: "/ai-solutions",
});

export default function AISolutionsPage() {
  return (
    <Reveal>
      <AISolutionsSection />
    </Reveal>
  );
}
