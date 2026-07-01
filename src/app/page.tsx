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
  title: "HealingTech Initiative | Digital Skills & Youth Opportunity in Africa",
  description:
    "HealingTech Initiative is an independent social impact program in Malawi — digital skills, scholarships, mental wellness, and community programs for youth across Africa.",
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
