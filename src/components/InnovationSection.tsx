import { company } from "@/data/company";

export default function InnovationSection() {
  return (
    <section id="innovation" className="section-padding bg-white content-rule">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="section-label">Capabilities</p>
            <h2 className="section-heading mt-2">Smart Systems &amp; Technology Solutions</h2>
            <p className="section-lead">
              We combine innovation, engineering excellence, and deep industry
              knowledge to deliver technology that moves organizations forward.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="space-y-0 border-t border-[var(--color-border)]">
              {company.innovationPillars.map((pillar, index) => (
                <li
                  key={pillar.title}
                  className="grid sm:grid-cols-[3rem_1fr] gap-4 sm:gap-6 py-8 border-b border-[var(--color-border)]"
                >
                  <span className="font-display text-sm text-brand-teal tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-brand-navy">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
