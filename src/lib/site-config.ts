/** Production site configuration — HealingTech Labs (primary site) */
export const siteConfig = {
  name: "HealingTech Labs",
  shortName: "HealingTech Labs",
  /** Canonical production URL (non-www). Vercel redirects www to apex. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://healingtechlabs.com",
  /** Separate HealingTech Initiative website */
  initiativeUrl:
    process.env.NEXT_PUBLIC_INITIATIVE_URL ?? "https://healingtechinitiative.org",
  country: "Malawi",
  countryCode: "MW",
  defaultTitle:
    "HealingTech Labs | Malawi Software Company — AI & Digital Solutions",
  defaultDescription:
    "HealingTech Labs is a Malawi-based technology company and social enterprise serving clients across Africa and worldwide — building AI, enterprise software, web and mobile applications, and digital platforms.",
  ogImage: "/images/cover-tech-hero.jpg",
  ogImageAlt:
    "HealingTech Labs — Malawi technology company driving Africa's digital transformation",
  locale: "en_US",
  twitterHandle: "@HealingTechLabs",
  keywords: [
    "HealingTech Labs",
    "software company Malawi",
    "technology company Malawi",
    "Malawi software development",
    "AI solutions Malawi",
    "web development Malawi",
    "mobile app development Malawi",
    "ERP Malawi",
    "digital transformation Malawi",
    "African technology company",
    "HealingTech Initiative",
  ],
  sameAs: [] as string[],
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
