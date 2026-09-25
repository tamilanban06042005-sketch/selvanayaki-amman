import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProductBySlug, products } from "@/lib/data/products";
import AddToCartBlock from "./AddToCartBlock";

const whatsAppNumber = "919965005891";

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const product = getProductBySlug(resolvedParams.slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="bg-[#F9F7F2] font-inter pt-32 pb-24 min-h-screen border-t-[8px] border-[#183921]">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                    {/* Breadcrumbs */}
                    <nav className="text-[10px] uppercase font-semibold tracking-widest text-[#4A3930]/50 mb-12 flex items-center gap-3">
                        <Link href="/" className="hover:text-[#183921] transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/shop" className="hover:text-[#183921] transition-colors">Shop</Link>
                        <span>/</span>
                        <span className="text-[#4A3930]">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Left: Product Images */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="relative aspect-[4/5] bg-white rounded-sm overflow-hidden border border-[#4A3930]/10 flex items-center justify-center p-8">
                                {product.images.length > 0 ? (
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-[#4A3930]/40 uppercase tracking-widest text-sm font-semibold">
                                        Image Available Soon
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right: Product Details & Buying Actions */}
                        <div className="lg:col-span-6 flex flex-col pt-4 lg:pt-8">
                            <span className="text-[#183921] text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                                {product.brand}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-[#4A3930] mb-6 leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-base text-[#4A3930]/70 font-light leading-relaxed pb-8 border-b border-[#4A3930]/10 mb-8">
                                {product.description}
                            </p>

                            {/* Buying Block (Client Component) */}
                            <AddToCartBlock product={product} whatsappNumber={whatsAppNumber} />

                            {/* Trust markers */}
                            <div className="grid grid-cols-2 gap-4 my-12 pt-8 border-t border-[#4A3930]/10">
                                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-semibold text-[#4A3930]/70">
                                    <span className="w-1.5 h-1.5 bg-[#4A3930] rounded-full"></span> FSSAI Licensed
                                </div>
                                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-semibold text-[#4A3930]/70">
                                    <span className="w-1.5 h-1.5 bg-[#4A3930] rounded-full"></span> Carefully Processed
                                </div>
                                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-semibold text-[#4A3930]/70">
                                    <span className="w-1.5 h-1.5 bg-[#4A3930] rounded-full"></span> Direct from our Mill
                                </div>
                                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider font-semibold text-[#4A3930]/70">
                                    <span className="w-1.5 h-1.5 bg-[#4A3930] rounded-full"></span> South Indian Heritage
                                </div>
                            </div>

                            {/* Verified Product Information Block */}
                            <div className="mt-4 space-y-12">
                                {product.about && (
                                    <div>
                                        <h3 className="text-xl font-playfair font-semibold text-[#4A3930] mb-3">About this Product</h3>
                                        <p className="text-[#4A3930]/80 font-light leading-relaxed text-sm md:text-base">{product.about}</p>
                                    </div>
                                )}

                                {product.storageInstructions && (
                                    <div>
                                        <h3 className="text-xl font-playfair font-semibold text-[#4A3930] mb-3">Storage Instruction</h3>
                                        <p className="text-[#4A3930]/80 font-light leading-relaxed text-sm md:text-base">{product.storageInstructions}</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
