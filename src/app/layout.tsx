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
  title: "HealingTech Systems | Innovation-Driven IT Solutions",
  description:
    "HealingTech Systems is an IT firm specializing in AI, smart systems, web apps, mobile applications, automation, and enterprise technology. Innovating for modern organizations.",
  keywords: [
    "HealingTech Systems",
    "IT firm",
    "Innovation",
    "Smart Systems",
    "AI Solutions",
    "ERP",
    "Software Development",
    "Web Apps",
    "Mobile Apps",
  ],
  openGraph: {
    title: "HealingTech Systems — Innovation-Driven IT Solutions",
    description: "Building intelligent smart systems for modern organizations.",
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
