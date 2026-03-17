import { Metadata } from "next";
import KontaktContent from "@/components/KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Bereit für den ersten Schritt? Schreib Marcel eine Nachricht oder vereinbare ein Erstgespräch – unverbindlich, ehrlich, auf Augenhöhe.",
  alternates: { canonical: "https://deeplifeevolutionhub.de/kontakt" },
};

export default function KontaktPage() {
  return <KontaktContent />;
}
