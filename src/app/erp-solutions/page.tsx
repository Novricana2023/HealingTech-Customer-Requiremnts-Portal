"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { erpProducts } from "@/data/erp-data";
import ERPModal from "@/components/ERPModal";
import { contactInfo } from "@/data/contact";
import type { ERPProduct } from "@/data/erp-data";

export default function ERPSolutionsPage() {
  const [selectedProduct, setSelectedProduct] = useState<ERPProduct | null>(null);

  return (
    <>
      <section className="hero-gradient pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-teal transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
              Explore ERP Solutions
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Browse enterprise platforms that can be customized for your
              organization. Each ERP is built with enterprise-grade architecture
              and designed for real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {erpProducts.map((product, index) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-900/10 hover:border-teal-200 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider">
                    {product.subtitle}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-slate-900">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {product.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="text-xs px-2 py-1 bg-slate-50 text-slate-600 rounded-md"
                      >
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 4 && (
                      <li className="text-xs px-2 py-1 text-slate-400">
                        +{product.features.length - 4} more
                      </li>
                    )}
                  </ul>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-5 w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-lg hover:shadow-teal-500/25 transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 rounded-2xl bg-white border border-slate-100 shadow-sm"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Need a Different ERP Solution?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              If you do not see the exact solution you need, contact HealingTech
              Systems and we can design a custom ERP tailored to your organization.
            </p>
            <a
              href={`mailto:${contactInfo.emailTo}?subject=Custom%20ERP%20Inquiry`}
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 text-white font-semibold bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-xl hover:shadow-teal-500/30 transition-all"
            >
              <Mail size={18} />
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <ERPModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
