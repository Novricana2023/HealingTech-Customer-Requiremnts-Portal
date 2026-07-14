import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { contactInfo, whatsappUrl } from "@/data/contact";
import { company } from "@/data/company";

const defaultWhatsAppMessage =
  "Hello HealingTech Labs, I would like to discuss a project.";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white">
              Healing<span className="text-brand-teal-light">Tech</span> Labs
            </h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              {company.tagline}. World-class technology with a mission to transform
              Africa&apos;s digital economy.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-slate-300 hover:text-brand-teal-light transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-300 hover:text-brand-teal-light transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/requirements"
                  className="text-slate-300 hover:text-brand-teal-light transition-colors"
                >
                  Requirements Portal
                </Link>
              </li>
              <li>
                <Link
                  href="/erp-solutions"
                  className="text-slate-300 hover:text-brand-teal-light transition-colors"
                >
                  Explore ERP Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-slate-300 hover:text-brand-teal-light transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.emailTo}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-brand-teal-light transition-colors"
                >
                  <Mail size={16} className="shrink-0" />
                  {contactInfo.emailDisplay}
                </a>
              </li>
              {contactInfo.whatsappNumbers.map((phone) => (
                <li key={phone.phone}>
                  <a
                    href={whatsappUrl(phone.phone, defaultWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-brand-teal-light transition-colors underline-offset-2 hover:underline"
                  >
                    <MessageCircle size={16} className="shrink-0 text-brand-teal-light" />
                    <span>{phone.display}</span>
                    <span className="text-xs text-brand-teal-light">WhatsApp</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-brand-teal-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#about" className="hover:text-brand-teal-light transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
