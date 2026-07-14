import Image from "next/image";
import { company } from "@/data/company";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[var(--color-surface)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-[var(--color-border)]">
              <Image
                src="/images/r2.jpg"
                alt="Data-driven software and analytics in professional use"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="section-label">Company</p>
            <h2 className="section-heading mt-2">About HealingTech Labs</h2>
            <p className="mt-3 text-base font-medium text-brand-navy">{company.tagline}</p>
            <p className="mt-6 text-gray-600 leading-relaxed max-w-prose">{company.about}</p>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-lg overflow-hidden">
          {company.stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-6 text-center">
              <dt className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</dt>
              <dd className="stat-value mt-2">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
