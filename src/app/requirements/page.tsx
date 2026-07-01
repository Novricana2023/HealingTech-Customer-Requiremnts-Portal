import RequirementsHero from "@/components/RequirementsHero";
import RequirementsCollection from "@/components/RequirementsCollection";

export const metadata = {
  title: "Requirements Portal | HealingTech Labs",
  description:
    "Share your project requirements with HealingTech Labs. Select your service and complete the requirements form.",
};

export default function RequirementsPage() {
  return (
    <>
      <RequirementsHero />
      <RequirementsCollection />
    </>
  );
}
