import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Explore ERP Solutions",
  description:
    "Browse HealingTech Labs enterprise ERP platforms — learning management, government systems, healthcare, finance, HR, legal, agriculture, and more. Customizable for your organization.",
  path: "/erp-solutions",
  keywords: [
    "ERP solutions Africa",
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
