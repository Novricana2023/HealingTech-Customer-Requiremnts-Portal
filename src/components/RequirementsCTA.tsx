import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/data/site-images";

export default function RequirementsCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={siteImages.requirements.src}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="container-page section-padding relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="section-label">Requirements portal</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-base text-white/85 leading-relaxed max-w-2xl">
              Tell us what you need. Our requirements portal makes it easy to share
              your vision with HealingTech Labs. Select your service, complete the
              form, and our team will design the right solution for you.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/requirements" prefetch className="btn-primary">
              Open Requirements Portal
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
