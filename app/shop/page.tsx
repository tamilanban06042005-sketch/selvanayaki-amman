import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getOils, getPowders, products } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/lib/config";

export const metadata = {
    title: "Shop - Sree Selvanayaki Amman",
    description: "Explore our premium selection of traditional oils and everyday powders.",
};

const IMAGE_MAP: Record<string, string> = {
    "groundnut-oil": "/groundnut oil.jpeg",
    "gingelly-oil": "/gingelly oil.jpeg",
    "coconut-oil": "/coconut oil.jpeg",
};

export default function ShopPage() {
    const oils = getOils();
    const powders = getPowders();

    return (
        <>
            <Navbar />
            <main className="bg-[#FFFDF7] min-h-screen">

                {/* Page Header */}
                <div className="bg-[#164A32] text-[#F7F1E5] pt-28 pb-20 px-6 lg:px-12 rounded-b-3xl mb-12">
                    <div className="container-wide text-center">
                        <span className="label-caps text-[#B88745] mb-4">
                            Sree Selvanayaki Amman
                        </span>
                        <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl mb-6">
                            Our Products
                        </h1>
                        <p className="text-[#F7F1E5]/70 text-base md:text-lg font-inter font-light max-w-2xl mx-auto leading-relaxed">
                            Seven everyday essentials carefully prepared using traditional methods and the finest ingredients from Pidariyur.
                        </p>
                    </div>
                </div>

                <div className="container-wide pb-24">

                    {/* TRADITIONAL OILS */}
                    <div className="mb-20" id="oils">
                        <div className="flex items-center gap-4 border-b border-[#4A281B]/10 pb-4 mb-8">
                            <h2 className="heading-display text-3xl text-[#2B1812]">Traditional Oils</h2>
                            <div className="flex-1" />
                            <span className="label-caps text-[9px] text-[#4A281B]/40 hidden sm:block">Wood Pressed</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                            {oils.map((product) => {
                                const img = IMAGE_MAP[product.slug];
                                const firstVariant = product.variants[0];

                                return (
                                    <div
                                        key={product.id}
                                        className="group card-product flex flex-col h-full relative"
                                    >
                                        {/* Main hit area */}
                                        <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />

                                        <div className="relative aspect-[4/5] bg-[#F7F1E5] overflow-hidden rounded-t-xl">
                                            {img ? (
                                                <Image
                                                    src={img}
                                                    alt={product.name}
                                                    fill
                                                    sizes="(max-width: 768px) 50vw, 25vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <span className="label-caps text-[#4A281B]/40">Coming Soon</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4 md:p-5 flex flex-col flex-1 relative z-20 pointer-events-none">
                                            <h3 className="font-cormorant font-semibold text-[#2B1812] text-lg lg:text-xl group-hover:text-[#164A32] transition-colors mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-[#2B1812]/50 text-xs font-inter line-clamp-2 mb-4 leading-relaxed flex-1">
                                                {product.shortDescription || product.description}
                                            </p>
                                            <div className="flex items-center justify-between border-t border-[#4A281B]/10 pt-4 mt-auto">
                                                <span className="font-inter font-semibold text-[#164A32] text-sm">
                                                    From ₹{firstVariant?.sellingPrice}
                                                </span>
                                                <span className="label-caps text-[8px] text-[#2B1812] group-hover:text-[#B88745] pointer-events-auto relative z-30">
                                                    View Details →
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* EVERYDAY POWDERS */}
                    <div className="mb-12" id="powders">
                        <div className="flex items-center gap-4 border-b border-[#4A281B]/10 pb-4 mb-8">
                            <h2 className="heading-display text-3xl text-[#2B1812]">Everyday Powders</h2>
                            <div className="flex-1" />
                            <span className="label-caps text-[9px] text-[#4A281B]/40 hidden sm:block">Pure & Natural</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                            {powders.map((product) => {
                                const img = IMAGE_MAP[product.slug];
                                const firstVariant = product.variants[0];

                                return (
                                    <div
                                        key={product.id}
                                        className="group card-product flex flex-col h-full relative"
                                    >
                                        {/* Main hit area */}
                                        <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />

                                        <div className="relative aspect-square bg-[#F7F1E5] flex flex-col items-center justify-center p-6 border-b border-[#4A281B]/5 rounded-t-xl transition-colors group-hover:bg-[#f2ead9]">
                                            <span className="text-4xl opacity-40 mb-2">🌿</span>
                                            <span className="label-caps text-[9px] text-[#4A281B]/60 text-center uppercase">
                                                {product.name}
                                            </span>
                                        </div>
                                        <div className="p-4 md:p-5 flex flex-col flex-1">
                                            <h3 className="font-cormorant font-semibold text-[#2B1812] text-lg lg:text-xl group-hover:text-[#164A32] transition-colors mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-[#2B1812]/50 text-xs font-inter line-clamp-2 mb-4 leading-relaxed flex-1">
                                                {product.shortDescription || product.description}
                                            </p>
                                            <div className="flex flex-col gap-3 border-t border-[#4A281B]/10 pt-4 mt-auto">
                                                <span className="font-inter font-semibold text-[#164A32] text-sm">
                                                    From ₹{firstVariant?.sellingPrice}
                                                </span>
                                                <div className="relative z-20">
                                                    <a
                                                        href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
                                                            `Hello, I would like to order ${product.name}.`
                                                        )}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-whatsapp text-[9px] px-0 w-full justify-center py-2.5 mt-1"
                                                    >
                                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                                        WhatsApp Order
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
