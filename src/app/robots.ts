import type { MetadataRoute } from "next";
import { identity } from "@/entities/portfolio/model/identity";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${identity.website}/sitemap.xml`,
    host: identity.website,
  };
}
