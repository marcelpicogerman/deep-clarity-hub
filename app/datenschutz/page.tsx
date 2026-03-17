import { Metadata } from "next";
import DatenschutzContent from "@/components/DatenschutzContent";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung der Deep Life Evolution Hub Ltd – Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: { canonical: "https://deeplifeevolutionhub.de/datenschutz" },
};

export default function DatenschutzPage() {
  return <DatenschutzContent />;
}
