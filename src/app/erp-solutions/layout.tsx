import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Explore ERP Solutions",
  description:
    "Browse HealingTech Labs ERP platforms from a Malawi software company: learning, government, healthcare, finance, HR, and enterprise systems.",
  path: "/erp-solutions",
  keywords: [
    "ERP Malawi",
    "ERP solutions Malawi",
    "enterprise resource planning",
    "LMS platform",
    "government ERP",
    "healthcare ERP",
    "HealingTech Labs ERP",
  ],
  ogImage: "/images/card-erp.png",
  ogImageAlt: "HealingTech Labs ERP solutions portfolio",
});

export default function ERPLayout({ children }: { children: React.ReactNode }) {
  return children;
}
