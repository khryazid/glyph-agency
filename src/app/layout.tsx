import type { Metadata } from "next";
import { Instrument_Sans, Inter, JetBrains_Mono } from "next/font/google";
import { AGENCY, COFOUNDERS, SITE_URL } from "@/data/portfolio";
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
    default: "Glyph Agency — Software a Medida, Webs Comerciales, Redes Sociales y Meta Ads",
    template: "%s | Glyph Agency",
  },
  description:
    "Agencia digital enfocada en negocios y empresas: sistemas de ventas e inventario, páginas web comerciales, Community Management, diseño para redes y campañas en Meta Ads.",
  keywords: [
    "Glyph Agency",
    "Software para empresas",
    "Sistemas a medida",
    "Páginas web comerciales",
    "Community Management",
    "Redes sociales para empresas",
    "Meta Ads",
    "Publicidad en Instagram y Facebook",
    "Punto de venta",
  ],
  authors: COFOUNDERS.map((c) => ({ name: c.name, url: c.linkedinUrl })),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Glyph Agency",
    title: "Glyph Agency — Atrae clientes, ordena tu negocio y escala",
    description:
      "Sistemas a medida, webs que convierten, gestión profesional de redes sociales y publicidad en Meta Ads para negocios y empresas.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@khr_yazid",
    title: "Glyph Agency — Software, Webs Comerciales y Redes Sociales",
    description:
      "Software a medida, presencia web comercial, Community Management y campañas en Meta Ads para empresas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: AGENCY.name,
    description: AGENCY.tagline,
    url: SITE_URL,
    founder: COFOUNDERS.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      sameAs: person.linkedinUrl,
    })),
    sameAs: [
      AGENCY.linkedinUrl,
      AGENCY.danielaLinkedinUrl,
      AGENCY.xUrl,
      AGENCY.instagramUrl,
      AGENCY.githubUrl,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
