"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles, Rocket, Building2, Heart, LucideIcon } from "lucide-react";
import { company } from "@/data/company";

const iconMap: Record<string, LucideIcon> = {
  cpu: Cpu,
  sparkles: Sparkles,
  rocket: Rocket,
  building: Building2,
  heart: Heart,
};

export default function InnovationSection() {
  return (
    <section id="innovation" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Smart Systems &amp; Technology Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We combine innovation, engineering excellence, and deep industry
            knowledge to deliver technology that moves organizations forward.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {company.innovationPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Cpu;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all group"
              >
                <div className="inline-flex p-3 rounded-xl bg-teal-50 text-brand-teal group-hover:bg-gradient-to-br group-hover:from-brand-teal group-hover:to-brand-blue group-hover:text-white transition-all">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
