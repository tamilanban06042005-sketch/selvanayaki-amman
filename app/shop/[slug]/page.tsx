import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getProductBySlug, products } from "@/lib/data/products";
import AddToCartBlock from "./AddToCartBlock";
import { businessConfig } from "@/lib/config";

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
            <Header />
            <main className="bg-brand-soft-cream pt-32 pb-24 min-h-screen">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

                    {/* Breadcrumbs */}
                    <nav className="text-xs font-semibold uppercase tracking-widest text-brand-dark/50 mb-12 flex items-center gap-2">
                        <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/shop" className="hover:text-brand-gold transition-colors">Shop</Link>
                        <span>/</span>
                        <span className="text-brand-dark">{product.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Left: Product Images */}
                        <div className="space-y-6">
                            <div className="relative aspect-[4/5] bg-brand-ivory rounded-sm overflow-hidden border border-brand-heritage/10">
                                {product.images.length > 0 ? (
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-brand-heritage/40 uppercase tracking-widest text-sm font-semibold">
                                        Image Available Soon
                                    </div>
                                )}
                                {/* Subtle grading */}
                                <div className="absolute inset-0 bg-brand-heritage mix-blend-multiply opacity-[0.03]"></div>
                            </div>
                        </div>

                        {/* Right: Product Details & Buying Actions */}
                        <div className="flex flex-col">
                            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                                {product.brand}
                            </span>
                            <h1 className="heading-editorial text-4xl md:text-5xl lg:text-6xl text-brand-deep-green mb-6 leading-none">
                                {product.name}
                            </h1>
                            <p className="text-lg text-brand-dark/70 font-light leading-relaxed pb-8 border-b border-brand-heritage/10 mb-8">
                                {product.description}
                            </p>

                            {/* Buying Block (Client Component) */}
                            <AddToCartBlock product={product} whatsappNumber={businessConfig.whatsappNumber} />

                            {/* Trust markers */}
                            <div className="grid grid-cols-2 gap-4 my-12 pt-8 border-t border-brand-heritage/10">
                                <div className="flex items-center gap-3 text-sm text-brand-dark/80">
                                    <span className="w-1 h-1 bg-brand-gold rounded-full"></span> FSSAI Licensed
                                </div>
                                <div className="flex items-center gap-3 text-sm text-brand-dark/80">
                                    <span className="w-1 h-1 bg-brand-gold rounded-full"></span> Carefully Processed
                                </div>
                                <div className="flex items-center gap-3 text-sm text-brand-dark/80">
                                    <span className="w-1 h-1 bg-brand-gold rounded-full"></span> Direct from our Mill
                                </div>
                                <div className="flex items-center gap-3 text-sm text-brand-dark/80">
                                    <span className="w-1 h-1 bg-brand-gold rounded-full"></span> South Indian Heritage
                                </div>
                            </div>

                            {/* Verified Product Information Block */}
                            <div className="mt-8 space-y-8">
                                {product.about && (
                                    <div>
                                        <h3 className="heading-editorial text-2xl text-brand-primary mb-3">About this Product</h3>
                                        <p className="text-brand-dark/80 font-light leading-relaxed">{product.about}</p>
                                    </div>
                                )}

                                {product.ingredients && (
                                    <div>
                                        <h3 className="heading-editorial text-2xl text-brand-primary mb-3">Ingredients</h3>
                                        <p className="text-brand-dark/80 font-light leading-relaxed">{product.ingredients}</p>
                                    </div>
                                )}

                                {product.howToUse && (
                                    <div>
                                        <h3 className="heading-editorial text-2xl text-brand-primary mb-3">How to Use</h3>
                                        <p className="text-brand-dark/80 font-light leading-relaxed">{product.howToUse}</p>
                                    </div>
                                )}

                                {product.storageInstructions && (
                                    <div>
                                        <h3 className="heading-editorial text-2xl text-brand-primary mb-3">Storage Instruction</h3>
                                        <p className="text-brand-dark/80 font-light leading-relaxed">{product.storageInstructions}</p>
                                    </div>
                                )}

                                {product.packaging && (
                                    <div>
                                        <h3 className="heading-editorial text-2xl text-brand-primary mb-3">Packaging Details</h3>
                                        <p className="text-brand-dark/80 font-light leading-relaxed">{product.packaging}</p>
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
