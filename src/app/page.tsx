import CorporateHero from "@/components/CorporateHero";
import VisionMission from "@/components/VisionMission";
import AboutSection from "@/components/AboutSection";
import AISolutionsSection from "@/components/AISolutionsSection";
import Services from "@/components/Services";
import BootcampsSection from "@/components/BootcampsSection";
import RequirementsCTA from "@/components/RequirementsCTA";
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
      <CorporateHero />
      <VisionMission />
      <AboutSection />
      <AISolutionsSection />
      <Services />
      <BootcampsSection />
      <RequirementsCTA />
    </>
  );
}
