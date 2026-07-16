import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { identity } from "@/entities/portfolio/model/identity";
import {
  identityStructuredData,
  serializeJsonLd,
} from "@/entities/portfolio/model/structured-data";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(identity.website),
  title: {
    default: `${identity.name} | ${identity.role}`,
    template: `%s | ${identity.name}`,
  },
  description: identity.metaDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    identity.name,
    identity.preferredName,
    "Krik Tsakmatzian",
    identity.role,
    "Frontend Architecture",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
  ],
  authors: [{ name: identity.name, url: identity.website }],
  creator: identity.name,
  publisher: identity.name,
  openGraph: {
    title: `${identity.name} | ${identity.role}`,
    description: identity.metaDescription,
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: `${identity.name} Portfolio`,
  },
  twitter: {
    card: "summary",
    title: `${identity.name} | ${identity.role}`,
    description: identity.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Next.js recommends this for JSON-LD; the serializer escapes "<" to prevent script injection.
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(identityStructuredData),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
