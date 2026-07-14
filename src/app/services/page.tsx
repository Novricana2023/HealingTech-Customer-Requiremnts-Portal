import Services from "@/components/Services";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services | AI, Software & Innovation Lab Malawi",
  description:
    "HealingTech Labs Malawi services: build AI solutions, websites, web and mobile apps, custom software, ERP systems, automation, and cloud platforms.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Reveal>
      <Services />
    </Reveal>
  );
}
