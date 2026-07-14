import CorporateHero from "@/components/CorporateHero";
import VisionMission from "@/components/VisionMission";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import BootcampsSection from "@/components/BootcampsSection";
import RequirementsCTA from "@/components/RequirementsCTA";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "HealingTech Labs | Malawi Software Company | AI, Innovation & Automation",
  description:
    "HealingTech Labs is a Malawi software company. Custom software, websites, mobile apps, business automation, AI coding bootcamps, and intelligent systems for organizations in Malawi and worldwide.",
  path: "/",
  keywords: [
    ...siteConfig.keywords,
    "coding bootcamp Malawi",
    "AI bootcamp for teens",
    "children coding classes Malawi",
  ],
});

export default function Home() {
  return (
    <>
      <CorporateHero />
      <VisionMission />
      <AboutSection />
      <Services />
      <BootcampsSection />
      <RequirementsCTA />
    </>
  );
}
