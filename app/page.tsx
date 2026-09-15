import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OilsShowcase from "@/components/OilsShowcase";
import OurStory from "@/components/OurStory";
import IngredientStory from "@/components/IngredientStory";
import WhyChooseUs from "@/components/WhyChooseUs";
import ThreeOilsSignature from "@/components/ThreeOilsSignature";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Film grain is a pure CSS fixed overlay — rendered as a simple div
function FilmGrain() {
  return <div className="film-grain" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <FilmGrain />
      <Navbar />
      <main>
        <HeroSection />
        <OilsShowcase />
        <OurStory />
        <IngredientStory />
        <WhyChooseUs />
        <ThreeOilsSignature />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
