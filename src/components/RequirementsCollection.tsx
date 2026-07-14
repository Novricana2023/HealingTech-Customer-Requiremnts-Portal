import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { requirementCards } from "@/data/site-data";

export default function RequirementsCollection() {
  return (
    <section id="requirements" className="section-padding bg-[var(--color-surface)]">
      <div className="container-page">
        <div className="max-w-2xl mb-12">
          <p className="section-label">Get started</p>
          <h2 className="section-heading mt-2">Tell Us What You Need</h2>
          <p className="section-lead">
            Select the service that best matches your project and complete the
            requirements form.
          </p>
        </div>

        <div className="space-y-6">
          {requirementCards.map((card) => (
            <article
              key={card.id}
              className="grid md:grid-cols-12 gap-0 bg-white border border-[var(--color-border)] rounded-lg overflow-hidden"
            >
              <div className="md:col-span-4 relative min-h-[200px] md:min-h-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              <div className="md:col-span-8 p-6 lg:p-8 flex flex-col">
                <h3 className="font-display text-lg text-brand-navy">{card.title}</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">
                  {card.description}
                </p>
                <p className="mt-4 text-sm text-gray-500 italic border-l-2 border-brand-teal pl-3">
                  {card.instruction}
                </p>

                <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      {card.buttonText}
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <Link href={card.href} className="btn-primary">
                      {card.buttonText}
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
