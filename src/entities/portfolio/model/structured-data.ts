import { identity } from "./identity";

const personId = `${identity.website}/#person`;
const websiteId = `${identity.website}/#website`;
const identityPageId = `${identity.website}/identity#webpage`;

export const identityStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: identity.name,
      alternateName: identity.aliases,
      url: identity.website,
      image: `${identity.website}/images/avatar.jpg`,
      jobTitle: identity.jobTitle,
      description: identity.professionalSummary,
      mainEntityOfPage: {
        "@id": identityPageId,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: identity.address.city,
        addressCountry: identity.address.countryCode,
      },
      knowsAbout: [
        ...identity.skills,
        ...identity.technologies,
        ...identity.experienceAreas,
      ],
      sameAs: [identity.links.github, identity.links.linkedin],
      email: identity.email,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: identity.website,
      name: `${identity.name} Portfolio`,
      description: identity.metaDescription,
      inLanguage: "en",
      publisher: {
        "@id": personId,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": identityPageId,
      url: `${identity.website}/identity`,
      name: `${identity.name} identity profile`,
      description: identity.professionalSummary,
      inLanguage: "en",
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": personId,
      },
      mainEntity: {
        "@id": personId,
      },
    },
  ],
};

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
