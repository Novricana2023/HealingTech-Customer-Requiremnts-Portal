import RequirementsHero from "@/components/RequirementsHero";
import RequirementsCollection from "@/components/RequirementsCollection";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Customer Requirements Portal",
  description:
    "Share your project requirements with HealingTech Labs. Select AI, website, web and mobile app, or ERP services and complete the requirements form to start your project.",
  path: "/requirements",
  keywords: [
    "HealingTech Labs requirements",
    "project requirements form",
    "AI project brief",
    "website development requirements",
    "mobile app requirements",
    "ERP inquiry",
  ],
});

export default function RequirementsPage() {
  return (
    <>
      <RequirementsHero />
      <RequirementsCollection />
    </>
  );
}
