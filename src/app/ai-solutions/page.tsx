import AISolutionsSection from "@/components/AISolutionsSection";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI Solutions | Build AI with HealingTech Labs Malawi",
  description:
    "Build AI in Malawi with HealingTech Labs. Custom AI assistants, chatbots, automation, machine learning, and intelligent systems for businesses and organizations.",
  path: "/ai-solutions",
});

export default function AISolutionsPage() {
  return (
    <Reveal>
      <AISolutionsSection />
    </Reveal>
  );
}
