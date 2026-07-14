import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/company";
import { siteImages } from "@/data/site-images";

export default function AISolutionsSection() {
  const { aiSolutions } = company;

  return (
    <section id="ai-solutions" className="section-padding bg-white border-t border-[var(--color-border)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-[var(--color-border)]">
              <Image
                src={siteImages.r1.src}
                alt={siteImages.r1.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="section-label">Artificial intelligence</p>
            <h2 className="section-heading mt-2">{aiSolutions.headline}</h2>
            <p className="section-lead max-w-prose">{aiSolutions.intro}</p>

            <ul className="mt-10 space-y-6 border-t border-[var(--color-border)] pt-8">
              {aiSolutions.points.map((point) => (
                <li key={point.title}>
                  <h3 className="text-sm font-semibold text-brand-navy">{point.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">{point.description}</p>
                </li>
              ))}
            </ul>

            <Link href="/requirements" className="btn-primary mt-10">
              Start an AI Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
