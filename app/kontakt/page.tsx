import { Metadata } from "next";
import KontaktContent from "@/components/KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt – Erstgespräch anfragen",
  description:
    "Ein Gespräch. Kein Pitch. Erstgespräch anfragen bei Marcel Pickelmann – 60 Minuten, ehrlich, auf Augenhöhe. Kein Verkaufsgespräch, kein Druck.",
  alternates: { canonical: "https://deeplifeevolutionhub.de/kontakt" },
};

export default function KontaktPage() {
  return <KontaktContent />;
}
