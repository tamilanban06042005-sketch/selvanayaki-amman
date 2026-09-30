import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data/products";
import SectionHeading from "@/components/SectionHeading";

const TAMIL_NAMES: Record<string, string> = {
    "groundnut-oil": "கடலை எண்ணெய்",
    "gingelly-oil": "நல்லெண்ணெய்",
    "coconut-oil": "தேங்காய் எண்ணெய்",
    "health-mix-powder": "சத்துமாவு",
    "turmeric-powder": "மஞ்சள் தூள்",
    "shikakai-powder": "சீயக்காய் தூள்",
    "green-gram-powder": "பச்சைப்பயிறு தூள்",
};

const CATEGORY_LABEL: Record<string, string> = {
    oils: "Traditional Oil",
    powders: "Mill Powder",
};

export default function ProductsShowcase() {
    const activeProducts = products.filter((p) => p.active);

    return (
        <section id="products" className="bg-[#F7F1E5] py-20 px-4">
            <div className="container-wide">
                <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
                    <SectionHeading
                        eyebrow="Our Products"
                        title={"Seven Everyday\nEssentials"}
                        align="left"
                    />
                    <Link
                        href="/shop"
                        className="self-end font-inter text-[11px] font-bold tracking-[0.18em] uppercase text-[#164A32] border-b border-[#164A32]/40 pb-px hover:border-[#164A32] transition-colors whitespace-nowrap flex items-center gap-1 group"
                    >
                        View All <span className="group-hover:translate-x-1 transition-transform inline-block" aria-hidden="true">→</span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7">
                    {activeProducts.map((product) => {
                        const img = product.images[0];
                        const tamil = TAMIL_NAMES[product.slug];
                        const firstVariant = product.variants[0];
                        const catLabel = CATEGORY_LABEL[product.category] ?? "";

                        return (
                            <Link
                                key={product.id}
                                href={`/shop/${product.slug}`}
                                className="group flex flex-col bg-white rounded-2xl border border-[#B88745]/15 shadow-[0_2px_14px_rgba(43,24,18,0.04)] overflow-hidden hover:shadow-[0_8px_32px_rgba(43,24,18,0.10)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#B88745]"
                                aria-label={`View ${product.name}`}
                            >
                                {/* Image area */}
                                <div className="relative aspect-square bg-[#F9F5EC] flex items-center justify-center p-6 overflow-hidden">
                                    <span className="absolute top-3 left-3 font-inter text-[9px] font-bold tracking-[0.15em] uppercase text-[#B88745] bg-[#FFFEF8] border border-[#B88745]/30 px-2 py-0.5 rounded-full z-10">
                                        {catLabel}
                                    </span>
                                    {product.bestSeller && (
                                        <span className="absolute top-3 right-3 font-inter text-[9px] font-bold tracking-[0.1em] uppercase text-[#F7F1E5] bg-[#164A32] px-2 py-0.5 rounded-full z-10">
                                            Best Seller
                                        </span>
                                    )}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={img}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                            className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>
                                </div>

                                {/* Card info */}
                                <div className="flex flex-col flex-1 px-4 pt-4 pb-5 gap-2">
                                    {tamil && (
                                        <p className="font-inter text-[9px] font-bold tracking-widest uppercase text-[#B88745]/70">{tamil}</p>
                                    )}
                                    <h3 className="font-cormorant font-bold text-xl text-[#2B1812] group-hover:text-[#164A32] transition-colors leading-snug">
                                        {product.name}
                                    </h3>
                                    <p className="font-inter text-[11px] text-[#2B1812]/55 leading-relaxed line-clamp-2">
                                        {product.shortDescription}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#2B1812]/[0.06]">
                                        {firstVariant ? (
                                            <div>
                                                <p className="font-inter text-[9px] text-[#2B1812]/40 uppercase tracking-wider">From</p>
                                                <p className="font-cormorant font-bold text-xl text-[#164A32]">
                                                    ₹{firstVariant.sellingPrice}
                                                    <span className="font-inter text-xs font-normal text-[#2B1812]/40 ml-1">/{firstVariant.size}</span>
                                                </p>
                                            </div>
                                        ) : (
                                            <span className="text-[#B88745] text-xs font-semibold uppercase tracking-wider">Contact for Price</span>
                                        )}
                                        <span className="font-inter text-[10px] text-[#164A32] font-bold tracking-wider uppercase group-hover:underline">View →</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
