"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { requirementCards } from "@/data/site-data";

export default function RequirementsCollection() {
  return (
    <section id="requirements" className="py-16 lg:py-24 bg-slate-50 border-y border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-brand-teal uppercase tracking-wider">
            Start Your Project
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Tell Us What You Need
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Select the service that best matches your project and complete the
            requirements form.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {requirementCards.map((card, index) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/10 hover:border-teal-200 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 lg:p-8">
                <p className="text-slate-600 leading-relaxed">{card.description}</p>
                <p className="mt-4 text-sm text-slate-500 italic border-l-2 border-teal-400 pl-3">
                  {card.instruction}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all group/btn"
                    >
                      {card.buttonText}
                      <ExternalLink
                        size={16}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </a>
                  ) : (
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all group/btn"
                    >
                      {card.buttonText}
                      <ArrowUpRight
                        size={16}
                        className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
