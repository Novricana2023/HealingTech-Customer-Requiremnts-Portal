"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Requirements Forms", href: "#requirements" },
  { label: "What We Build", href: "#services" },
  { label: "ERP Solutions", href: "/erp-solutions" },
  { label: "Why Us", href: "#why-healingtech" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100"
          : "bg-white/80 backdrop-blur-md border-b border-slate-100/80"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-28">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-teal-100 bg-white">
              <Image
                src="/logo.jpeg"
                alt="HealingTech Systems"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="hidden sm:block font-semibold text-slate-800 tracking-tight text-base lg:text-lg">
              HealingTech <span className="text-brand-teal">Systems</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-teal rounded-lg hover:bg-teal-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#requirements"
              className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
            >
              Open Requirements Form
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-teal-50 hover:text-brand-teal"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#requirements"
                onClick={() => setOpen(false)}
                className="block mt-2 px-4 py-3 text-center font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl"
              >
                Open Requirements Form
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
