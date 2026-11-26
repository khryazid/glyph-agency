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
    default: "Khristian Ali — Fundador de Glyph Agency | Software y Soluciones Digitales",
    template: "%s | Khristian Ali",
  },
  description:
    "Desarrollo software a medida, sistemas de ventas e inventario, plataformas web y automatizaciones con IA para negocios y empresas. Fundador de Glyph Agency.",
  keywords: [
    "Khristian Ali",
    "Glyph Agency",
    "Software para empresas",
    "Sistemas a medida",
    "Páginas web comerciales",
    "Punto de venta",
    "Automatización con IA",
    "Portafolio",
  ],
  authors: [{ name: "Khristian Ali", url: PROFILE.linkedinUrl }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Khristian Ali — Glyph Agency",
    title: "Khristian Ali — Software que ordena y hace crecer tu negocio",
    description:
      "Sistemas a medida, webs que atraen clientes y automatización práctica para empresas y negocios.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@khr_yazid",
    title: "Khristian Ali — Fundador de Glyph Agency",
    description:
      "Desarrollo software, sistemas de gestión, webs comerciales y automatizaciones para negocios.",
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
    jobTitle: "Fundador y Desarrollador de Software",
    worksFor: {
      "@type": "Organization",
      name: "Glyph Agency",
    },
    url: SITE_URL,
    sameAs: [
      PROFILE.linkedinUrl,
      PROFILE.xUrl,
      PROFILE.instagramUrl,
      PROFILE.githubUrl,
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
