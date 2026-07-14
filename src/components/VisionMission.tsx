import { company } from "@/data/company";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="section-padding bg-[var(--color-surface)]">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="section-label">Our direction</p>
          <h2 className="section-heading mt-2">Vision &amp; Mission</h2>
          <p className="section-lead">{company.tagline}</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-0 border border-[var(--color-border)] bg-white rounded-lg overflow-hidden">
          <article className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[var(--color-border)]">
            <p className="section-label">Vision</p>
            <h3 className="mt-2 text-lg font-semibold text-brand-navy">Our Vision</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{company.vision}</p>
          </article>
          <article className="p-8 lg:p-10">
            <p className="section-label">Mission</p>
            <h3 className="mt-2 text-lg font-semibold text-brand-navy">Our Mission</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">{company.mission}</p>
          </article>
        </div>

        <blockquote className="mt-10 pl-6 border-l-2 border-brand-teal max-w-3xl">
          <p className="font-display text-lg text-gray-700 leading-relaxed italic">
            &ldquo;{company.closingMessage}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
