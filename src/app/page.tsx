import CorporateHero from "@/components/CorporateHero";
import VisionMission from "@/components/VisionMission";
import AboutSection from "@/components/AboutSection";
import AISolutionsSection from "@/components/AISolutionsSection";
import Services from "@/components/Services";
import BootcampsSection from "@/components/BootcampsSection";
import RequirementsCTA from "@/components/RequirementsCTA";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title:
    "HealingTech Labs | AI Lab & Innovation Lab in Malawi | Build AI Solutions",
  description: siteConfig.defaultDescription,
  path: "/",
  keywords: [...siteConfig.keywords],
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
        <AboutSection />
      </Reveal>
      <Reveal delay={0.05}>
        <AISolutionsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <Services />
      </Reveal>
      <Reveal delay={0.05}>
        <BootcampsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <RequirementsCTA />
      </Reveal>
    </>
  );
}
