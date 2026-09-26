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
            <main className="bg-[#FFFDF7] min-h-screen pt-28 lg:pt-36 pb-24">
                <div className="container-wide">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 label-caps text-[9px] text-[#4A281B]/50 mb-10">
                        <Link href="/" className="hover:text-[#164A32] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/shop" className="hover:text-[#164A32] transition-colors">Shop</Link>
                        <span>/</span>
                        <span className="text-[#2B1812]">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Left: Product Image */}
                        <div className="lg:col-span-6">
                            <div className="relative aspect-[4/5] bg-[#F7F1E5] rounded-3xl overflow-hidden border border-[#4A281B]/10 p-8 lg:p-12 mb-8">
                                {img ? (
                                    <Image
                                        src={img}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center">
                                        <span className="text-6xl opacity-30 mb-4">🫙</span>
                                        <span className="label-caps text-[#4A281B]/40">Coming Soon</span>
                                    </div>
                                )}
                                {/* Brand label floating */}
                                <div className="absolute top-6 left-6 bg-[#164A32] text-[#F7F1E5] px-4 py-2 rounded-lg">
                                    <span className="font-cormorant font-semibold text-sm">Made in Pidariyur</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Details & Buying */}
                        <div className="lg:col-span-6 flex flex-col">

                            <div className="mb-8">
                                <span className="label-caps text-[#B88745] mb-4 block">
                                    {product.brand}
                                </span>
                                <h1 className="heading-display text-4xl lg:text-5xl text-[#2B1812] mb-6">
                                    {product.name}
                                </h1>
                                <p className="text-[#2B1812]/70 font-inter leading-relaxed bg-[#F7F1E5] p-5 border-l-2 border-[#164A32]">
                                    {product.description}
                                </p>
                            </div>

                            {/* Buying Block */}
                            <AddToCartBlock product={product} whatsappNumber={businessConfig.whatsappNumber} />

                            {/* Verified Product Info */}
                            <div className="mt-12 pt-10 border-t border-[#4A281B]/10 space-y-8">
                                {product.storageInstructions && (
                                    <div>
                                        <h3 className="font-cormorant font-semibold text-[#2B1812] text-xl mb-2">
                                            Storage Instructions
                                        </h3>
                                        <p className="text-[#2B1812]/60 font-inter text-sm leading-relaxed">
                                            {product.storageInstructions}
                                        </p>
                                    </div>
                                )}
                                {product.shelfLife && (
                                    <div>
                                        <h3 className="font-cormorant font-semibold text-[#2B1812] text-xl mb-2">
                                            Shelf Life
                                        </h3>
                                        <p className="text-[#2B1812]/60 font-inter text-sm leading-relaxed">
                                            {product.shelfLife}
                                        </p>
                                    </div>
                                )}
                                <div>
                                    <h3 className="font-cormorant font-semibold text-[#2B1812] text-xl mb-4">
                                        Assurance
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            "FSSAI Licensed",
                                            "Carefully Processed",
                                            "Direct from our Mill",
                                            "South Indian Heritage"
                                        ].map((item) => (
                                            <div key={item} className="flex items-center gap-2">
                                                <span className="text-[#164A32] text-sm">✓</span>
                                                <span className="font-inter text-xs text-[#2B1812]/70">{item}</span>
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
