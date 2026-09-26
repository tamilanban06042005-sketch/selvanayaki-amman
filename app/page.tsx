import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";
import BrandStory from "@/components/BrandStory";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">

        {/* 01 — Hero */}
        <Hero />

        {/* Categories Split Section */}
        <section className="container-wide py-16">
          <h2 className="text-center font-cormorant font-bold text-3xl md:text-4xl text-[#2B1812] mb-12 uppercase tracking-widest">
            Explore Our Essentials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            {/* Traditional Oils Card */}
            <div className="relative h-64 md:h-80 lg:h-[400px] rounded-3xl overflow-hidden bg-[#164A32] flex items-end p-8 lg:p-12 group cursor-pointer shadow-lg">
              <div className="absolute inset-0 opacity-[0.15] mix-blend-screen bg-floral-pattern transition-transform duration-700 group-hover:scale-105"></div>
              <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <h3 className="font-cormorant font-bold text-3xl lg:text-5xl text-[#F3EFE6] uppercase max-w-[200px] leading-none">
                  Traditional Oils
                </h3>
                <Link href="/shop#oils" className="bg-transparent border border-[#F3EFE6] text-[#F3EFE6] hover:bg-[#F3EFE6] hover:text-[#164A32] transition-colors rounded-full px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                  View Oils →
                </Link>
              </div>
            </div>

            {/* Powders Card */}
            <div className="relative h-64 md:h-80 lg:h-[400px] rounded-3xl overflow-hidden bg-[#D6AD7A]/20 flex items-end p-8 lg:p-12 group cursor-pointer shadow-sm border border-[#D6AD7A]/30">
              <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply bg-floral-pattern transition-transform duration-700 group-hover:scale-105">
                <div className="w-full h-full bg-[url('/turmeric.png')] bg-no-repeat bg-right-bottom bg-contain opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
              </div>
              <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <h3 className="font-cormorant font-bold text-3xl lg:text-5xl text-[#2B1812] uppercase max-w-[200px] leading-none">
                  Powders
                </h3>
                <Link href="/shop#powders" className="bg-[#164A32] text-[#F3EFE6] hover:bg-[#1C1613] transition-colors rounded-full px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                  View Powders →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Products Grid (all 7) */}
        <ProductsGrid />

        {/* 03 — Brand Story / About Bridge */}
        <BrandStory />

        {/* 05 — Why Choose Us + CTA */}
        <WhyChooseUs />

      </main>

      <Footer />
    </>
  );
}
