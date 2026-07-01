"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Building2 } from "lucide-react";
import type { ERPProduct } from "@/data/erp-data";

interface ERPModalProps {
  product: ERPProduct | null;
  onClose: () => void;
}

export default function ERPModal({ product, onClose }: ERPModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-slate-100 text-slate-600 shadow-md transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          <div className="relative h-48 sm:h-64">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, 800px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-teal-300 text-sm font-medium">{product.subtitle}</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                {product.name}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1 h-5 bg-brand-teal rounded-full" />
                Overview
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{product.overview}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1 h-5 bg-brand-blue rounded-full" />
                Benefits
              </h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-3">
                {product.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2 text-slate-600 text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-brand-teal shrink-0 mt-0.5"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <span className="w-1 h-5 bg-emerald-500 rounded-full" />
                Features
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 text-sm font-medium text-teal-700 bg-teal-50 border border-teal-100 rounded-lg"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <Building2 size={18} className="text-brand-teal" />
                Industries Served
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 border border-blue-100 rounded-lg"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Product Screenshots
              </h3>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <Image
                  src={product.image}
                  alt={`${product.name} dashboard`}
                  width={800}
                  height={450}
                  sizes="(max-width: 640px) 100vw, 800px"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </section>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
