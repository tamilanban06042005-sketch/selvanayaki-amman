import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import BrandStory from "@/components/BrandStory";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Products Grid (all 7) */}
        <ProductsGrid />

        {/* 03 — Brand Story / About Bridge */}
        <BrandStory />

        {/* 04 — Process Timeline */}
        <ProcessTimeline />

        {/* 05 — Why Choose Us + CTA */}
        <WhyChooseUs />

      </main>

      <Footer />
    </>
  );
}
