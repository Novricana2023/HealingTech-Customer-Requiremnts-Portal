import CorporateHero from "@/components/CorporateHero";
import VisionMission from "@/components/VisionMission";
import AboutSection from "@/components/AboutSection";
import InnovationSection from "@/components/InnovationSection";
import Services from "@/components/Services";
import RequirementsCTA from "@/components/RequirementsCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "HealingTech Labs | Malawi Software Company | AI, Innovation & Automation",
  description:
    "HealingTech Labs is a Malawi software company. Custom software, websites, mobile apps, business automation, and intelligent systems for organizations in Malawi and worldwide.",
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
      <RequirementsCTA />
    </>
  );
}
