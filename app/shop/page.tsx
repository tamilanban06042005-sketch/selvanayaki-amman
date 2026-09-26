import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/data/products";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

export const metadata = {
    title: "Shop All Products - Sree Selvanayaki Amman",
    description: "Explore our premium selection of traditional wood pressed oils and natural powders.",
};

const CATEGORIES = [
    { label: "All Products", href: "#", active: true },
    { label: "Oils", href: "#oils", active: false },
    { label: "Powders & Mixes", href: "#powders", active: false },
    { label: "Personal Care", href: "#", active: false },
    { label: "Health & Wellness", href: "#", active: false },
    { label: "Home Care", href: "#", active: false },
];

export default function ShopPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#F3EFE6] min-h-screen pt-28 pb-20">
                <div className="container-wide">

                    {/* Header Banner */}
                    <div className="flex flex-col items-center text-center border-b border-[#2B1812]/10 pb-12 mb-10">
                        <h1 className="font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl text-[#2B1812] uppercase tracking-wider mb-4">
                            Shop Our Essentials
                        </h1>
                        <p className="text-[#2B1812]/70 font-inter text-sm md:text-base font-medium max-w-xl mx-auto">
                            Premium Wood Pressed Oils & Natural Powders, made with care and delivered direct from our mill.
                        </p>
                    </div>

                    {/* Filters and Controls */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">

                        {/* Horizontal Pill Filters */}
                        <div className="flex flex-wrap gap-3">
                            {CATEGORIES.map((cat, idx) => (
                                <Link
                                    key={idx}
                                    href={cat.href}
                                    className={`px-6 py-2.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-colors border ${cat.active ? 'bg-[#164A32] text-white border-[#164A32] shadow-sm' : 'bg-transparent text-[#2B1812]/70 border-[#2B1812]/10 hover:border-[#164A32] hover:text-[#164A32]'}`}
                                >
                                    {cat.label}
                                </Link>
                            ))}
                        </div>

                        {/* Sorting */}
                        <div className="flex items-center gap-4 text-xs shrink-0 pl-2 lg:pl-0 border-l lg:border-l-0 border-[#2B1812]/10">
                            <span className="text-[#2B1812]/70 whitespace-nowrap hidden sm:inline font-semibold">
                                Showing {products.length} results
                            </span>
                            <div className="flex gap-2">
                                <select className="bg-white border border-[#2B1812]/10 rounded-full px-4 py-2 focus:outline-none text-[#2B1812] font-semibold text-[10px] uppercase tracking-wider cursor-pointer shadow-sm">
                                    <option>Sort by: Featured</option>
                                    <option>Best Selling</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
