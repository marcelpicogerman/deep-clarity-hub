import { Metadata } from "next";
import AngeboteContent from "@/components/AngeboteContent";

export const metadata: Metadata = {
  title: "Angebote & Begleitung",
  description:
    "Erstgespräch, 1:1 Begleitung und Zugang zum Expertennetzwerk. Drei Wege, die dich weiterbringen – individuell, ehrlich und an deiner Realität ausgerichtet.",
  alternates: { canonical: "https://deeplifeevolutionhub.de/angebote" },
};

export default function AngebotePage() {
  return <AngeboteContent />;
}
