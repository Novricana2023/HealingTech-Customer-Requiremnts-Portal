import { services } from "@/data/site-data";

export default function Services() {
  const midpoint = Math.ceil(services.length / 2);
  const leftColumn = services.slice(0, midpoint);
  const rightColumn = services.slice(midpoint);

  return (
    <section id="services" className="section-padding bg-[var(--color-surface)]">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="section-label">What we build</p>
          <h2 className="section-heading mt-2">Our Services</h2>
          <p className="section-lead">
            From AI and business automation to websites, mobile apps, and enterprise
            platforms built to help you scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-0 border border-[var(--color-border)] bg-white rounded-lg overflow-hidden">
          {[leftColumn, rightColumn].map((column, colIndex) => (
            <ul
              key={colIndex}
              className={`divide-y divide-[var(--color-border)] ${colIndex === 0 ? "lg:border-r lg:border-[var(--color-border)]" : ""}`}
            >
              {column.map((service) => (
                <li key={service.id} className="px-6 py-6 lg:px-8">
                  <h3 className="text-sm font-semibold text-brand-navy leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
