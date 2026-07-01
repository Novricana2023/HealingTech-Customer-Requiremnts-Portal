import Link from "next/link";
import { Heart, GraduationCap, Users, Lightbulb, Target, ArrowLeft } from "lucide-react";
import { company } from "@/data/company";

export const metadata = {
  title: "HealingTech Initiative | HealingTech Labs",
  description:
    "HealingTech Initiative is the social impact arm of HealingTech Labs — digital skills, scholarships, innovation, and inclusion for Africa's future.",
};

const programs = [
  {
    icon: GraduationCap,
    title: "Digital Skills & Technology Education",
    description:
      "Training programs, digital literacy, and hands-on technology education that prepare youth for careers in software, AI, and digital innovation.",
  },
  {
    icon: Users,
    title: "Scholarships & Inclusion",
    description:
      "Financial support and mentorship for financially disadvantaged youth and persons with disabilities — ensuring technology opportunity is accessible.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Mentorship",
    description:
      "Innovation programs, hackathons, and mentorship that connect underserved communities to tools, knowledge, and real pathways into tech.",
  },
  {
    icon: Target,
    title: "Community Technology Access",
    description:
      "Expanding access to technology resources and digital infrastructure so communities can participate in Africa's digital economy.",
  },
];

export default function InitiativePage() {
  return (
    <>
      <section className="hero-gradient pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-teal mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-semibold">
            <Heart size={16} />
            Social Impact Arm of HealingTech Labs
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-slate-900">
            HealingTech Initiative
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            HealingTech Initiative is the social impact arm of{" "}
            <strong>HealingTech Labs</strong> — not a separate organization, but the
            mission-driven extension of our work as a technology company.
          </p>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {company.initiativeSummary}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            How It Connects to HealingTech Labs
          </h2>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              HealingTech Labs is a world-class technology company first. We build AI
              solutions, enterprise software, e-commerce platforms, and digital products
              for clients across Africa and beyond.
            </p>
            <p>
              The commercial success of HealingTech Labs enables HealingTech Initiative
              to create sustainable social impact — reinvesting in digital skills training,
              technology education, innovation, and inclusion.
            </p>
            <p className="font-medium text-slate-800 italic">
              &ldquo;{company.closingMessage}&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">
            What We Focus On
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {programs.map((program) => (
              <div
                key={program.title}
                className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all"
              >
                <program.icon className="text-brand-teal mb-4" size={28} />
                <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-teal to-brand-blue">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Partner With Us
          </h2>
          <p className="mt-4 text-white/90 text-lg">
            Interested in supporting digital inclusion, scholarships, or innovation
            programs? Contact HealingTech Labs for partnership and collaboration
            opportunities.
          </p>
          <Link
            href="/requirements"
            className="inline-block mt-8 px-8 py-4 bg-white text-brand-teal font-semibold rounded-xl hover:shadow-xl transition-shadow"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
