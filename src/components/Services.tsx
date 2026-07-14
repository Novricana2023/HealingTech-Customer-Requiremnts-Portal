import { services } from "@/data/site-data";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="section-label">What we build</p>
            <h2 className="section-heading mt-2">Our Services</h2>
            <p className="section-lead">
              From AI solutions and business automation to websites, mobile apps, and enterprise
            platforms built to help you scale.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              {services.map((service) => (
                <li key={service.id} className="py-6 first:pt-8">
                  <h3 className="text-sm font-semibold text-brand-navy">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed max-w-prose">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
