/** Production site configuration — single source of truth for domain and SEO */
export const siteConfig = {
  name: "HealingTech Initiative",
  shortName: "HealingTech Initiative",
  /** Canonical production URL (non-www). Vercel redirects www to apex. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://healingtechinitiative.org",
  technologyPartner: {
    name: "HealingTech Labs",
    url: process.env.NEXT_PUBLIC_LABS_URL ?? "https://healingtechlabs.com",
  },
  /** Primary market for local SEO — serves globally */
  country: "Malawi",
  countryCode: "MW",
  defaultTitle:
    "HealingTech Initiative | Digital Skills & Youth Opportunity in Africa",
  defaultDescription:
    "HealingTech Initiative is an independent social impact program in Malawi — digital skills, scholarships, mental wellness, and community programs for youth across Africa. Technology partner: HealingTech Labs.",
  ogImage: "/images/cover-tech-hero.jpg",
  ogImageAlt:
    "HealingTech Initiative — digital inclusion and youth opportunity in Africa",
  locale: "en_US",
  twitterHandle: "@HealingTechLabs",
  keywords: [
    "HealingTech Initiative",
    "youth digital skills Malawi",
    "technology training Africa",
    "coding bootcamp Malawi",
    "mental health youth programs",
    "digital inclusion Africa",
    "HealingTech Labs",
    "social impact technology",
    "scholarships technology Africa",
  ],
  sameAs: [] as string[],
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
