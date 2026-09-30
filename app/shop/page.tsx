"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data/products";
import SectionHeading from "@/components/SectionHeading";

const FILTERS = [
    { label: "All", value: "all" },
    { label: "Oils", value: "oils" },
    { label: "Powders", value: "powders" },
];

const SORTS = [
    { label: "Featured", value: "featured" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Name A–Z", value: "name" },
];

export default function ShopPage() {
    const [filter, setFilter] = useState("all");
    const [sort, setSort] = useState("featured");

    const filtered = useMemo(() => {
        let list = products.filter((p) => p.active);
        if (filter !== "all") list = list.filter((p) => p.category === filter);
        if (sort === "price-asc") list = [...list].sort((a, b) => (a.variants[0]?.sellingPrice ?? 0) - (b.variants[0]?.sellingPrice ?? 0));
        else if (sort === "price-desc") list = [...list].sort((a, b) => (b.variants[0]?.sellingPrice ?? 0) - (a.variants[0]?.sellingPrice ?? 0));
        else if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));
        else list = [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        return list;
    }, [filter, sort]);

    return (
        <div className="bg-[#F7F1E5] min-h-screen pt-28 pb-20 px-4">
            <div className="container-wide">
                {/* Header */}
                <div className="mb-10">
                    <SectionHeading eyebrow="Shop" title={"All Products"} subtitle="Traditional oils and powders from our mill." align="left" />
                </div>

                {/* Filter + Sort Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
                    <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Category filter">
                        {FILTERS.map((f) => (
                            <button
                                key={f.value}
                                onClick={() => setFilter(f.value)}
                                aria-pressed={filter === f.value}
                                className={`px-5 py-2 rounded-full font-inter text-[11px] font-bold tracking-[0.14em] uppercase transition-all border ${filter === f.value
                                        ? "bg-[#164A32] text-[#F7F1E5] border-[#164A32]"
                                        : "bg-transparent text-[#2B1812] border-[#2B1812]/20 hover:border-[#164A32]/50"
                                    }`}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    <select
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="font-inter text-[11px] text-[#2B1812] bg-white border border-[#2B1812]/15 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#164A32]/30 cursor-pointer"
                        aria-label="Sort products"
                    >
                        {SORTS.map((s) => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                    </select>
                </div>

                {/* Products grid */}
                {filtered.length === 0 ? (
                    <p className="text-center font-cormorant text-xl text-[#2B1812]/50 py-16">No products found.</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7">
                        {filtered.map((product) => {
                            const img = product.images[0];
                            const firstVariant = product.variants[0];
                            return (
                                <Link
                                    key={product.id}
                                    href={`/shop/${product.slug}`}
                                    className="group flex flex-col bg-white rounded-2xl border border-[#B88745]/15 shadow-[0_2px_14px_rgba(43,24,18,0.04)] overflow-hidden hover:shadow-[0_8px_32px_rgba(43,24,18,0.10)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#B88745]"
                                >
                                    <div className="relative aspect-square bg-[#F9F5EC] flex items-center justify-center p-6 overflow-hidden">
                                        <span className="absolute top-3 left-3 font-inter text-[9px] font-bold tracking-[0.13em] uppercase text-[#B88745] bg-[#FFFEF8] border border-[#B88745]/30 px-2 py-0.5 rounded-full z-10 capitalize">
                                            {product.category}
                                        </span>
                                        {product.bestSeller && (
                                            <span className="absolute top-3 right-3 font-inter text-[9px] font-bold uppercase text-[#F7F1E5] bg-[#164A32] px-2 py-0.5 rounded-full z-10">
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
                                    <div className="flex flex-col flex-1 px-4 pt-4 pb-5 gap-2">
                                        <h3 className="font-cormorant font-bold text-xl text-[#2B1812] group-hover:text-[#164A32] transition-colors leading-snug">{product.name}</h3>
                                        <p className="font-inter text-[11px] text-[#2B1812]/50 line-clamp-2 leading-relaxed">{product.shortDescription}</p>
                                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#2B1812]/[0.06]">
                                            {firstVariant ? (
                                                <div>
                                                    <p className="font-inter text-[9px] text-[#2B1812]/40 uppercase tracking-wider">From</p>
                                                    <p className="font-cormorant font-bold text-xl text-[#164A32]">₹{firstVariant.sellingPrice}</p>
                                                </div>
                                            ) : (
                                                <span className="text-[#B88745] text-xs font-semibold">Contact for Price</span>
                                            )}
                                            <span className="font-inter text-[10px] text-[#164A32] font-bold tracking-wider uppercase group-hover:underline">View →</span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
