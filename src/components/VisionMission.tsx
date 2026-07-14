"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { company } from "@/data/company";

export default function VisionMission() {
  return (
    <section id="vision-mission" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Vision &amp; Mission
          </h2>
          <p className="mt-4 text-lg text-slate-600">{company.tagline}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-teal-50/80 to-white border border-brand-teal/20"
          >
            <div className="inline-flex p-3 rounded-xl bg-brand-teal text-white mb-6">
              <Eye size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">{company.vision}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-cyan-50/80 to-white border border-brand-blue/20"
          >
            <div className="inline-flex p-3 rounded-xl bg-brand-blue text-white mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">{company.mission}</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-lg text-slate-700 max-w-3xl mx-auto font-medium italic"
        >
          &ldquo;{company.closingMessage}&rdquo;
        </motion.p>
      </div>
    </section>
  );
}
