import Image from "next/image";
import { upcomingPrograms } from "@/data/initiative-programs";

export default function UpcomingPrograms() {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="upcoming-programs-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-brand-teal uppercase tracking-wider">
            On the Horizon
          </span>
          <h2 id="upcoming-programs-heading" className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
            Upcoming Programs
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed text-lg">
            New community programs launching soon — built for real people, real neighborhoods,
            and lasting impact across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {upcomingPrograms.map((program) => (
            <article
              key={program.id}
              className="group flex flex-col rounded-2xl bg-white border border-slate-100 overflow-hidden hover:border-teal-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-teal-900 bg-teal-100/95 border border-teal-200 rounded-full">
                  {program.status}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{program.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed flex-1">{program.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
