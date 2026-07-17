import type { MetadataRoute } from "next";
import { identity } from "@/entities/portfolio/model/identity";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const portraitImage = `${identity.website}/images/avatar.jpg`;

  return [
    {
      url: identity.website,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [portraitImage],
    },
    {
      url: `${identity.website}/identity`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [portraitImage],
    },
  ];
}
