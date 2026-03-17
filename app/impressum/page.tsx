import { Metadata } from "next";
import ImpressumContent from "@/components/ImpressumContent";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der Deep Life Evolution Hub Ltd – Angaben gemäß Companies Act 2006.",
  alternates: { canonical: "https://deeplifeevolutionhub.de/impressum" },
};

export default function ImpressumPage() {
  return <ImpressumContent />;
}
