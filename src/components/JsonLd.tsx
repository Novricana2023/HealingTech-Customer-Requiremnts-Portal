import { company } from "@/data/company";
import { contactInfo } from "@/data/contact";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import { brand } from "@/lib/brand";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(brand.logoSquare),
    image: absoluteUrl(brand.logo),
    description: company.about,
    email: contactInfo.emailDisplay,
    address: {
      "@type": "PostalAddress",
      addressCountry: siteConfig.countryCode,
      addressLocality: siteConfig.country,
    },
    location: {
      "@type": "Place",
      name: siteConfig.country,
      address: {
        "@type": "PostalAddress",
        addressCountry: siteConfig.countryCode,
      },
    },
    areaServed: [
      { "@type": "Country", name: "Malawi" },
      { "@type": "Country", name: "Kenya" },
      { "@type": "Continent", name: "Africa" },
      { "@type": "Place", name: "Worldwide" },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Enterprise Software",
      "Web Development",
      "Mobile Applications",
      "Digital Transformation",
    ],
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
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(brand.logoSquare),
        width: 512,
        height: 512,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
