import CorporateHero from "@/components/CorporateHero";
import VisionMission from "@/components/VisionMission";
import AboutSection from "@/components/AboutSection";
import InnovationSection from "@/components/InnovationSection";
import InitiativeTeaser from "@/components/InitiativeTeaser";
import Services from "@/components/Services";
import WhyHealingTech from "@/components/WhyHealingTech";
import RequirementsCTA from "@/components/RequirementsCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "HealingTech Labs | World-Class Technology for Africa's Digital Future",
  description:
    "HealingTech Labs is a modern African technology company and social enterprise — building AI, enterprise software, web and mobile applications, and digital platforms that transform organizations across the continent.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <CorporateHero />
      <VisionMission />
      <AboutSection />
      <InnovationSection />
      <Services />
      <InitiativeTeaser />
      <WhyHealingTech />
      <RequirementsCTA />
    </>
  );
}
