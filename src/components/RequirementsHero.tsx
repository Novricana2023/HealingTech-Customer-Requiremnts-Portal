import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/data/site-images";

export default function RequirementsHero() {
  return (
    <section className="border-b border-[var(--color-border)] bg-white">
      <div className="container-page section-padding">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="section-label">Requirements portal</p>
            <h1 className="section-heading mt-2 text-3xl sm:text-4xl">
              Share Your Requirements So We Can Design Your Solution
            </h1>
            <p className="section-lead">
              Select the service you need, complete the requirements form, and
              provide as much detail as possible. We use your information to
              design the right AI solution, web app, mobile app, website, software, or ERP
              system for your organization.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="#requirements" className="btn-primary">
                Select a Service &amp; Open Form
                <ArrowRight size={16} />
              </Link>
              <Link href="/" className="btn-secondary">
                Back to Main Website
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--color-border)]">
              <Image
                src={siteImages.requirements.src}
                alt={siteImages.requirements.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-3xl p-6 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)]">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-brand-navy">
              This page is for collecting your project information.
            </span>{" "}
            Choose a service below and open the matching form. The more you
            tell us, the better we can tailor AI solutions, web apps, mobile apps, websites,
            or ERP systems to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
