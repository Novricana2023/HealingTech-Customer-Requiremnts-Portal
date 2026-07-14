import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Us | AI & Innovation Lab in Malawi",
  description:
    "About HealingTech Labs, an AI and innovation lab in Malawi building AI solutions, software, automation, websites, and mobile apps for Malawian organizations and clients worldwide.",
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
