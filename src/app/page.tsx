import CorporateHero from "@/components/CorporateHero";
import VisionMission from "@/components/VisionMission";
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
        <RequirementsCTA />
      </Reveal>
    </>
  );
}
