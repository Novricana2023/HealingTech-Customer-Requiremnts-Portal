import { company } from "@/data/company";
import { initiative } from "@/data/initiative";
import { contactInfo } from "@/data/contact";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { brand } from "@/lib/brand";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: initiative.name,
    url: siteConfig.url,
    logo: absoluteUrl(brand.logoSquare),
    image: absoluteUrl(brand.logo),
    description: initiative.intro,
    email: contactInfo.emailDisplay,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.countryCode,
      addressLocality: siteConfig.country,
    },
    areaServed: [
      { "@type": "Country", name: "Malawi" },
      { "@type": "Continent", name: "Africa" },
    ],
    knowsAbout: [
      "Digital Skills Training",
      "Youth Employment",
      "Mental Health Programs",
      "Technology Education",
      "Community Development",
    ],
    sponsor: {
      "@type": "Organization",
      name: siteConfig.technologyPartner.name,
      url: siteConfig.technologyPartner.url,
      description: initiative.partner.role,
    },
    ...(siteConfig.sameAs.length > 0 ? { sameAs: siteConfig.sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: initiative.name,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: initiative.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(brand.logoSquare),
        width: 512,
        height: 512,
      },
    },
    creator: {
      "@type": "Organization",
      name: company.name,
      url: siteConfig.technologyPartner.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
