"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { businessConfig } from "@/lib/config";

export default function ProductCard({ product }: { product: Product }) {
    const { addItem, openCart } = useCartStore();
    const [selectedVariantId, setSelectedVariantId] = useState(
        product.variants.length > 0 ? product.variants[0].id : null
    );

    const selectedVariant = product.variants.find((v) => v.id === selectedVariantId);

    // Check if price exists and is > 0
    const hasPrice = selectedVariant && selectedVariant.sellingPrice > 0;

    const handleAddToCart = () => {
        if (!selectedVariant) return;
        addItem({
            variantId: selectedVariant.id,
            productId: product.id,
            productName: product.name,
            variantName: selectedVariant.size,
            unitPrice: selectedVariant.sellingPrice,
            image: product.images[0] || "",
            quantity: 1,
            lineTotal: selectedVariant.sellingPrice * 1,
        });
        openCart();
    };

    return (
        <div className="group flex flex-col bg-brand-soft-cream border border-brand-heritage/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            {/* Image Box */}
            <Link href={`/shop/${product.slug}`} className="relative aspect-[4/3] w-full overflow-hidden bg-brand-beige/50 block">
                {product.images.length > 0 ? (
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-brand-heritage/30">
                        <span className="text-sm font-medium tracking-widest uppercase">Coming Soon</span>
                    </div>
                )}
                {/* Subtle gold line accent */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>

            <div className="p-6 flex flex-col flex-1">
                <Link href={`/shop/${product.slug}`}>
                    <h3 className="heading-editorial text-2xl text-brand-deep-green mb-2 group-hover:text-brand-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-sm text-brand-dark/70 line-clamp-2 mb-6 font-light leading-relaxed">
                    {product.shortDescription}
                </p>

                <div className="mt-auto space-y-5">
                    {/* Size Selector */}
                    {product.variants.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {product.variants.map((v) => (
                                <button
                                    key={v.id}
                                    onClick={() => setSelectedVariantId(v.id)}
                                    className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded border transition-colors ${selectedVariantId === v.id
                                        ? "border-brand-primary bg-brand-primary text-white"
                                        : "border-brand-heritage/20 text-brand-heritage hover:border-brand-primary"
                                        }`}
                                >
                                    {v.size}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Price Display */}
                    <div className="pt-2 border-t border-brand-heritage/10">
                        {hasPrice ? (
                            <div className="flex items-end gap-3">
                                <span className="text-xl font-semibold text-brand-dark">₹{selectedVariant.sellingPrice}</span>
                                {selectedVariant.mrp > selectedVariant.sellingPrice && (
                                    <span className="text-sm text-brand-dark/40 line-through mb-0.5">₹{selectedVariant.mrp}</span>
                                )}
                            </div>
                        ) : (
                            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">
                                Contact for Price
                            </span>
                        )}
                    </div>

                    {/* CTAs */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                        {hasPrice ? (
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-brand-beige text-brand-primary text-xs uppercase tracking-widest font-semibold py-3 rounded hover:bg-brand-heritage hover:text-white transition-colors border border-brand-heritage/10"
                            >
                                Add to Cart
                            </button>
                        ) : (
                            <Link
                                href={`/shop/${product.slug}`}
                                className="w-full text-center bg-brand-beige text-brand-primary text-xs uppercase tracking-widest font-semibold py-3 rounded hover:bg-brand-heritage hover:text-white transition-colors border border-brand-heritage/10"
                            >
                                View Details
                            </Link>
                        )}
                        <a
                            href={`https://wa.me/${businessConfig.whatsappNumber}?text=Hi, I am interested in ordering ${product.name}${selectedVariant ? ` (${selectedVariant.size})` : ''}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white text-xs uppercase tracking-widest font-semibold py-3 rounded transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
