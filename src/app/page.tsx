import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RequirementsCollection from "@/components/RequirementsCollection";
import WhyHealingTech from "@/components/WhyHealingTech";

export default function Home() {
  return (
    <>
      <Hero />
      <RequirementsCollection />
      <Services />
      <WhyHealingTech />
    </>
  );
}
