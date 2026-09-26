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

// Strip non-existent images — only these three have confirmed photos
const IMAGE_MAP: Record<string, string> = {
    "groundnut-oil": "/groundnut oil.jpeg",
    "gingelly-oil": "/gingelly oil.jpeg",
    "coconut-oil": "/coconut oil.jpeg",
};

export default function ProductsGrid() {
    const activeProducts = products.filter((p) => p.active);

    return (
        <section id="products" className="section-pad bg-[#FFFDF7]">
            <div className="container-wide">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="divider-gold" />
                            <span className="label-caps text-[#B88745]">Our Products</span>
                        </div>
                        <h2 className="heading-display text-4xl md:text-5xl text-[#2B1812]">
                            Seven Essentials.<br />
                            <span className="text-[#164A32]">One Mill.</span>
                        </h2>
                    </div>
                    <Link
                        href="/shop"
                        className="btn-outline text-[10px] px-6 py-3 self-start md:self-end whitespace-nowrap"
                    >
                        View All Products →
                    </Link>
                </div>

                {/* Product Grid — 7 cards, 3-4 per row on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 lg:gap-5">
                    {activeProducts.map((product) => {
                        const img = IMAGE_MAP[product.slug];
                        const tamil = TAMIL_NAMES[product.slug];
                        const firstVariant = product.variants[0];

                        return (
                            <div
                                key={product.id}
                                className="group card-product flex flex-col relative"
                            >
                                {/* Main hit area */}
                                <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />

                                {/* Image box */}
                                <div className="relative aspect-[4/5] bg-[#F7F1E5] overflow-hidden rounded-t-xl">
                                    {img ? (
                                        <Image
                                            src={img}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 14vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                                            <span className="text-4xl opacity-30">🫙</span>
                                            <span className="label-caps text-[8px] text-[#4A281B]/40 text-center">Coming Soon</span>
                                        </div>
                                    )}
                                    {/* Hover gold line */}
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#B88745] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </div>

                                {/* Card content */}
                                <div className="p-4 flex flex-col gap-1 flex-1 relative z-20 pointer-events-none">
                                    <p className="font-cormorant font-semibold text-[#2B1812] text-base md:text-lg leading-tight group-hover:text-[#164A32] transition-colors">
                                        {product.name}
                                    </p>
                                    {tamil && (
                                        <p className="label-caps text-[8px] text-[#4A281B]/50">{tamil}</p>
                                    )}

                                    {/* Price or CTA */}
                                    <div className="mt-auto pt-3">
                                        {firstVariant ? (
                                            <p className="font-inter font-semibold text-[#164A32] text-sm">
                                                From ₹{firstVariant.sellingPrice}
                                            </p>
                                        ) : (
                                            <p className="label-caps text-[8px] text-[#B88745]">Contact for price</p>
                                        )}
                                    </div>
                                </div>

                                {/* WhatsApp quick-order */}
                                <div className="relative z-30 px-4 pb-4">
                                    <a
                                        href={`https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
                                            `Hello, I would like to order ${product.name}.`
                                        )}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-1.5 bg-[#22C55E] hover:bg-[#16A34A] text-white text-[9px] font-bold uppercase tracking-[0.16em] py-2 rounded-lg transition-colors"
                                    >
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <Link href="/shop" className="btn-primary text-[10px] px-10 py-4">
                        Explore All 7 Products →
                    </Link>
                </div>

            </div>
        </section>
    );
}
