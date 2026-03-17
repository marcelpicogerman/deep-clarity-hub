import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import CircleTeaser from "@/components/CircleTeaser";
import TestimonialsHome from "@/components/TestimonialsHome";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  alternates: { canonical: "https://deeplifeevolutionhub.de" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <ServicesTeaser />
      <CircleTeaser />
      <TestimonialsHome />
      <CtaSection />
    </>
  );
}
