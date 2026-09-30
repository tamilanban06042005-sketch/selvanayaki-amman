import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, products } from "@/lib/data/products";
import { businessConfig } from "@/lib/config";
import AddToCartBlock from "./AddToCartBlock";

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return {};
    return {
        title: product.name,
        description: product.shortDescription,
    };
}

const CATEGORY_LABEL: Record<string, string> = {
    oils: "Traditional Oil",
    powders: "Mill Powder",
};

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) notFound();

    const img = product.images[0];
    const catLabel = CATEGORY_LABEL[product.category] ?? "Mill Product";

    return (
        <div className="bg-[#F7F1E5] min-h-screen">
            <div className="pt-28 pb-24 px-4">
                <div className="container-wide">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 font-inter text-[11px] text-[#2B1812]/40 mb-8" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-[#2B1812] transition-colors">Home</Link>
                        <span aria-hidden="true">›</span>
                        <Link href="/shop" className="hover:text-[#2B1812] transition-colors">Shop</Link>
                        <span aria-hidden="true">›</span>
                        <span className="text-[#2B1812]">{product.name}</span>
                    </nav>

                    {/* Main 3-column grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">

                        {/* Image — 5 cols */}
                        <div className="lg:col-span-5">
                            <div className="relative aspect-square bg-[#F9F5EC] border border-[#B88745]/20 rounded-3xl overflow-hidden flex items-center justify-center p-10">
                                {/* Gold corner accents */}
                                {["top-3 left-3 border-t-2 border-l-2", "top-3 right-3 border-t-2 border-r-2", "bottom-3 left-3 border-b-2 border-l-2", "bottom-3 right-3 border-b-2 border-r-2"].map((c, i) => (
                                    <div key={i} className={`absolute w-5 h-5 border-[#B88745]/40 ${c}`} aria-hidden="true" />
                                ))}
                                {product.bestSeller && (
                                    <span className="absolute top-4 left-4 font-inter text-[9px] font-bold uppercase text-[#F7F1E5] bg-[#164A32] px-2.5 py-1 rounded-full z-10">
                                        Best Seller
                                    </span>
                                )}
                                <div className="relative w-full h-full">
                                    <Image
                                        src={img}
                                        alt={product.name}
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 45vw"
                                        className="object-contain mix-blend-multiply drop-shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product info — 4 cols */}
                        <div className="lg:col-span-4 flex flex-col py-2">
                            <p className="font-inter text-[10px] font-bold tracking-[0.22em] uppercase text-[#B88745] mb-2">{catLabel}</p>
                            <span className="block w-8 h-px bg-[#B88745] mb-4" aria-hidden="true" />
                            <h1 className="font-cormorant font-bold text-[clamp(2.2rem,4vw,3.2rem)] text-[#2B1812] leading-tight tracking-wide mb-4">
                                {product.name}
                            </h1>
                            <p className="font-cormorant text-xl text-[#2B1812]/65 italic leading-relaxed mb-6">
                                {product.shortDescription}
                            </p>
                            <AddToCartBlock product={product} whatsappNumber={businessConfig.whatsappNumber} />
                        </div>

                        {/* Trust sidebar — 3 cols */}
                        <div className="lg:col-span-3">
                            <div className="bg-[#064B36] rounded-2xl p-6 flex flex-col gap-5 h-full">
                                <p className="font-inter text-[9px] font-bold tracking-[0.2em] uppercase text-[#B88745]">Why Choose Us</p>
                                {[
                                    { emoji: "🌿", title: "From Our Mill", desc: "Made & packed in Pidariyur, Erode" },
                                    { emoji: "✅", title: "No Preservatives", desc: "100% natural ingredients" },
                                    { emoji: "🛡️", title: "FSSAI Licensed", desc: "Lic. No. 22419058000081" },
                                    { emoji: "📦", title: "Clean Packaging", desc: "Food-grade, hygienic sealing" },
                                ].map((t) => (
                                    <div key={t.title} className="flex gap-3 items-start">
                                        <div className="w-10 h-10 rounded-full border border-[#B88745]/40 flex items-center justify-center shrink-0 text-base">
                                            {t.emoji}
                                        </div>
                                        <div>
                                            <h4 className="font-cormorant font-bold text-[#F7F1E5] text-base leading-tight mb-0.5">{t.title}</h4>
                                            <p className="font-inter text-[10px] text-[#F7F1E5]/55 leading-relaxed">{t.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Product Details + Delivery */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-[#B88745]/20 pt-12">
                        <div className="lg:col-span-8 space-y-6">
                            {product.description && (
                                <div>
                                    <h2 className="font-cormorant font-bold text-2xl text-[#2B1812] mb-2">Description</h2>
                                    <p className="font-cormorant text-xl text-[#2B1812]/70 leading-relaxed">{product.description}</p>
                                </div>
                            )}
                            {product.ingredients && product.ingredients.length > 0 && (
                                <div className="border-t border-[#B88745]/15 pt-5">
                                    <h2 className="font-cormorant font-bold text-2xl text-[#2B1812] mb-3">Ingredients</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {product.ingredients.map((ing) => (
                                            <span key={ing} className="font-inter text-[11px] text-[#2B1812] bg-[#F9F5EC] border border-[#B88745]/25 px-3 py-1.5 rounded-full">{ing}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {product.processingMethod && (
                                <div className="border-t border-[#B88745]/15 pt-5">
                                    <h2 className="font-cormorant font-bold text-2xl text-[#2B1812] mb-2">Processing Method</h2>
                                    <p className="font-cormorant text-xl text-[#2B1812]/70 leading-relaxed">{product.processingMethod}</p>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-4">
                            <div className="bg-[#F9F5EC] border border-[#B88745]/20 rounded-2xl p-6">
                                <h2 className="font-cormorant font-bold text-xl text-[#2B1812] mb-5">Delivery</h2>
                                <div className="space-y-3 font-inter text-xs">
                                    <div className="flex justify-between"><span className="text-[#2B1812]/55">Standard Shipping</span><span className="font-bold text-[#2B1812]">₹60</span></div>
                                    <div className="flex justify-between"><span className="text-[#2B1812]/55">Free Shipping</span><span className="font-bold text-[#164A32]">Orders ≥ ₹1,000</span></div>
                                    <div className="flex justify-between"><span className="text-[#2B1812]/55">Delivery Time</span><span className="font-bold text-[#2B1812]">2–4 working days</span></div>
                                </div>
                                {product.shippingInfo && (
                                    <p className="font-cormorant text-base text-[#2B1812]/55 italic mt-4 pt-4 border-t border-[#B88745]/15 leading-relaxed">{product.shippingInfo}</p>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
