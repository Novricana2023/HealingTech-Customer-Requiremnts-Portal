import { company } from "@/data/company";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="section-padding bg-white border-b border-[var(--color-border)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-label">Our direction</p>
            <h2 className="section-heading mt-2">Vision &amp; Mission</h2>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <article className="pb-10 border-b border-[var(--color-border)]">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Vision
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{company.vision}</p>
            </article>
            <article>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Mission
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{company.mission}</p>
            </article>
            <blockquote className="pl-5 border-l-2 border-brand-teal">
              <p className="font-display text-base text-gray-700 leading-relaxed italic">
                &ldquo;{company.closingMessage}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
