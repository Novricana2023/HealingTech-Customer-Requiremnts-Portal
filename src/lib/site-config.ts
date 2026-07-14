/** Production site configuration for HealingTech Labs (primary site) */
export const siteConfig = {
  name: "HealingTech Labs",
  shortName: "HealingTech Labs",
  /** Canonical production URL (non-www). Vercel redirects www to apex. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://healingtechlabs.com",
  country: "Malawi",
  countryCode: "MW",
  defaultTitle:
    "HealingTech Labs | AI Lab & Innovation Lab in Malawi | Build AI Solutions",
  defaultDescription:
    "HealingTech Labs is an AI and innovation lab in Malawi. We build AI solutions, intelligent software, automation, websites, and mobile apps for Malawian businesses and organizations across Africa and worldwide.",
  ogImage: "/images/cover-tech-hero.jpg",
  ogImageAlt:
    "HealingTech Labs, AI lab and innovation lab building AI solutions in Malawi",
  locale: "en_US",
  twitterHandle: "@HealingTechLabs",
  keywords: [
    "HealingTech Labs",
    "AI lab Malawi",
    "innovation lab Malawi",
    "AI innovation lab Malawi",
    "AI company Malawi",
    "AI solutions Malawi",
    "build AI Malawi",
    "artificial intelligence Malawi",
    "Malawi software company",
    "software companies in Malawi",
    "technology company Malawi",
    "AI development Malawi",
    "machine learning Malawi",
    "business automation Malawi",
    "custom software Malawi",
    "web development Malawi",
    "mobile app development Malawi",
    "coding bootcamp Malawi",
    "ERP Malawi",
    "digital transformation Malawi",
    "Lilongwe AI",
    "Blantyre software company",
  ],
  sameAs: [] as string[],
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
