/** HealingTech Initiative — content & partnership language */
export const initiative = {
  name: "HealingTech Initiative",
  /** Live Initiative website (separate from HealingTech Labs) */
  websiteUrl:
    process.env.NEXT_PUBLIC_INITIATIVE_URL ?? "https://healingtechinitiative.org",
  tagline: "Digital skills, inclusion, and opportunity for Africa's youth",
  intro:
    "HealingTech Initiative is an independent social impact program dedicated to digital skills, scholarships, mental wellness, and technology access for underserved youth and communities across Africa.",
  independenceNote:
    "HealingTech Initiative operates independently. Our work is sustained through grants, donations, community partnerships, and support from a growing network of collaborators.",
  partner: {
    name: "HealingTech Labs",
    role: "Technology Partner",
    summary:
      "HealingTech Labs collaborates with HealingTech Initiative by providing technology expertise, strategic support, and digital infrastructure for the Initiative's programs and website.",
    employment:
      "Through HealingTech Labs, graduates and participants from our training programs can access real employment pathways — turning skills into jobs while strengthening the technology ecosystem we are building together.",
    support:
      "HealingTech Labs also contributes a portion of its commercial work toward Initiative programs — helping fund training, community outreach, and youth opportunity at scale.",
  },
  fundingSources: [
    "Grants and philanthropic support",
    "Donations from individuals and organisations",
    "Community and institutional partnerships",
    "Contributions from HealingTech Labs",
  ],
  websiteCredit: "The HealingTech Initiative website is developed by HealingTech Labs.",
} as const;
