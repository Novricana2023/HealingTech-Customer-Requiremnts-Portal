import { company } from "@/data/company";
import { contactInfo } from "@/data/contact";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/logo.jpeg"),
    description: company.about,
    email: contactInfo.emailDisplay,
    areaServed: {
      "@type": "Continent",
      name: "Africa",
    },
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
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.jpeg"),
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
