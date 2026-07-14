import CorporateHero from "@/components/CorporateHero";
import VisionMission from "@/components/VisionMission";
import RequirementsCTA from "@/components/RequirementsCTA";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "HealingTech Labs | AI Solutions, Software & Automation in Malawi",
  description:
    "HealingTech Labs builds AI solutions, custom software, websites, mobile apps, business automation, and AI coding bootcamps for organizations and learners in Malawi and worldwide.",
  path: "/",
  keywords: [
    ...siteConfig.keywords,
    "AI solutions Malawi",
    "coding bootcamp Malawi",
    "AI bootcamp for teens",
    "adult coding bootcamp Malawi",
    "children coding classes Malawi",
  ],
});

export default function Home() {
  return (
    <>
      <Reveal>
        <CorporateHero />
      </Reveal>
      <Reveal delay={0.05}>
        <VisionMission />
      </Reveal>
      <Reveal delay={0.05}>
        <RequirementsCTA />
      </Reveal>
    </>
  );
}
