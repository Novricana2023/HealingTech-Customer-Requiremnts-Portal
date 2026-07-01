"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { company } from "@/data/company";
import { initiative } from "@/data/initiative";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-brand-teal uppercase tracking-wider">
              About HealingTech Labs
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              A Leading African Technology Company
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">{company.about}</p>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We engineer AI solutions, enterprise systems, e-commerce platforms, digital
              marketplaces, learning platforms, government systems, and custom products
              with the professionalism, scalability, and excellence clients expect from
              world-class technology partners.
            </p>
            <p className="mt-4 text-base text-slate-500 leading-relaxed flex items-start gap-2">
              <Heart size={18} className="text-brand-teal shrink-0 mt-0.5" />
              <span>
                As technology partner to{" "}
                <a
                  href={initiative.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-teal font-semibold hover:underline"
                >
                  {initiative.name}
                </a>
                , {company.name} supports independent social impact work — creating employment
                for trained youth and contributing to programs that expand digital skills,
                scholarships, and inclusion across Africa.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {company.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-white border border-slate-100 text-center hover:border-teal-200 hover:shadow-lg transition-all"
              >
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
