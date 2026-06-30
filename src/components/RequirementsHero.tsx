"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, FileText } from "lucide-react";

export default function RequirementsHero() {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      <div className="relative w-full min-h-[520px] lg:min-h-[580px]">
        <Image
          src="/images/requirements-hero.jpg"
          alt="Hands on MacBook — project requirements and technology"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm">
              <ClipboardList size={16} />
              Customer Requirements Collection Portal
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
              Share Your Requirements So We Can{" "}
              <span className="text-teal-300">Design Your Solution</span>
            </h1>

            <p className="mt-5 text-lg text-white/90 leading-relaxed max-w-xl">
              Select the service you need, complete the requirements form, and
              provide as much detail as possible. We use your information to
              design the right AI, web apps, mobile apps, websites, software, or ERP
              solution for your organization.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="#requirements"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-xl hover:shadow-teal-500/30 transition-all hover:-translate-y-0.5"
              >
                Select a Service &amp; Open Form
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all"
              >
                Back to Main Website
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 p-6 lg:p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md max-w-4xl"
          >
            <div className="flex items-start gap-3">
              <FileText className="text-teal-300 shrink-0 mt-0.5 hidden sm:block" size={22} />
              <p className="text-white/95 text-base lg:text-lg leading-relaxed">
                <span className="font-semibold text-teal-300">This page is for collecting your project information.</span>{" "}
                Choose a service below and open the matching form. The more you
                tell us, the better we can tailor AI, web apps, mobile apps, websites,
                or ERP solutions to your needs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
