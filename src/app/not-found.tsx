import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-lg">
        <p className="text-sm font-semibold text-brand-teal uppercase tracking-wider">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">Page Not Found</h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-brand-teal to-brand-blue rounded-xl hover:shadow-lg transition-shadow"
        >
          Return to Home
        </Link>
      </div>
    </section>
  );
}
