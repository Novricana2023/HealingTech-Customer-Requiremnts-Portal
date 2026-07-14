"use client";

import { useState } from "react";
import Image from "next/image";
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
      <section className="border-b border-[var(--color-border)] bg-white">
        <div className="container-page section-padding pb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-brand-navy mb-8"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="max-w-2xl">
            <p className="section-label">Enterprise platforms</p>
            <h1 className="section-heading mt-2 text-3xl sm:text-4xl">
              Explore ERP Solutions
            </h1>
            <p className="section-lead">
              Browse enterprise platforms that can be customized for your
              organization. Each ERP is built with enterprise-grade architecture
              and designed for real-world impact.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {erpProducts.map((product) => (
              <article
                key={product.id}
                className="flex flex-col bg-white border border-[var(--color-border)] rounded-lg overflow-hidden"
              >
                <div className="relative h-40 border-b border-[var(--color-border)]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
                    {product.subtitle}
                  </p>
                  <h2 className="mt-1 font-display text-lg text-brand-navy">{product.name}</h2>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  <ul className="mt-4 space-y-1">
                    {product.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="text-xs text-gray-500">
                        {feature}
                      </li>
                    ))}
                    {product.features.length > 3 && (
                      <li className="text-xs text-gray-400">
                        +{product.features.length - 3} more features
                      </li>
                    )}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="btn-primary w-full mt-5"
                  >
                    Learn More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-[var(--color-border)]">
        <div className="container-page max-w-2xl">
          <h2 className="section-heading">Need a Different ERP Solution?</h2>
          <p className="section-lead">
            If you do not see the exact solution you need, contact HealingTech
            Labs and we can design a custom ERP tailored to your organization.
          </p>
          <a
            href={`mailto:${contactInfo.emailTo}?subject=Custom%20ERP%20Inquiry`}
            className="btn-primary mt-6"
          >
            <Mail size={16} />
            Contact Us
          </a>
        </div>
      </section>

      <ERPModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
