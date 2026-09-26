import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductBySlug, products } from "@/lib/data/products";
import AddToCartBlock from "./AddToCartBlock";
import { businessConfig } from "@/lib/config";

const IMAGE_MAP: Record<string, string> = {
    "groundnut-oil": "/groundnut oil.jpeg",
    "gingelly-oil": "/gingelly oil.jpeg",
    "coconut-oil": "/coconut oil.jpeg",
};

export function generateStaticParams() {
    return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    const img = IMAGE_MAP[product.slug];

    return (
        <>
            <Navbar />
            <main className="bg-[#F3EFE6] min-h-screen pt-28 pb-24">
                <div className="container-wide">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 label-caps text-[9px] text-[#2B1812]/50 mb-10">
                        <Link href="/" className="hover:text-[#164A32] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/shop" className="hover:text-[#164A32] transition-colors">Shop</Link>
                        <span>/</span>
                        <span className="text-[#2B1812]">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Left: Product Image */}
                        <div className="lg:col-span-6 flex gap-4">
                            {/* Thumbnails placeholder for later */}
                            <div className="hidden lg:flex flex-col gap-4 w-20 shrink-0">
                                <div className="aspect-[3/4] bg-white rounded-xl border border-[#2B1812]/10 p-2 cursor-pointer shadow-[0_2px_10px_rgba(43,24,18,0.02)]">
                                    {img && <Image src={img} alt="Thumb" width={60} height={80} className="object-contain mix-blend-multiply w-full h-full" />}
                                </div>
                            </div>
                            <div className="relative flex-1 aspect-[4/5] bg-white rounded-3xl overflow-hidden border border-[#2B1812]/5 p-8 lg:p-12 mb-8 shadow-[0_2px_15px_rgba(43,24,18,0.03)] flex items-center justify-center">
                                {img ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={img}
                                            alt={product.name}
                                            fill
                                            className="object-contain mix-blend-multiply"
                                            priority
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center">
                                        <span className="text-6xl opacity-30 mb-4">🫙</span>
                                        <span className="label-caps text-[#2B1812]/40">Coming Soon</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: Details & Buying */}
                        <div className="lg:col-span-6 flex flex-col py-4">

                            <div className="mb-6 border-b border-[#2B1812]/10 pb-8">
                                <p className="font-cormorant font-bold text-[#164A32] text-sm uppercase tracking-widest mb-3">
                                    Traditional Standard
                                </p>
                                <h1 className="font-cormorant text-4xl lg:text-5xl xl:text-[56px] text-[#2B1812] uppercase font-bold tracking-wider mb-4 leading-[1.1]">
                                    {product.name}
                                </h1>

                                <div className="flex items-center gap-3 text-sm text-[#2B1812]/80 font-bold mb-6">
                                    <span className="flex text-[#D6AD7A] tracking-widest text-lg leading-none">★★★★★</span>
                                    <span className="text-[#2B1812]">4.9</span>
                                    <span className="text-[#2B1812]/40">|</span>
                                    <span className="cursor-pointer hover:text-[#164A32] opacity-70 transition-colors">120 Reviews</span>
                                </div>

                                <p className="text-[#2B1812]/70 font-inter leading-relaxed text-sm max-w-lg mb-8">
                                    {product.description}
                                </p>
                            </div>

                            {/* Buying Block */}
                            <AddToCartBlock product={product} whatsappNumber={businessConfig.whatsappNumber} />

                            {/* Verified Product Info */}
                            <div className="mt-10 space-y-6">
                                {product.storageInstructions && (
                                    <div className="border-b border-[#2B1812]/5 pb-4">
                                        <h3 className="font-inter font-bold text-[10px] text-[#2B1812]/60 uppercase tracking-widest mb-2">
                                            Storage Instructions
                                        </h3>
                                        <p className="text-[#2B1812] font-inter text-sm leading-relaxed">
                                            {product.storageInstructions}
                                        </p>
                                    </div>
                                )}
                                {product.shelfLife && (
                                    <div className="border-b border-[#2B1812]/5 pb-4">
                                        <h3 className="font-inter font-bold text-[10px] text-[#2B1812]/60 uppercase tracking-widest mb-2">
                                            Shelf Life
                                        </h3>
                                        <p className="text-[#2B1812] font-inter text-sm leading-relaxed">
                                            {product.shelfLife}
                                        </p>
                                    </div>
                                )}
                                <div className="pt-4">
                                    <div className="flex flex-wrap gap-4">
                                        {[
                                            "FSSAI Licensed",
                                            "Carefully Processed",
                                            "Direct from our Mill"
                                        ].map((item) => (
                                            <div key={item} className="flex items-center gap-2 bg-white border border-[#2B1812]/10 rounded-full px-4 py-2 shadow-sm">
                                                <span className="text-[#164A32] text-sm leading-none mt-[1px]">✓</span>
                                                <span className="font-inter font-bold text-[9px] uppercase tracking-widest text-[#2B1812]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
