import { whyFeatures } from "@/data/site-data";

export default function WhyHealingTech() {
  const midpoint = Math.ceil(whyFeatures.length / 2);
  const columns = [whyFeatures.slice(0, midpoint), whyFeatures.slice(midpoint)];

  return (
    <section id="why-healingtech" className="section-padding bg-white">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="section-label">Why choose us</p>
            <h2 className="section-heading mt-2">Why HealingTech Labs</h2>
            <p className="section-lead">
              Trusted engineering, innovation, and long-term partnership built for
              organizations that demand excellence.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {columns.map((column, colIndex) => (
              <ul key={colIndex} className="space-y-8">
                {column.map((feature) => (
                  <li key={feature.title}>
                    <h3 className="text-sm font-semibold text-brand-navy">{feature.title}</h3>
                    <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
