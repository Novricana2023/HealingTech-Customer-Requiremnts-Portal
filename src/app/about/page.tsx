import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn about HealingTech Labs, a Malawi technology company building AI solutions, software, automation, websites, and mobile apps.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal delay={0.05}>
        <VisionMission />
      </Reveal>
    </>
  );
}
