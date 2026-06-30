import CorporateHero from "@/components/CorporateHero";
import VisionMission from "@/components/VisionMission";
import AboutSection from "@/components/AboutSection";
import InnovationSection from "@/components/InnovationSection";
import Services from "@/components/Services";
import WhyHealingTech from "@/components/WhyHealingTech";
import RequirementsCTA from "@/components/RequirementsCTA";

export default function Home() {
  return (
    <>
      <CorporateHero />
      <VisionMission />
      <AboutSection />
      <InnovationSection />
      <Services />
      <WhyHealingTech />
      <RequirementsCTA />
    </>
  );
}
