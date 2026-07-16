import type { MetadataRoute } from "next";
import { identity } from "@/entities/portfolio/model/identity";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: identity.website,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${identity.website}/identity`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
