import { Metadata } from "next";
import CircleContent from "@/components/CircleContent";

export const metadata: Metadata = {
  title: "Der Deep Life Circle",
  description:
    "Acht Dimensionen eines gelebten Lebens – Identität, Berufung, Finanzielle Souveränität, Beziehungsqualität und mehr. Kein Framework, sondern ein Spiegel.",
  alternates: { canonical: "https://deeplifeevolutionhub.de/circle" },
};

export default function CirclePage() {
  return <CircleContent />;
}
