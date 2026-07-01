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
  title: "HealingTech Labs | Malawi Software Company — AI & Digital Solutions",
  description:
    "HealingTech Labs is a Malawi-based technology company serving clients across Africa and worldwide — building AI, enterprise software, web and mobile applications, and digital platforms.",
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
