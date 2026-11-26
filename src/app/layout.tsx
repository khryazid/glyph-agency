import type { Metadata } from "next";
import { Instrument_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { PROFILE, SITE_URL } from "@/data/portfolio";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Khristian Ali — Full-Stack Product Engineer & Founder @ Glyph Agency",
    template: "%s | Khristian Ali",
  },
  description:
    "Portafolio de Khristian Ali (Founder @ Glyph Agency). Diseño y desarrollo SaaS offline-first, arquitecturas multi-tenant con PostgreSQL RLS y aplicaciones con IA en Next.js, TypeScript, Supabase y Python.",
  keywords: [
    "Khristian Ali",
    "Glyph Agency",
    "Full-Stack Product Engineer",
    "Next.js",
    "Supabase RLS",
    "Offline-First SaaS",
    "AI Engineering",
    "Portafolio",
  ],
  authors: [{ name: "Khristian Ali", url: PROFILE.githubUrl }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Khristian Ali — Glyph Agency",
    title: "Khristian Ali — Cada idea abre un producto real",
    description:
      "SaaS offline-first, plataformas multi-tenant con PostgreSQL RLS y aplicaciones con IA listas para producción.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@khr_yazid",
    title: "Khristian Ali — Full-Stack Product Engineer & Founder @ Glyph Agency",
    description:
      "SaaS offline-first, plataformas multi-tenant y apps con IA en Next.js, Supabase y Python.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PROFILE.name,
    jobTitle: "Full-Stack Product Engineer & Founder",
    worksFor: {
      "@type": "Organization",
      name: "Glyph Agency",
    },
    url: SITE_URL,
    sameAs: [
      PROFILE.githubUrl,
      PROFILE.linkedinUrl,
      PROFILE.xUrl,
      PROFILE.instagramUrl,
    ],
  };

  return (
    <html
      lang="es"
      className={`${instrumentSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta name="color-scheme" content="light" />
      </head>
      <body className="min-h-screen bg-[#fafafa] text-[#18181b] selection:bg-[#ffc157]/40 selection:text-[#18181b]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
