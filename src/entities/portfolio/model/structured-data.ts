import { identity } from "./identity";

export const identityStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${identity.website}/#person`,
      name: identity.name,
      alternateName: identity.aliases,
      url: identity.website,
      jobTitle: identity.jobTitle,
      description: identity.professionalSummary,
      address: {
        "@type": "PostalAddress",
        addressLocality: identity.address.city,
        addressCountry: identity.address.countryCode,
      },
      knowsAbout: [...identity.skills, ...identity.experienceAreas],
      sameAs: [identity.links.github, identity.links.linkedin],
      email: identity.email,
    },
    {
      "@type": "WebSite",
      "@id": `${identity.website}/#website`,
      url: identity.website,
      name: `${identity.name} Portfolio`,
      description: identity.metaDescription,
      inLanguage: "en",
      publisher: {
        "@id": `${identity.website}/#person`,
      },
    },
  ],
};

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
