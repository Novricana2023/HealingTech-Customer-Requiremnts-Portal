import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { contactInfo, whatsappUrl } from "@/data/contact";

const defaultWhatsAppMessage =
  "Hello HealingTech Systems, I would like to discuss a project requirement.";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-slate-900">HealingTech Systems</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Customer requirements collection — tell us what you need and we
              design the right solution.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#requirements" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Requirements Forms
                </Link>
              </li>
              <li>
                <Link href="/erp-solutions" className="text-slate-600 hover:text-brand-teal transition-colors">
                  Explore ERP Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.emailTo}`}
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors"
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
                    className="inline-flex items-center gap-2 text-slate-600 hover:text-brand-teal transition-colors underline-offset-2 hover:underline"
                  >
                    <MessageCircle size={16} className="shrink-0 text-green-600" />
                    <span>{phone.display}</span>
                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                      WhatsApp
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} HealingTech Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
