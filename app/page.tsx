import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { getFeaturedProducts } from "@/lib/data/products";
import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/lib/config";

// Trust Strip Data
const TRUST_ITEMS = [
  "FROM OUR MILL",
  "CAREFULLY SELECTED INGREDIENTS",
  "HYGIENICALLY PACKED",
  "FSSAI LICENSED"
];

// Process Timeline Data
const PROCESS_STEPS = [
  { step: "01", label: "SELECT", desc: "Carefully source appropriate raw materials." },
  { step: "02", label: "CLEAN", desc: "Prepare ingredients before processing." },
  { step: "03", label: "PROCESS", desc: "Carry out the relevant mill/product preparation process." },
  { step: "04", label: "QUALITY CHECK", desc: "Check the prepared product before packing." },
  { step: "05", label: "PACK", desc: "Pack products hygienically." },
  { step: "06", label: "DELIVER", desc: "Prepare orders for customers." },
];

export default function Home() {
  const featured = getFeaturedProducts().slice(0, 7);

  return (
    <>
      <Header />
      <main className="bg-brand-soft-cream">

        {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
        <section className="relative min-h-[90vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden border-b border-brand-heritage/10">
          {/* Main Background Logo Wrapper */}
          <div className="absolute inset-0 z-0 bg-brand-soft-cream flex items-center justify-center">
            {/* The Logo scaled up as an artistic background texture */}
            <div className="relative w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] opacity-[0.07] mix-blend-multiply animate-fade-up">
              <Image
                src="/main-logo.jpg"
                alt="Sree Selvanayaki Amman Background Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Beautiful fading gradients over the logo to ensure readability and add tone */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-soft-cream via-transparent to-brand-soft-cream/30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--tw-gradient-stops))] from-transparent via-brand-soft-cream/40 to-brand-soft-cream/90 pointer-events-none"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <span className="inline-block text-brand-gold bg-brand-heritage/5 border border-brand-gold/20 backdrop-blur-sm px-6 py-2 rounded-full text-[10px] md:text-xs tracking-[0.3em] font-semibold uppercase mb-8 shadow-sm">
              FROM OUR MILL TO YOUR HOME
            </span>
            <h1 className="heading-editorial text-5xl md:text-7xl lg:text-8xl text-brand-deep-green mb-8 leading-[1.1] drop-shadow-sm">
              PURE.<br />TRADITIONAL.<br />
              <span className="text-brand-heritage italic font-light font-playfair pr-2 md:pr-4">MADE WITH CARE.</span>
            </h1>
            <p className="text-brand-dark/80 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              Traditional oils, wholesome flours, and everyday essentials crafted cleanly in Pidariyur.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/shop"
                className="bg-brand-deep-green hover:bg-brand-heritage text-brand-soft-cream text-center text-sm font-semibold uppercase tracking-widest px-10 py-5 transition-all duration-300 rounded-sm shadow-xl hover:shadow-2xl md:hover:-translate-y-1"
              >
                Shop Products
              </Link>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-md border border-brand-heritage/20 text-brand-heritage hover:bg-white hover:border-brand-heritage text-center text-sm font-semibold uppercase tracking-widest px-10 py-5 transition-all duration-300 rounded-sm flex items-center justify-center gap-3 shadow-md hover:shadow-xl md:hover:-translate-y-1"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ─── 2. TRUST BAR ───────────────────────────────────────────────── */}
        <section className="bg-brand-dark text-brand-ivory py-6 border-y border-brand-heritage">
          <div className="max-w-[1600px] mx-auto px-6 overflow-hidden">
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 md:gap-4 divide-brand-heritage">
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="flex-1 flex items-center justify-center gap-3 text-center md:text-left min-w-[200px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span className="text-xs uppercase tracking-widest font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. BRAND STORY ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="flex-1">
              <h2 className="heading-editorial text-4xl md:text-5xl lg:text-7xl text-brand-primary leading-tight">
                ROOTED IN TRADITION. <br className="hidden md:block" /> MADE FOR TODAY.
              </h2>
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <p className="text-brand-dark/80 text-lg leading-loose font-light mb-8 max-w-xl">
                We believe in the slow, meticulous art of extraction. At Sree Selvanayaki Amman, our products are crafted using traditional methods that naturally prevent nutrient degradation. No harsh chemicals, no artificial heat—just the unadulterated essence of the finest seeds, sourced ethically and packed cleanly in our Pidariyur mill.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-heritage text-sm uppercase tracking-widest font-semibold hover:text-brand-gold transition-colors w-fit">
                Read our story <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 4. CATEGORY SECTION ────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-brand-ivory px-6 lg:px-12 border-y border-brand-heritage/10">
          <div className="max-w-[1600px] mx-auto">
            <SectionHeading title="EXPLORE OUR ESSENTIALS" centered={true} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { name: "Traditional Oils", desc: "Groundnut · Gingelly · Coconut · Castor", img: "/gingelly-oil.jpeg", href: "/shop" },
                { name: "Food & Health", desc: "Health Mix · Turmeric · Green Gram · Flours", img: "/health-mix.png", href: "/shop" },
                { name: "Natural Care", desc: "Shikakai Powder", img: "/shikakai.png", href: "/shop" },
              ].map((cat, i) => (
                <Link href={cat.href} key={i} className="group relative aspect-[3/4] overflow-hidden bg-brand-beige flex flex-col justify-end p-8">
                  <Image src={cat.img} alt={cat.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent"></div>
                  <div className="relative z-10 text-brand-soft-cream">
                    <h3 className="heading-editorial text-3xl mb-2">{cat.name}</h3>
                    <p className="text-sm font-light uppercase tracking-wider text-brand-ivory opacity-80 mb-6">{cat.desc}</p>
                    <span className="inline-block border-b border-brand-gold pb-1 text-xs uppercase tracking-widest font-semibold transition-colors group-hover:text-brand-gold">
                      Explore Series
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. FEATURED PRODUCTS ───────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
          <SectionHeading title="OUR EVERYDAY ESSENTIALS" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/shop" className="text-brand-heritage text-sm uppercase tracking-widest font-semibold hover:text-brand-gold transition-colors inline-flex items-center gap-2 border-b-2 border-brand-heritage pb-1">
              View Complete Catalog
            </Link>
          </div>
        </section>

        {/* ─── 6. OUR PROCESS ─────────────────────────────────────────────── */}
        <section className="py-24 md:py-32 bg-brand-deep-green text-brand-soft-cream px-6 lg:px-12">
          <div className="max-w-[1600px] mx-auto">
            <SectionHeading eyebrow="From Ingredient to Home" title="OUR PROCESS" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-20">
              {PROCESS_STEPS.map((s) => (
                <div key={s.step} className="border-t border-brand-ivory/20 pt-6">
                  <div className="text-brand-gold font-playfair text-xl italic mb-4">{s.step}</div>
                  <h4 className="text-sm uppercase tracking-widest font-semibold mb-3">{s.label}</h4>
                  <p className="text-brand-ivory/70 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 7. PREMIUM VISUAL STORY ────────────────────────────────────── */}
        <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
          <Image src="/coconut-oil.jpeg" alt="South Indian Tradition" fill className="object-cover grayscale mix-blend-multiply opacity-20" />
          <div className="absolute inset-0 bg-brand-primary mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-brand-dark opacity-40"></div>

          <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
            <p className="heading-editorial text-3xl md:text-5xl lg:text-7xl text-brand-soft-cream leading-tight max-w-4xl mix-blend-luminosity">
              Embracing tradition.<br />
              Nourishing generations.
            </p>
          </div>
        </section>

        {/* ─── 8. WHY CHOOSE US ──────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 lg:px-12 bg-brand-ivory">
          <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <SectionHeading title="WHY SREE SELVANAYAKI AMMAN?" />
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="heading-editorial text-2xl text-brand-primary mb-3">TRADITIONAL ROOTS</h4>
                <p className="text-brand-dark/70 font-light leading-relaxed">A local mill built around everyday essentials and familiar ingredients that honor South Indian heritage.</p>
              </div>
              <div>
                <h4 className="heading-editorial text-2xl text-brand-primary mb-3">QUALITY FOCUS</h4>
                <p className="text-brand-dark/70 font-light leading-relaxed">Products are prepared and packed with attention to consistency, rigorous hygiene, and pure presentation.</p>
              </div>
              <div>
                <h4 className="heading-editorial text-2xl text-brand-primary mb-3">LOCAL TRUST</h4>
                <p className="text-brand-dark/70 font-light leading-relaxed">A real business operating directly out of Pidariyur, serving our customers with dedication and transparency.</p>
              </div>
              <div>
                <h4 className="heading-editorial text-2xl text-brand-primary mb-3">EVERYDAY ESSENTIALS</h4>
                <p className="text-brand-dark/70 font-light leading-relaxed">Practical, wholesome products designed around genuine household use and culinary needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 9. ABOUT THE MILL ─────────────────────────────────────────── */}
        <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto text-center">
          <span className="block w-px h-16 bg-brand-gold mx-auto mb-8"></span>
          <h2 className="heading-editorial text-4xl md:text-6xl text-brand-deep-green mb-8">
            OUR STORY
          </h2>
          <p className="text-brand-dark/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-light">
            Sree Selvanayaki Amman Oil & Flour Mill is a locally operated facility in Pidariyur, Erode, Tamil Nadu. We take pride in delivering honest, traditional food products crafted for your family's health and happiness.
          </p>
          <Link href="/about" className="inline-flex items-center justify-center bg-brand-heritage hover:bg-brand-dark text-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-sm transition-colors">
            Discover the Mill
          </Link>
        </section>

        {/* ─── 10. CUSTOMER REVIEWS ──────────────────────────────────────── */}
        <section className="py-20 bg-brand-beige text-center border-y border-brand-heritage/10">
          <p className="heading-editorial text-2xl md:text-3xl text-brand-dark/50 italic">
            Customer stories coming soon.
          </p>
        </section>

        {/* ─── 11. CONTACT / WHATSAPP CTA ────────────────────────────────── */}
        <section className="bg-brand-deep-green text-brand-soft-cream py-24 px-6 text-center border-t border-brand-gold">
          <div className="max-w-xl mx-auto">
            <h2 className="heading-editorial text-4xl md:text-5xl text-brand-ivory mb-6">
              Experience Authentic Tradition
            </h2>
            <p className="text-brand-ivory/80 text-lg mb-10 font-light">
              Visit our mill at Pidariyur, Erode, Tamil Nadu, or place your order directly via WhatsApp for a seamless traditional experience.
            </p>
            <a
              href={`https://wa.me/${businessConfig.whatsappNumber}?text=Hello, I would like to enquire about your products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white text-sm uppercase tracking-widest font-bold px-10 py-5 rounded-sm transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Order Directly on WhatsApp
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
