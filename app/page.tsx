import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/lib/data/products";
import { faqs } from "@/lib/data/faqs";
import Link from "next/link";
import Image from "next/image";

const CATEGORY_CARDS = [
  {
    name: "Oils",
    href: "/oils",
    description: "Groundnut, Gingelly & Coconut Oil",
    image: "/groundnut-oil.jpeg",
    alt: "Groundnut oil bottle",
  },
  {
    name: "Food & Powders",
    href: "/powders",
    description: "Health Mix, Turmeric & Green Gram Powder",
    image: null,
    alt: "Food powders",
  },
  {
    name: "Personal Care",
    href: "/personal-care",
    description: "Shikakai Powder",
    image: null,
    alt: "Shikakai powder",
  },
];

const TRUST_ITEMS = [
  { icon: "🏭", text: "Direct from Our Mill" },
  { icon: "🧹", text: "Hygienically Processed & Packed" },
  { icon: "📋", text: "FSSAI Licensed" },
  { icon: "📱", text: "Convenient Online Ordering" },
];

const FAQ_HOMEPAGE = ["how-to-order", "shipping-fee", "delivery-time", "product-sizes"];

export default function Home() {
  const featured = getFeaturedProducts();
  const homeFaqs = faqs.filter((f) => FAQ_HOMEPAGE.includes(f.id));

  return (
    <>
      <Header />
      <main>
        {/* ─── HERO ──────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="bg-stone-900 text-white py-20 sm:py-28 px-6"
          aria-label="Hero"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400 mb-4 font-medium">
              Sree Selvanayaki Amman Oil &amp; Flour Mill · Pidariyur
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair leading-tight mb-6">
              Traditional goodness.<br />
              <span className="text-amber-400">Delivered to your home.</span>
            </h1>
            <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Authentic oils and everyday essentials from Sree Selvanayaki Amman Oil &amp; Flour Mill.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-md transition-colors text-sm uppercase tracking-widest"
              >
                Shop Products
              </Link>
              <a
                href="https://wa.me/917708039583"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-md transition-colors text-sm uppercase tracking-widest"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ─── TRUST STRIP ───────────────────────────────────────────── */}
        <section className="bg-amber-50 border-y border-amber-100 py-6 px-6" aria-label="Trust indicators">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRUST_ITEMS.map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-amber-900">
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="font-medium leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SHOP BY CATEGORY ──────────────────────────────────────── */}
        <section className="py-16 px-6 bg-stone-50" aria-labelledby="categories-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="categories-heading" className="text-2xl font-bold text-stone-800 text-center mb-2">
              Shop by Category
            </h2>
            <p className="text-stone-500 text-center text-sm mb-10">
              Carefully processed and hygienically packed at our mill.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {CATEGORY_CARDS.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="group bg-white rounded-xl border border-stone-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-stone-100 overflow-hidden">
                    {cat.image ? (
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        width={400}
                        height={225}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-300 text-xs">
                        {cat.name}
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-stone-800 group-hover:text-amber-700 transition-colors mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-stone-500">{cat.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURED PRODUCTS ─────────────────────────────────────── */}
        <section className="py-16 px-6" aria-labelledby="featured-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="featured-heading" className="text-2xl font-bold text-stone-800 text-center mb-2">
              Featured Products
            </h2>
            <p className="text-stone-500 text-center text-sm mb-10">
              A selection of our products. <Link href="/shop" className="text-amber-700 underline">View all →</Link>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/shop"
                className="inline-block border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-md transition-colors font-semibold text-sm"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        {/* ─── BRAND STORY ───────────────────────────────────────────── */}
        <section className="bg-stone-900 text-white py-16 px-6" aria-labelledby="story-heading">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="story-heading" className="text-2xl font-bold font-playfair mb-4 text-amber-400">
              Our Mill
            </h2>
            <p className="text-stone-300 leading-relaxed mb-4">
              Sree Selvanayaki Amman Oil &amp; Flour Mill is located at Pidariyur, Mukasipidariyur,
              Tamil Nadu. We produce oils and everyday food products using careful processing and
              hygienic packing methods.
            </p>
            <p className="text-stone-300 leading-relaxed mb-6">
              We are FSSAI licensed, and we take quality and hygiene seriously at every step — from
              selecting ingredients to packing the final product.
            </p>
            <Link
              href="/about"
              className="text-amber-400 underline hover:text-amber-300 text-sm"
            >
              Learn more about us →
            </Link>
          </div>
        </section>

        {/* ─── PROCESS ───────────────────────────────────────────────── */}
        <section className="py-16 px-6 bg-amber-50" aria-labelledby="process-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="process-heading" className="text-2xl font-bold text-stone-800 text-center mb-10">
              From Our Mill to Your Home
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
              {[
                { step: "1", label: "Select Ingredients" },
                { step: "2", label: "Processing" },
                { step: "3", label: "Quality Check" },
                { step: "4", label: "Hygienic Packing" },
                { step: "5", label: "Dispatch" },
                { step: "6", label: "Delivered to You" },
              ].map((s) => (
                <div key={s.step} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center text-sm font-bold mb-2">
                    {s.step}
                  </div>
                  <p className="text-xs text-stone-600 font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── REVIEWS PLACEHOLDER ──────────────────────────────────── */}
        <section className="py-16 px-6" aria-labelledby="reviews-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="reviews-heading" className="text-2xl font-bold text-stone-800 mb-4">
              Customer Reviews
            </h2>
            <p className="text-stone-400 text-sm">
              Customer reviews will appear here. If you've ordered from us, we'd love to hear from you!
            </p>
            <a
              href="https://wa.me/917708039583"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-green-700 underline text-sm hover:text-green-800"
            >
              Share your experience via WhatsApp →
            </a>
          </div>
        </section>

        {/* ─── FAQ ───────────────────────────────────────────────────── */}
        <section className="bg-stone-50 py-16 px-6" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto">
            <h2 id="faq-heading" className="text-2xl font-bold text-stone-800 text-center mb-10">
              Common Questions
            </h2>
            <div className="space-y-6">
              {homeFaqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg border border-stone-100 p-5">
                  <h3 className="font-semibold text-stone-800 mb-2">{faq.question}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-6">
              <Link href="/faq" className="text-amber-700 underline text-sm hover:text-amber-800">
                View all FAQs →
              </Link>
            </p>
          </div>
        </section>

        {/* ─── FINAL CTA ─────────────────────────────────────────────── */}
        <section className="bg-amber-700 text-white py-16 px-6 text-center" aria-labelledby="cta-heading">
          <div className="max-w-2xl mx-auto">
            <h2 id="cta-heading" className="text-3xl font-bold font-playfair mb-4">
              Ready to order?
            </h2>
            <p className="text-amber-100 mb-8 leading-relaxed">
              Shop online or order directly through WhatsApp. Our team will confirm availability,
              delivery and payment details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-block bg-white text-amber-700 font-bold px-8 py-4 rounded-md hover:bg-amber-50 transition-colors text-sm uppercase tracking-widest"
              >
                Shop Products
              </Link>
              <a
                href="https://wa.me/917708039583"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-700 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-md transition-colors text-sm uppercase tracking-widest"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
