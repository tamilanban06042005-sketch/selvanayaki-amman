import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductsShowcase from "@/components/ProductsShowcase";
import OurStorySection from "@/components/OurStorySection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificationsSection from "@/components/CertificationsSection";
import FinalCTASection from "@/components/FinalCTASection";
import WaveSection from "@/components/WaveSection";

export const metadata: Metadata = {
  title: "Sree Selvanayaki Amman Oil & Flour Mill — Traditional Oils & Powders, Pidariyur Erode",
  description: "Groundnut oil, gingelly oil, coconut oil and traditional powders from our mill in Pidariyur, Erode. FSSAI licensed. Order on WhatsApp.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <OurStorySection />
      <WaveSection variant="cream-to-green" />
      <ProcessSection />
      <WhyChooseUsSection />
      <WaveSection variant="green-to-cream" />
      <TestimonialsSection />
      <CertificationsSection />
      <FinalCTASection />
    </>
  );
}
