import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RequirementsCTA() {
  return (
    <section className="bg-brand-navy-dark text-white">
      <div className="container-page section-padding">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-base text-gray-300 leading-relaxed max-w-2xl">
              Tell us what you need. Our requirements portal makes it easy to share
              your vision with HealingTech Labs. Select your service, complete the
              form, and our team will design the right solution for you.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/requirements" prefetch className="btn-on-dark">
              Open Requirements Portal
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
