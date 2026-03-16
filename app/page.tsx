import HeroSection from "@/components/HeroSection";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesTeaser from "@/components/ServicesTeaser";
import CircleTeaser from "@/components/CircleTeaser";
import TestimonialsHome from "@/components/TestimonialsHome";
import LeadMagnetHome from "@/components/LeadMagnetHome";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutTeaser />
      <ServicesTeaser />
      <CircleTeaser />
      <TestimonialsHome />
      <LeadMagnetHome />
      <CtaSection />
    </>
  );
}
