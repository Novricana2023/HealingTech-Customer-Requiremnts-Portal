import BootcampsSection from "@/components/BootcampsSection";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI & Coding Bootcamps",
  description:
    "Enroll in paid AI, coding, and innovation bootcamps for children, teens, and adults at HealingTech Labs.",
  path: "/bootcamps",
});

export default function BootcampsPage() {
  return (
    <Reveal>
      <BootcampsSection />
    </Reveal>
  );
}
