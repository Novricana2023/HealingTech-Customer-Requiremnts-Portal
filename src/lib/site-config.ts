/** Production site configuration — single source of truth for domain and SEO */
export const siteConfig = {
  name: "HealingTech Labs",
  shortName: "HealingTech Labs",
  /** Canonical production URL (non-www). Vercel redirects www to apex. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://healingtechlabs.com",
  defaultTitle:
    "HealingTech Labs | World-Class Technology for Africa's Digital Future",
  defaultDescription:
    "HealingTech Labs is a modern African technology company and social enterprise — building AI, enterprise software, web and mobile applications, and digital platforms that transform organizations across the continent.",
  ogImage: "/images/cover-tech-hero.jpg",
  ogImageAlt:
    "HealingTech Labs — African technology innovation and digital transformation",
  locale: "en_US",
  twitterHandle: "@HealingTechLabs",
  keywords: [
    "HealingTech Labs",
    "African technology company",
    "AI solutions Africa",
    "software engineering",
    "digital transformation Africa",
    "enterprise software",
    "ERP systems",
    "web application development",
    "mobile app development",
    "HealingTech Initiative",
    "social enterprise technology",
  ],
  /** SameAs links for Schema.org — add profiles when available */
  sameAs: [] as string[],
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
