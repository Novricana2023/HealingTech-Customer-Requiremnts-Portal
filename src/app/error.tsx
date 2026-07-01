"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-lg">
        <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider">Error</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Something Went Wrong</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          We encountered an unexpected issue. Please try again or return to the homepage.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={reset}
            className="px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-lg transition-shadow"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3.5 font-semibold text-slate-700 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
