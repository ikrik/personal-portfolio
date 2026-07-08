import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";

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
  metadataBase: new URL("https://krikor.dev"),
  title: {
    default: "Krikor Tsakmatzian | Senior Full-Stack Engineer",
    template: "%s | Krikor Tsakmatzian",
  },
  description:
    "Senior frontend-focused full-stack engineer building scalable React, Next.js, Angular, and TypeScript product systems.",
  keywords: [
    "Krikor Tsakmatzian",
    "Senior Full-Stack Engineer",
    "Frontend Architecture",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
  ],
  authors: [{ name: "Krikor Tsakmatzian" }],
  creator: "Krikor Tsakmatzian",
  openGraph: {
    title: "Krikor Tsakmatzian | Senior Full-Stack Engineer",
    description:
      "Scalable frontend architecture and high-performance UI systems for modern product teams.",
    type: "website",
    locale: "en_US",
    siteName: "Krikor Tsakmatzian Portfolio",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="flex min-h-full flex-col">{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
