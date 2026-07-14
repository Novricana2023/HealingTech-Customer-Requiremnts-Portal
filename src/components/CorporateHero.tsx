import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";

export default function CorporateHero() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white">
      <div className="container-page section-padding">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 lg:order-1">
            <p className="section-label">HealingTech Labs</p>
            <h1 className="section-heading mt-3 text-3xl sm:text-4xl max-w-xl">
              Software, Automation &amp; Intelligent Solutions
            </h1>
            <p className="section-lead max-w-lg">{company.heroIntro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/requirements" className="btn-primary">
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link href="#bootcamps" className="btn-secondary">
                Coding Bootcamps
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-2">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg border border-[var(--color-border)]">
              <Image
                src="/images/r3.jpg"
                alt="HealingTech Labs team collaborating on technology projects"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
