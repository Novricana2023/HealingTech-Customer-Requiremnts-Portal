"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList } from "lucide-react";

export default function RequirementsCTA() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-brand-teal to-brand-blue relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <ClipboardList className="mx-auto text-white/90 mb-6" size={40} />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Tell us what you need. Our requirements portal makes it easy to share
            your vision — select your service, complete the form, and let our
            team design the right solution for you.
          </p>
          <Link
            href="/requirements"
            prefetch
            className="relative z-20 inline-flex items-center gap-2 mt-8 px-8 py-4 bg-white text-teal-700 font-semibold rounded-xl hover:shadow-xl transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            Open Requirements Portal
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
