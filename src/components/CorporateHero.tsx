"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CorporateHero() {
  return (
    <section className="relative pt-20 lg:pt-24">
      {/* Full-width tech cover */}
      <div className="relative w-full h-[52vh] min-h-[340px] max-h-[560px]">
        <Image
          src="/images/cover-tech-hero.jpg"
          alt="African tech professionals collaborating in the office — HealingTech Systems"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-teal-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold backdrop-blur-sm">
                <Sparkles size={16} />
                Innovation-Driven IT Solutions
              </div>

              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                Building Intelligent{" "}
                <span className="text-teal-300">Smart Systems</span> For Modern
                Organizations
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                HealingTech Systems is an IT firm specializing in AI, web apps,
                mobile applications, automation, and enterprise platforms.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/requirements"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-xl hover:shadow-teal-500/40 transition-all"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white bg-white/10 border border-white/30 rounded-xl hover:bg-white/20 backdrop-blur-sm transition-all"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
