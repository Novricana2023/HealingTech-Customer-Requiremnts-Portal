import { company } from "@/data/company";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="section-label">Company</p>
            <h2 className="section-heading mt-2">About HealingTech Labs</h2>
            <p className="mt-3 text-base font-medium text-brand-navy">{company.tagline}</p>
            <p className="mt-6 text-gray-600 leading-relaxed">{company.about}</p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We engineer AI solutions, enterprise systems, e-commerce platforms, digital
              marketplaces, learning platforms, government systems, and custom products
              with the professionalism, scalability, and excellence clients expect from
              world-class technology partners.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="border border-[var(--color-border)] rounded-lg divide-y divide-[var(--color-border)]">
              {company.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline justify-between gap-4 px-6 py-5"
                >
                  <span className="text-sm text-gray-500">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
