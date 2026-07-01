"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, GraduationCap, Users, Lightbulb } from "lucide-react";
import { initiative } from "@/data/initiative";

const highlights = [
  {
    icon: GraduationCap,
    title: "Digital Skills & Education",
    text: "Technology education, digital literacy, and innovation programs that prepare the next generation.",
  },
  {
    icon: Users,
    title: "Inclusion & Access",
    text: "Scholarships and mentorship for financially disadvantaged youth and persons with disabilities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Opportunity",
    text: "Programs that connect underserved communities to technology, tools, and real-world opportunity.",
  },
];

export default function InitiativeTeaser() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-teal-50 via-white to-blue-50 border-y border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal uppercase tracking-wider">
              <Heart size={16} /> Independent Social Impact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              {initiative.name}
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">{initiative.intro}</p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {initiative.partner.name} serves as our technology partner — providing expertise,
              employment pathways for trained youth, and support that helps our programs reach more
              communities.
            </p>
            <Link
              href="/initiative"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-lg transition-shadow"
            >
              Learn About the Initiative
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm"
              >
                <item.icon className="text-brand-teal mb-2" size={24} />
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
