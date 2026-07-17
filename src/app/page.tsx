import type { Metadata } from "next";
import { identity } from "@/entities/portfolio/model/identity";
import { PortfolioPage } from "@/widgets/portfolio/ui/portfolio-page";

export const metadata: Metadata = {
  title: `${identity.name} | ${identity.role}`,
  description: identity.metaDescription,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: identity.name, url: identity.website }],
  openGraph: {
    title: `${identity.name} | ${identity.role}`,
    description: identity.metaDescription,
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: `${identity.name} Portfolio`,
    images: [
      {
        url: "/images/avatar.jpg",
        width: 512,
        height: 512,
        alt: `Cartoon-style portrait of ${identity.name}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${identity.name} | ${identity.role}`,
    description: identity.metaDescription,
    images: [
      {
        url: "/images/avatar.jpg",
        alt: `Cartoon-style portrait of ${identity.name}`,
      },
    ],
  },
};

export default function Home() {
  return <PortfolioPage />;
}
