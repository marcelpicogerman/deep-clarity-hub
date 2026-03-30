import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deeplifeevolutionhub.de"),
  title: {
    default: "Deep Life Evolution Hub – Academy of Becoming",
    template: "%s | Deep Life Evolution Hub",
  },
  description:
    "Für Menschen, die mehr wollen als Durchschnitt – und bereit sind, den Weg wirklich zu gehen. Marcel Pickelmann: Unternehmer · Connector · Strategischer Begleiter.",
  keywords: [
    "Deep Life",
    "Coaching",
    "Persönlichkeitsentwicklung",
    "Marcel Pickelmann",
    "Academy of Becoming",
    "Leben gestalten",
  ],
  authors: [{ name: "Marcel Pickelmann" }],
  openGraph: {
    title: "Deep Life Evolution Hub – Academy of Becoming",
    description:
      "Für Menschen, die mehr wollen als Durchschnitt – und bereit sind, den Weg wirklich zu gehen.",
    type: "website",
    siteName: "Deep Life Evolution Hub",
    locale: "de_DE",
    url: "https://deeplifeevolutionhub.de",
    images: [
      {
        url: "https://deeplifeevolutionhub.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deep Life Evolution Hub – Marcel Pickelmann",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Life Evolution Hub – Academy of Becoming",
    description:
      "Für Menschen, die mehr wollen als Durchschnitt – und bereit sind, den Weg wirklich zu gehen.",
    images: ["https://deeplifeevolutionhub.de/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deep Life Evolution Hub",
    url: "https://deeplifeevolutionhub.de",
    description:
      "Academy of Becoming – Für Menschen, die mehr wollen als Durchschnitt.",
    founder: {
      "@type": "Person",
      name: "Marcel Pickelmann",
      jobTitle: "Director",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office 620, Initial Business Centre, Wilson Business Park",
      addressLocality: "Manchester",
      postalCode: "M40 8WN",
      addressCountry: "GB",
    },
  };

  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-white text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <FooterSection />
        <CookieBanner />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
