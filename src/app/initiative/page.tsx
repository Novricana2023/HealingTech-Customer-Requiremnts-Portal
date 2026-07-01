import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  GraduationCap,
  Users,
  Lightbulb,
  Target,
  ArrowLeft,
  Handshake,
  Briefcase,
  PiggyBank,
  ExternalLink,
} from "lucide-react";
import { company } from "@/data/company";
import { initiative } from "@/data/initiative";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { brand } from "@/lib/brand";
import UpcomingPrograms from "@/components/UpcomingPrograms";

export const metadata = createPageMetadata({
  title: "HealingTech Initiative",
  description:
    "HealingTech Initiative is an independent social impact program — digital skills, coding bootcamps, mental health programs, and youth opportunity across Africa. Technology partner: HealingTech Labs.",
  path: "/initiative",
  keywords: [
    "HealingTech Initiative",
    "digital skills Africa",
    "coding bootcamp Malawi",
    "youth mental health programs",
    "technology scholarships",
    "social impact technology",
  ],
});

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
  const { technologyPartner } = siteConfig;

  return (
    <>
      <section className="hero-gradient pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-teal mb-8"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Home
          </Link>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-semibold">
            <Heart size={16} aria-hidden="true" />
            Independent Social Impact Program
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-slate-900">
            {initiative.name}
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">{initiative.intro}</p>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            {company.initiativeSummary}
          </p>

          <p className="mt-4 text-base text-slate-500 leading-relaxed">{initiative.independenceNote}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="technology-partner-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6 p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="shrink-0 flex items-center justify-center rounded-xl bg-white border border-slate-200 shadow-sm px-5 py-4">
              <Image
                src={brand.logo}
                alt={brand.logoAlt}
                width={200}
                height={64}
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 text-brand-teal font-semibold text-sm uppercase tracking-wider">
                <Handshake size={18} aria-hidden="true" />
                {initiative.partner.role}
              </div>
              <h2 id="technology-partner-heading" className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                {initiative.partner.name}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                {initiative.partner.summary}
              </p>
              <a
                href={technologyPartner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-brand-teal hover:underline"
              >
                {technologyPartner.name}
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50" aria-labelledby="youth-opportunity-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <article className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-100">
              <Briefcase className="text-brand-teal mb-4" size={28} aria-hidden="true" />
              <h2 id="youth-opportunity-heading" className="text-xl font-bold text-slate-900">
                Youth Employment &amp; Opportunity
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{initiative.partner.employment}</p>
            </article>
            <article className="p-6 lg:p-8 rounded-2xl bg-white border border-slate-100">
              <PiggyBank className="text-brand-teal mb-4" size={28} aria-hidden="true" />
              <h2 className="text-xl font-bold text-slate-900">How Our Work Is Sustained</h2>
              <p className="mt-3 text-slate-600 leading-relaxed mb-4">{initiative.partner.support}</p>
              <ul className="space-y-2">
                {initiative.fundingSources.map((source) => (
                  <li key={source} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" aria-hidden="true" />
                    {source}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="initiative-programs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="initiative-programs-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12">
            What We Focus On
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {programs.map((program) => (
              <article
                key={program.title}
                className="p-6 lg:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all"
              >
                <program.icon className="text-brand-teal mb-4" size={28} aria-hidden="true" />
                <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{program.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <UpcomingPrograms />

      <section className="py-16 bg-gradient-to-r from-brand-teal to-brand-blue" aria-labelledby="initiative-partner-heading">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 id="initiative-partner-heading" className="text-2xl sm:text-3xl font-bold text-white">
            Partner With Us
          </h2>
          <p className="mt-4 text-white/90 text-lg">
            Interested in supporting digital inclusion, scholarships, youth employment, or community
            programs? We welcome grants, donations, and partnerships from organisations and individuals
            who share our mission.
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
