import { Metadata } from "next";
import UeberMichContent from "@/components/UeberMichContent";

export const metadata: Metadata = {
  title: "Über Marcel Pickelmann",
  description:
    "Marcel Pickelmann – Unternehmer, Connector und strategischer Begleiter. Erfahre mehr über den Menschen hinter dem Deep Life Evolution Hub.",
  alternates: { canonical: "https://deeplifeevolutionhub.de/ueber-mich" },
};

export default function UeberMichPage() {
  return <UeberMichContent />;
}
