"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";

export default function CorporateHero() {
  return (
    <section className="relative pt-20 lg:pt-24">
      <div className="relative w-full h-[52vh] min-h-[340px] max-h-[560px]">
        <Image
          src="/images/cover-tech-hero.jpg"
          alt="HealingTech Labs software and technology solutions"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                Software, Automation &amp;{" "}
                <span className="text-brand-teal-light">Intelligent Solutions</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
                {company.heroIntro}
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-white bg-brand-navy border border-white/20 rounded-xl hover:bg-brand-navy-dark transition-all"
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
