import BootcampsSection from "@/components/BootcampsSection";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI & Coding Bootcamps in Malawi",
  description:
    "Paid AI, coding, and innovation bootcamps in Malawi for children, teens, and adults. Learn to build with AI at HealingTech Labs.",
  path: "/bootcamps",
});

export default function BootcampsPage() {
  return (
    <Reveal>
      <BootcampsSection />
    </Reveal>
  );
}
