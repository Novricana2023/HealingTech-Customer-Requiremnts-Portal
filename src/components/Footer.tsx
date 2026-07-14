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
      <div className="container-page py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8">
          <div className="md:col-span-5">
            <p className="font-display text-lg text-white">HealingTech Labs</p>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-sm">
              {company.tagline}. World-class technology with a mission to transform
              Africa&apos;s digital economy.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Quick links
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#ai-solutions" className="text-gray-300 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#bootcamps" className="text-gray-300 hover:text-white transition-colors">
                  Coding Bootcamps
                </Link>
              </li>
              <li>
                <Link href="/requirements" className="text-gray-300 hover:text-white transition-colors">
                  Requirements Portal
                </Link>
              </li>
              <li>
                <Link href="/erp-solutions" className="text-gray-300 hover:text-white transition-colors">
                  Explore ERP Solutions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.emailTo}`}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={15} className="shrink-0 opacity-70" />
                  {contactInfo.emailDisplay}
                </a>
              </li>
              {contactInfo.whatsappNumbers.map((phone) => (
                <li key={phone.phone}>
                  <a
                    href={whatsappUrl(phone.phone, defaultWhatsAppMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <MessageCircle size={15} className="shrink-0 opacity-70" />
                    {phone.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {year} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
