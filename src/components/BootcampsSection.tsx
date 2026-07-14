import Image from "next/image";
import { bootcamps, bootcampEnrollUrl } from "@/data/bootcamps";

export default function BootcampsSection() {
  return (
    <section id="bootcamps" className="section-padding bg-white border-t border-[var(--color-border)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 lg:order-2">
            <p className="section-label">Education</p>
            <h2 className="section-heading mt-2">{bootcamps.headline}</h2>
            <p className="section-lead max-w-prose">{bootcamps.intro}</p>

            <ul className="mt-10 space-y-6 border-t border-[var(--color-border)] pt-8">
              {bootcamps.programs.map((program) => (
                <li key={program.title} className="grid sm:grid-cols-[9rem_1fr] gap-3 sm:gap-6">
                  <span className="text-sm font-semibold text-brand-navy">{program.title}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{program.description}</p>
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              {bootcamps.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-teal shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <a href={bootcampEnrollUrl()} className="btn-primary mt-10">
              Enroll
            </a>
          </div>

          <div className="lg:col-span-5 lg:order-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-[var(--color-border)]">
              <Image
                src="/images/r1.jpg"
                alt="Artificial intelligence and technology innovation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
