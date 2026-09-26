import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data/products";
import { businessConfig } from "@/lib/config";

const TAMIL_NAMES: Record<string, string> = {
    "groundnut-oil": "கடலை எண்ணெய்",
    "gingelly-oil": "நல்லெண்ணெய்",
    "coconut-oil": "தேங்காய் எண்ணெய்",
    "health-mix-powder": "சத்துமாவு",
    "turmeric-powder": "மஞ்சள் தூள்",
    "shikakai-powder": "சீயக்காய் தூள்",
    "green-gram-powder": "பச்சைப்பயிறு தூள்",
};

const IMAGE_MAP: Record<string, string> = {
    "groundnut-oil": "/groundnut oil.jpeg",
    "gingelly-oil": "/gingelly oil.jpeg",
    "coconut-oil": "/coconut oil.jpeg",
};

export default function ProductsGrid() {
    const activeProducts = products.filter((p) => p.active);

    return (
        <section id="products" className="py-20 relative">
            <div className="container-wide">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#2B1812]/10 pb-4 mb-10">
                    <h2 className="font-cormorant font-bold text-2xl md:text-3xl text-[#2B1812] uppercase tracking-widest">
                        Our Products
                    </h2>
                    <Link
                        href="/shop"
                        className="text-[#2B1812]/70 hover:text-[#164A32] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center gap-2 mt-4 sm:mt-0"
                    >
                        View All Products
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                </div>

                <p className="text-[#2B1812]/50 text-sm font-inter mb-10 max-w-2xl">
                    Seven everyday essentials from Sree Selvanayaki Amman Oil & Flour Mill.
                </p>

                {/* Product Grid — 4 per row matching the mockup */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {activeProducts.map((product) => {
                        const img = IMAGE_MAP[product.slug];
                        const tamil = TAMIL_NAMES[product.slug];
                        const firstVariant = product.variants[0];

                        return (
                            <div key={product.id} className="group flex flex-col relative h-full">
                                {/* Main hit area */}
                                <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />

                                {/* Image box */}
                                <div className="relative aspect-square bg-white border border-[#2B1812]/5 overflow-hidden rounded-2xl shadow-[0_2px_10px_rgba(43,24,18,0.02)] flex items-center justify-center p-6 mb-4">
                                    {img ? (
                                        <div className="relative w-full h-full pt-4">
                                            <Image
                                                src={img}
                                                alt={product.name}
                                                fill
                                                sizes="(max-width: 640px) 50vw, 25vw"
                                                className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-center opacity-40">
                                            <span className="text-3xl">🫙</span>
                                            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2B1812]">Image Pending</span>
                                        </div>
                                    )}
                                </div>

                                {/* Card content */}
                                <div className="flex flex-col flex-1 px-1">
                                    <h3 className="font-inter font-bold text-[#2B1812] text-sm group-hover:text-[#164A32] transition-colors mb-1">
                                        {product.name}
                                    </h3>
                                    {tamil && (
                                        <p className="text-[#2B1812]/40 text-[10px] font-semibold tracking-wider uppercase mb-3 text-left">
                                            {tamil}
                                        </p>
                                    )}

                                    {/* Price */}
                                    <div className="mt-auto">
                                        {firstVariant ? (
                                            <p className="font-semibold text-[#164A32] text-lg">
                                                ₹{firstVariant.sellingPrice}
                                            </p>
                                        ) : (
                                            <p className="text-[#B88745] text-xs font-semibold uppercase tracking-wider">Contact for Price</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
