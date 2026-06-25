import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HealingTech Systems | Customer Requirements Collection",
  description:
    "Share your project requirements with HealingTech Systems. Select AI, website, mobile, or ERP services and complete the requirements form so we can design the right solution.",
  keywords: [
    "HealingTech Systems",
    "HealingTech",
    "Requirements Form",
    "AI Solutions",
    "ERP",
    "Software Development",
    "Mobile Apps",
  ],
  openGraph: {
    title: "HealingTech Systems — Customer Requirements Portal",
    description: "Select your service and tell us what you need. We design the right solution for your organization.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
