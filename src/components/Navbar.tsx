"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Vision & Mission", href: "/#vision-mission" },
  { label: "Services", href: "/#services" },
  { label: "Initiative", href: "/initiative" },
];

const menuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -16 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-100"
          : "bg-white/80 backdrop-blur-md border-b border-slate-100/80"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-16 lg:h-20" : "h-20 lg:h-28"
          }`}
        >
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <motion.div
              animate={{ scale: scrolled ? 0.85 : 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-teal-100 bg-white group-hover:ring-teal-300 transition-all"
            >
              <Image
                src="/logo.jpeg"
                alt="HealingTech Labs"
                width={112}
                height={112}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </motion.div>
            <span className="hidden sm:block font-semibold text-slate-800 tracking-tight text-base lg:text-lg group-hover:text-brand-teal transition-colors">
              HealingTech <span className="text-brand-teal">Labs</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="relative px-4 py-2 group">
                <span className="text-sm font-medium text-slate-600 group-hover:text-brand-teal transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/requirements"
                className="ml-3 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-lg hover:shadow-teal-500/30 transition-shadow"
              >
                Requirements Portal
              </Link>
            </motion.div>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-xl text-slate-600 hover:bg-teal-50 hover:text-brand-teal transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
            id="mobile-navigation"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="px-4 py-4 space-y-1"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 text-slate-700 font-medium rounded-xl hover:bg-teal-50 hover:text-brand-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  href="/requirements"
                  onClick={() => setOpen(false)}
                  className="block mt-2 px-4 py-3 text-center font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl shadow-lg shadow-teal-500/20"
                >
                  Requirements Portal
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
