import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientEnhancements from "@/components/ClientEnhancements";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HealingTech Labs | World-Class Technology for Malawi's Digital Future",
  description:
    "HealingTech Labs is a modern technology company and social enterprise headquartered in Malawi — building AI, enterprise software, web & mobile applications, and digital platforms that transform organizations.",
  keywords: [
    "HealingTech Labs",
    "Malawi technology",
    "AI solutions",
    "software engineering",
    "digital transformation",
    "HealingTech Initiative",
    "ERP",
    "web apps",
  ],
  openGraph: {
    title: "HealingTech Labs — Innovation-Driven Technology",
    description:
      "Building technology that transforms businesses today while investing in Malawi's digital future tomorrow.",
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
        <main className="flex-1">
          <ClientEnhancements>{children}</ClientEnhancements>
        </main>
        <Footer />
      </body>
    </html>
  );
}
