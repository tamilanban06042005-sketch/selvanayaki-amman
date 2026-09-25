import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import Categories from "@/components/Categories";
import InteractiveProductGrid from "@/components/InteractiveProductGrid";
import BrandStory from "@/components/BrandStory";
import ProcessTimeline from "@/components/ProcessTimeline";
import IngredientsShowcase from "@/components/IngredientsShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

// We will add more sections below, structured for GSAP based smooth scroll
export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />

      <main className="bg-brand-cream-soft overflow-hidden">

        {/* 01. FULL-SCREEN 3D HERO WITH SSAOFM LOGO BACKGROUND */}
        <Hero3D />

        {/* 03. SHOP BY CATEGORY */}
        <Categories />

        {/* 04. INTERACTIVE PRODUCT GRID */}
        <InteractiveProductGrid />

        {/* 05. BRAND STORY */}
        <BrandStory />

        {/* 06. PROCESS TIMELINE */}
        <ProcessTimeline />

        {/* 07. INGREDIENTS SHOWCASE */}
        <IngredientsShowcase />

        {/* 08. WHY CHOOSE US & BRING THE MILL HOME */}
        <WhyChooseUs />

      </main>

      <Footer />
    </>
  );
}
