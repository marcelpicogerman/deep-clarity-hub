import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CircleSection from "@/components/CircleSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CircleSection />
        <ProcessSection />
        <TestimonialsSection />
        <LeadMagnetSection />
      </main>
      <FooterSection />
    </>
  );
}
