import { Metadata } from "next";
import AngeboteContent from "@/components/AngeboteContent";

export const metadata: Metadata = {
  title: "Angebote & Begleitung",
  description:
    "Erstgespräch, 1:1 Begleitung und Zugang zum Expertennetzwerk. Drei Wege, die dich weiterbringen – individuell, ehrlich und an deiner Realität ausgerichtet.",
  alternates: { canonical: "https://deeplifeevolutionhub.de/angebote" },
};

export default function AngebotePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Deep Life Erstgespräch",
    description:
      "60-minütiges 1:1 Erstgespräch mit Marcel Pickelmann. Strukturierte Standortbestimmung über alle 8 Lebensdimensionen.",
    provider: {
      "@type": "Organization",
      name: "Deep Life Evolution Hub",
      url: "https://deeplifeevolutionhub.de",
    },
    offers: {
      "@type": "Offer",
      price: "350",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    areaServed: { "@type": "Country", name: "DE" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AngeboteContent />
    </>
  );
}
