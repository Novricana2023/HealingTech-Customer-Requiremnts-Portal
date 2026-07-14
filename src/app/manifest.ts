import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { brand } from "@/lib/brand";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ea580c",
    icons: [
      {
        src: brand.favicon[192],
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: brand.favicon[512],
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
