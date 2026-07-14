"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Smartphone,
  Code,
  Cpu,
  BarChart3,
  Building2,
  Landmark,
  Workflow,
  Cloud,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";
import { services } from "@/data/site-data";

const iconMap: Record<string, LucideIcon> = {
  brain: Brain,
  globe: Globe,
  smartphone: Smartphone,
  code: Code,
  cpu: Cpu,
  "bar-chart": BarChart3,
  building: Building2,
  landmark: Landmark,
  workflow: Workflow,
  cloud: Cloud,
  layout: LayoutGrid,
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From AI and business automation to websites, mobile apps, and enterprise
            platforms built to help you scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl bg-white border border-slate-100 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
