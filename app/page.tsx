import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/lib/data/products";
import { faqs } from "@/lib/data/faqs";
import Link from "next/link";
import Image from "next/image";
import { Factory, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, Leaf, Clock, Droplets } from "lucide-react";
import { businessConfig } from "@/lib/config";

const CATEGORY_CARDS = [
  {
    name: "Pure Oils",
    href: "/oils",
    description: "Groundnut, Gingelly & Coconut Oil",
    image: "/groundnut-oil.jpeg",
    alt: "Groundnut oil bottle",
  },
  {
    name: "Food & Powders",
    href: "/powders",
    description: "Health Mix, Turmeric & Green Gram",
    image: "/health-mix.png",
    alt: "Food powders",
  },
  {
    name: "Personal Care",
    href: "/personal-care",
    description: "Traditional Shikakai & Green Gram",
    image: "/shikakai.png",
    alt: "Shikakai powder",
  },
];

const TRUST_ITEMS = [
  { icon: <Factory className="w-6 h-6 text-brand-brass" strokeWidth={1.5} />, text: "Direct from Mill", sub: "Pidariyur, TN" },
  { icon: <ShieldCheck className="w-6 h-6 text-brand-brass" strokeWidth={1.5} />, text: "Hygienic Processing", sub: "Carefully handled" },
  { icon: <FileCheck className="w-6 h-6 text-brand-brass" strokeWidth={1.5} />, text: "FSSAI Licensed", sub: "Certified quality" },
  { icon: <PhoneCall className="w-6 h-6 text-brand-brass" strokeWidth={1.5} />, text: "Simple Ordering", sub: "Via WhatsApp" },
];

const PROCESS_STEPS = [
  { step: "01", label: "Harvest Selection", desc: "We source only premium quality ingredients." },
  { step: "02", label: "Careful Processing", desc: "Using traditional methods to preserve nutrients." },
  { step: "03", label: "Quality Checks", desc: "Every batch is tested for ultimate purity." },
  { step: "04", label: "Hygienic Packing", desc: "Sealed fresh at our Pidariyur mill." },
  { step: "05", label: "Dispatch", desc: "Securely packed for safe transit." },
  { step: "06", label: "Delivery", desc: "Delivered right to your doorstep." },
];

const FAQ_HOMEPAGE = ["how-to-order", "shipping-fee", "delivery-time", "product-sizes"];

