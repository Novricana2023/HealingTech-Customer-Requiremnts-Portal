"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (process.env.NODE_ENV === "development") {
    console.error(error);
  }

  return (
    <section className="section-padding flex items-center justify-center min-h-[50vh]">
      <div className="container-page max-w-lg text-center">
        <h1 className="section-heading">Something Went Wrong</h1>
        <p className="section-lead mx-auto">
          We encountered an unexpected issue. Please try again or return to the homepage.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button type="button" onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
