import { createPageMetadata } from "@/lib/seo";
import { company } from "@/data/company";
import { contactInfo } from "@/data/contact";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for HealingTech Labs. How we collect, use, and protect information submitted through our website and requirements portal.",
  path: "/privacy",
  noIndex: false,
});

export default function PrivacyPage() {
  return (
    <div className="pt-8 pb-16 section-padding">
      <div className="container-page max-w-3xl">
        <p className="section-label">Legal</p>
        <h1 className="section-heading mt-2">Privacy Policy</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-base font-semibold text-brand-navy">Overview</h2>
            <p className="mt-3">
              {company.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy.
              This policy explains how we handle information when you visit our website or submit
              project details through our requirements portal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy">Information we collect</h2>
            <p className="mt-3">
              We may collect information you voluntarily provide, such as your name, email address,
              phone number, organization name, and project requirements when you complete a form or
              contact us. We may also collect standard technical data such as browser type and
              pages visited to improve our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy">How we use information</h2>
            <p className="mt-3">
              We use submitted information to respond to inquiries, understand project needs,
              prepare proposals, and deliver our software and technology services. We do not sell
              your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-brand-navy">Contact</h2>
            <p className="mt-3">
              If you have questions about this privacy policy, contact us at{" "}
              <a
                href={`mailto:${contactInfo.emailTo}`}
                className="text-brand-teal hover:text-brand-blue transition-colors"
              >
                {contactInfo.emailDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
