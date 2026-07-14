import Image from "next/image";
import { bootcamps } from "@/data/bootcamps";
import { siteImages } from "@/data/site-images";
import BootcampEnrollForm from "@/components/BootcampEnrollForm";

export default function BootcampsSection() {
  return (
    <section id="bootcamps" className="section-padding bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-[var(--color-border)]">
              <Image
                src={siteImages.r3.src}
                alt={siteImages.r3.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="section-label">Education</p>
            <h2 className="section-heading mt-2">{bootcamps.headline}</h2>
            <p className="section-lead max-w-prose">{bootcamps.intro}</p>

            <ul className="mt-10 space-y-6 border-t border-[var(--color-border)] pt-8">
              {bootcamps.programs.map((program) => (
                <li key={program.title} className="grid sm:grid-cols-[10rem_1fr] gap-3 sm:gap-6">
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

            <a href="#enroll-form" className="btn-primary mt-8">
              Enroll
            </a>

            <BootcampEnrollForm />
          </div>
        </div>
      </div>
    </section>
  );
}
