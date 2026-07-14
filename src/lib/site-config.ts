/** Production site configuration for HealingTech Labs (primary site) */
export const siteConfig = {
  name: "HealingTech Labs",
  shortName: "HealingTech Labs",
  /** Canonical production URL (non-www). Vercel redirects www to apex. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://healingtechlabs.com",
  country: "Malawi",
  countryCode: "MW",
  defaultTitle:
    "HealingTech Labs | AI Solutions, Software & Automation in Malawi",
  defaultDescription:
    "HealingTech Labs builds AI solutions, custom software, websites, mobile apps, business automation, and AI coding bootcamps for organizations and learners in Malawi and worldwide.",
  ogImage: "/images/cover-tech-hero.jpg",
  ogImageAlt:
    "HealingTech Labs, AI solutions and software company in Malawi",
  locale: "en_US",
  twitterHandle: "@HealingTechLabs",
  keywords: [
    "HealingTech Labs",
    "Malawi software company",
    "software companies in Malawi",
    "Malawi software development",
    "technology company Malawi",
    "AI solutions Malawi",
    "AI company Malawi",
    "business automation Malawi",
    "custom software Malawi",
    "web development Malawi",
    "website development Malawi",
    "mobile app development Malawi",
    "ERP Malawi",
    "software solutions Malawi",
    "digital transformation Malawi",
  ],
  sameAs: [] as string[],
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
