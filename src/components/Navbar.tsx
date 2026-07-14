"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/brand";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AI Solutions", href: "/ai-solutions" },
  { label: "Services", href: "/services" },
  { label: "Bootcamps", href: "/bootcamps" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)] transition-shadow duration-300">
      <nav className="container-page" aria-label="Main navigation">
        <div className="flex items-center justify-between h-24 sm:h-28 lg:h-32">
          <Link href="/" className="flex items-center shrink-0 min-w-0 py-2">
            <Image
              src={brand.logo}
              alt={brand.logoAlt}
              width={360}
              height={140}
              className="h-20 sm:h-24 lg:h-[7.5rem] w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    active
                      ? "text-brand-navy font-semibold"
                      : "text-gray-600 hover:text-brand-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/requirements" className="btn-portal">
              Requirements Portal
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-600 hover:text-brand-navy"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-[var(--color-border)] bg-white animate-fade-slide-in"
        >
          <div className="container-page py-4 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 border-b border-gray-100 last:border-0 transition-colors ${
                    active
                      ? "text-brand-navy font-semibold"
                      : "text-gray-700 hover:text-brand-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/requirements"
              onClick={() => setOpen(false)}
              className="btn-portal w-full mt-4"
            >
              Requirements Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