export default function Home() {
  const featured = getFeaturedProducts();
  const homeFaqs = faqs.filter((f) => FAQ_HOMEPAGE.includes(f.id));

  return (
    <>
      <Header />
      <main className="bg-brand-beige">
        {/* ─── HERO ──────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative overflow-hidden pt-32 pb-32 sm:pt-48 sm:pb-48 px-6 min-h-[90vh] flex items-center"
          aria-label="Hero"
        >
          {/* Full bleed lifestyle image with custom brown/green color grading */}
          <div className="absolute inset-0 z-0">
            <Image src="/gingelly-oil.jpeg" alt="Traditional Mill Working" fill className="object-cover object-center grayscale opacity-90" priority />
            <div className="absolute inset-0 bg-brand-emerald mix-blend-multiply opacity-50"></div>
            <div className="absolute inset-0 bg-brand-brown mix-blend-color-burn opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-beige via-transparent to-transparent opacity-100"></div>
            <div className="absolute inset-0 bg-texture-paper mix-blend-screen opacity-10"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10 text-white mt-12 md:mt-0">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-brand-brass)] mb-6 font-bold flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-[var(--color-brand-brass)]/60 hidden sm:block"></span>
              Sree Selvanayaki Amman Oil &amp; Flour Mill
              <span className="w-8 h-px bg-brand-brown/40 hidden sm:block"></span>
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-playfair leading-[1.1] mb-8 text-white">
              Traditional goodness.<br />
              <span className="text-[var(--color-brand-beige)] relative inline-block mt-2">
                Delivered to your home.
                <svg className="absolute w-full h-3 -bottom-2 sm:-bottom-3 left-0 text-[var(--color-brand-brass)] opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00032 6.99981C43.5134 2.50853 113.882 -2.17983 198.001 6.99981" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </h1>
            <p className="text-[var(--color-brand-beige-dark)]/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Authentic oils and everyday essentials prepared with care in Pidariyur. Pure, natural, and crafted for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white font-medium px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-block bg-[var(--color-brand-beige)] text-[var(--color-brand-emerald)] hover:bg-white font-bold px-8 py-4 rounded-md transition-all shadow-xl hover:-translate-y-0.5 text-base uppercase tracking-widest text-sm"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </section>

        {/* ─── TRUST BANNER ───────────────────────────────────────────── */}
        <section className="bg-brand-emerald text-brand-beige border-y border-brand-emerald-light" aria-label="Trust indicators">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-brand-emerald-light">
              {TRUST_ITEMS.map((item, idx) => (
                <div key={item.text} className={`flex items-center gap-4 ${idx !== 0 ? 'md:pl-8' : ''}`}>
                  <div className="flex-shrink-0 bg-brand-emerald-light p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm sm:text-base leading-tight font-playfair tracking-wide text-brand-brass">{item.text}</span>
                    <span className="text-xs text-brand-beige/70 mt-0.5">{item.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SHOP BY CATEGORY ──────────────────────────────────────── */}
        <section className="py-24 sm:py-32 px-6 relative bg-white" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 id="categories-heading" className="text-4xl sm:text-5xl font-bold font-playfair text-brand-brown mb-4">
                Our Offerings
              </h2>
              <div className="w-20 h-0.5 bg-brand-brown mx-auto mb-6"></div>
              <p className="text-brand-ink/70 text-lg max-w-xl mx-auto">
                Carefully processed and hygienically packed at our mill to ensure the highest standards of purity for your family.
              </p>
            </div>

            <div className="flex flex-col gap-16 md:gap-24">
              {CATEGORY_CARDS.map((cat, idx) => (
                <div key={cat.href} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full relative aspect-[4/3] md:aspect-square overflow-hidden group">
                    {cat.image ? (
                      <Image src={cat.image} alt={cat.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-brand-beige">No Image</div>
                    )}
                  </div>
                  <div className="flex-1 w-full bg-brand-beige p-10 md:p-14 border-l-8 border-brand-emerald shadow-lg relative">
                    <h3 className="text-3xl sm:text-4xl font-bold font-playfair text-brand-ink mb-6">{cat.name}</h3>
                    <p className="text-lg text-brand-ink/75 mb-10 leading-relaxed font-light">{cat.description}</p>
                    <Link href={cat.href} className="inline-block text-brand-brown font-semibold uppercase tracking-widest hover:text-brand-emerald transition-colors text-sm">
                      Browse Collection →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE US ───────────────────────────────────────── */}
        <section className="py-20 sm:py-24 px-6 bg-brand-brown text-brand-beige" aria-labelledby="why-us-heading">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-brand-brass mb-4 font-bold flex items-center gap-3">
                <span className="w-8 h-px bg-brand-brass"></span>
                The Heritage Difference
              </p>
              <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-bold font-playfair leading-tight mb-6">
                Rooted in authentic tradition & natural processing.
              </h2>
              <p className="text-brand-beige/80 leading-relaxed mb-6">
                Unlike mass-produced goods, we believe in the slow, meticulous art of extraction. At Sree Selvanayaki Amman, our oils are crafted using traditional methods that naturally prevent nutrient degradation.
              </p>
              <p className="text-brand-beige/80 leading-relaxed mb-8">
                No harsh chemicals, no artificial heat—just the raw, unadulterated essence of the finest seeds, sourced ethically and packed cleanly in our Pidariyur mill.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: <Leaf size={20} />, title: "100% Pure & Natural", desc: "Free from additives and synthetic preservatives." },
                  { icon: <Droplets size={20} />, title: "Nutrient-Rich Extraction", desc: "Processed naturally to retain authentic aroma and health benefits." },
                  { icon: <CheckCircle2 size={20} />, title: "Quality Guaranteed", desc: "Rigorous quality checks for unparalleled freshness." }
                ].map((feature, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 text-brand-brass">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold text-brand-beige font-playfair">{feature.title}</h4>
                      <p className="text-sm text-brand-beige/70 mt-1">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl border-4 border-brand-brown">
              <Image
                src="/groundnut-oil.jpeg"
                alt="Traditional oil pouring"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-brand-brown/20 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* ─── FEATURED PRODUCTS ─────────────────────────────────────── */}
        <section className="py-20 sm:py-24 px-6 bg-brand-beige-dark" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 id="featured-heading" className="text-3xl sm:text-4xl font-bold font-playfair text-brand-ink mb-3">
                Featured Essentials
              </h2>
              <div className="w-16 h-0.5 bg-brand-brown mx-auto mb-4"></div>
              <p className="text-brand-ink/70 text-base">
                Handpicked, premium goods for a healthier lifestyle.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-brand-ink hover:bg-brand-brown text-white px-8 py-3.5 rounded-md transition-colors font-semibold text-sm uppercase tracking-widest shadow-md"
              >
                View Complete Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* ─── SOCIAL PROOF ────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-brand-emerald text-brand-beige border-y-8 border-brand-brown relative overflow-hidden" aria-labelledby="social-proof-heading">
          <div className="absolute inset-0 opacity-5 mix-blend-screen bg-texture-paper"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 id="social-proof-heading" className="text-4xl sm:text-5xl font-bold font-playfair mb-16 text-brand-beige">
              Trusted By Thousands
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center divide-y md:divide-y-0 md:divide-x divide-brand-brown/40">
              <div>
                <p className="text-6xl font-playfair font-bold text-brand-beige-dark mb-4">10,000+</p>
                <p className="text-sm tracking-[0.2em] uppercase font-semibold text-brand-beige/80">Orders Delivered</p>
              </div>
              <div className="pt-12 md:pt-0">
                <p className="text-6xl font-playfair font-bold text-brand-beige-dark mb-4">4.9/5</p>
                <p className="text-sm tracking-[0.2em] uppercase font-semibold text-brand-beige/80">Customer Rating</p>
              </div>
              <div className="pt-12 md:pt-0">
                <p className="text-6xl font-playfair font-bold text-brand-beige-dark mb-4">100%</p>
                <p className="text-sm tracking-[0.2em] uppercase font-semibold text-brand-beige/80">Natural Promise</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PROCESS TIMELINE ───────────────────────────────────────────────── */}
        <section className="py-20 sm:py-24 px-6 bg-white relative" aria-labelledby="process-heading">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-brass mb-4 font-bold flex items-center justify-center gap-3">
                <span className="w-6 h-px bg-brand-brass"></span>
                The Journey
                <span className="w-6 h-px bg-brand-brass"></span>
              </p>
              <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-brand-ink font-playfair">
                From Our Mill to Your Home
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {PROCESS_STEPS.map((s, idx) => (
                <div key={s.step} className="relative group">
                  <div className="flex flex-col">
                    <div className="text-5xl font-bold font-playfair text-brand-beige-dark group-hover:text-brand-brass/30 transition-colors mb-4 absolute -top-4 -left-2 z-0">
                      {s.step}
                    </div>
                    <div className="relative z-10 pl-6 border-l-2 border-brand-brown">
                      <div className="w-3 h-3 rounded-full bg-brand-brass absolute -left-[7px] top-1.5 shadow-[0_0_0_4px_white]"></div>
                      <h4 className="text-lg font-bold text-brand-ink font-playfair mb-2">{s.label}</h4>
                      <p className="text-sm text-brand-ink/70 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ───────────────────────────────────────────────────── */}
        <section className="bg-brand-beige py-20 px-6" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl font-bold text-brand-ink font-playfair mb-3">
                Common Questions
              </h2>
              <div className="w-12 h-0.5 bg-brand-brass mx-auto"></div>
            </div>
            <div className="space-y-4">
              {homeFaqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-brand-beige-dark p-6 transition-all hover:shadow-md">
                  <h3 className="font-bold font-playfair text-brand-brown text-lg mb-2">{faq.question}</h3>
                  <p className="text-sm text-brand-ink/75 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8">
              <Link href="/faq" className="text-brand-brown underline font-medium hover:text-brand-brown transition-colors">
                View all FAQs →
              </Link>
            </p>
          </div>
        </section>

        {/* ─── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="bg-brand-emerald text-brand-beige py-20 sm:py-24 px-6 text-center border-t-4 border-brand-brass relative overflow-hidden" aria-labelledby="cta-heading">
          <div className="absolute top-0 right-0 opacity-10">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold font-playfair mb-6 text-brand-brass">
              Experience Authentic Tradition
            </h2>
            <p className="text-brand-beige/80 text-lg mb-10 leading-relaxed font-light">
              Shop online or order directly through WhatsApp. Our team will verify your requirement and confirm payment and delivery details swiftly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white font-medium px-8 py-4 rounded-md transition-all shadow-lg hover:-translate-y-0.5 text-base"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order on WhatsApp
              </a>
              <Link
                href="/shop"
                className="inline-block bg-white text-brand-emerald hover:bg-brand-beige font-bold px-8 py-4 rounded-md transition-colors text-sm uppercase tracking-widest"
              >
                View Catalog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
