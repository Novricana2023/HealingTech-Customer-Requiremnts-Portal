import Services from "@/components/Services";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Services",
  description:
    "Explore HealingTech Labs services: AI solutions, websites, web and mobile apps, custom software, ERP systems, automation, and cloud solutions.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Reveal>
      <Services />
    </Reveal>
  );
}
