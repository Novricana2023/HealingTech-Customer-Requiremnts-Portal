"use client";

import Image from "next/image";
import { X, CheckCircle2 } from "lucide-react";
import type { ERPProduct } from "@/data/erp-data";

interface ERPModalProps {
  product: ERPProduct | null;
  onClose: () => void;
}

export default function ERPModal({ product, onClose }: ERPModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="erp-modal-title"
    >
      <div className="absolute inset-0 bg-black/50" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg border border-[var(--color-border)] shadow-lg"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 text-gray-500 hover:text-brand-navy"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="relative h-44 sm:h-52 border-b border-[var(--color-border)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 800px"
            className="object-cover"
          />
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
            {product.subtitle}
          </p>
          <h2 id="erp-modal-title" className="font-display text-2xl text-brand-navy mt-1">
            {product.name}
          </h2>

          <div className="mt-8 space-y-8">
            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Overview
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">{product.overview}</p>
            </section>

            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Benefits
              </h3>
              <ul className="mt-3 space-y-2">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={15} className="text-brand-teal shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Features
              </h3>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {product.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Industries served
              </h3>
              <p className="mt-3 text-sm text-gray-600">{product.industries.join(", ")}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
