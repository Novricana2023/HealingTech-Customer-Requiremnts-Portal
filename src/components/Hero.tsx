"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative hero-gradient pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-sm font-semibold">
              <ClipboardList size={16} />
              Customer Requirements Collection Portal
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Share Your Requirements So We Can{" "}
              <span className="gradient-text">Design Your Solution</span>
            </h1>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
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
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:bg-teal-50/50 transition-all"
              >
                View What We Build
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-100 animate-float">
              <Image
                src="/images/hero-illustration.png"
                alt="AI and Technology Solutions"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl opacity-20 blur-xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl opacity-20 blur-xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-teal-50 via-white to-blue-50 border border-teal-100/80 shadow-sm"
        >
          <div className="flex items-start gap-3 max-w-4xl mx-auto">
            <FileText className="text-brand-teal shrink-0 mt-0.5 hidden sm:block" size={22} />
            <p className="text-center sm:text-left text-slate-700 text-base lg:text-lg leading-relaxed">
              <span className="font-semibold text-brand-teal">This page is for collecting your project information.</span>{" "}
              Choose a service below and open the matching form. The more you
              tell us, the better we can tailor AI, web apps, mobile apps, websites,
              or ERP solutions to your needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
