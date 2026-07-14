import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-padding flex items-center justify-center min-h-[50vh]">
      <div className="container-page max-w-lg text-center">
        <p className="section-label">404</p>
        <h1 className="section-heading mt-2">Page Not Found</h1>
        <p className="section-lead mx-auto">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Return to Home
        </Link>
      </div>
    </section>
  );
}
