"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { brand } from "@/lib/brand";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Vision & Mission", href: "/#vision-mission" },
  { label: "Services", href: "/#services" },
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
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)]">
      <nav className="container-page" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-[4.25rem]">
          <Link href="/" className="flex items-center gap-3 shrink-0 min-w-0">
            <Image
              src={brand.logo}
              alt={brand.logoAlt}
              width={160}
              height={48}
              className="h-9 sm:h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-brand-navy transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/requirements" className="btn-primary">
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
          className="lg:hidden border-t border-[var(--color-border)] bg-white"
        >
          <div className="container-page py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-gray-700 hover:text-brand-navy border-b border-gray-100 last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/requirements"
              onClick={() => setOpen(false)}
              className="btn-primary w-full mt-4"
            >
              Requirements Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
