import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import { siteImages } from "@/data/site-images";

export default function CorporateHero() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white">
      <div className="container-page section-padding">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="section-label">HealingTech Labs</p>
            <h1 className="section-heading mt-3 text-3xl sm:text-4xl max-w-xl">
              AI Solutions, Software &amp; Automation
            </h1>
            <p className="section-lead max-w-lg">{company.heroIntro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/requirements" className="btn-primary">
                Start Your Project
                <ArrowRight size={16} />
              </Link>
              <Link href="#ai-solutions" className="btn-secondary">
                Our AI Solutions
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-lg border border-[var(--color-border)]">
              <Image
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
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
