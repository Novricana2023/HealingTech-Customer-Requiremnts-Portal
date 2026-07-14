"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Wrench,
  Lock,
  TrendingUp,
  Headphones,
  Palette,
  Award,
  LucideIcon,
} from "lucide-react";
import { whyFeatures } from "@/data/site-data";

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  shield: Shield,
  wrench: Wrench,
  lock: Lock,
  "trending-up": TrendingUp,
  headphones: Headphones,
  palette: Palette,
  award: Award,
};

export default function WhyHealingTech() {
  return (
    <section id="why-healingtech" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-teal-50/80 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Why HealingTech Labs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Trusted engineering, innovation, and long-term partnership built for
            organizations that demand excellence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all group"
              >
                <div className="inline-flex p-3 rounded-xl bg-teal-50 text-brand-teal group-hover:bg-gradient-to-br group-hover:from-brand-teal group-hover:to-brand-blue group-hover:text-white transition-all">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
