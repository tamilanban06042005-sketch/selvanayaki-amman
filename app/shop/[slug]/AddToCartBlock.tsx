"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

export default function AddToCartBlock({ product, whatsappNumber }: { product: Product; whatsappNumber: string }) {
    const { addItem, openCart } = useCartStore();
    const [selectedVariantId, setSelectedVariantId] = useState(
        product.variants.length > 0 ? product.variants[0].id : null
    );
    const [quantity, setQuantity] = useState(1);

    const selectedVariant = product.variants.find((v) => v.id === selectedVariantId);
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
            quantity: quantity,
            lineTotal: selectedVariant.sellingPrice * quantity,
        });
        openCart();
    };

    return (
        <div className="bg-brand-ivory p-6 md:p-8 rounded-md border border-brand-heritage/20">
            {product.variants.length > 0 ? (
                <>
                    {/* Size Selector */}
                    <div className="mb-8">
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-primary mb-4">Select Size</h4>
                        <div className="flex flex-wrap gap-4">
                            {product.variants.map((v) => (
                                <button
                                    key={v.id}
                                    onClick={() => setSelectedVariantId(v.id)}
                                    className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wider rounded border transition-all ${selectedVariantId === v.id
                                        ? "border-brand-primary bg-brand-primary text-white shadow-md transform scale-[1.02]"
                                        : "border-brand-heritage/30 text-brand-dark hover:border-brand-primary bg-brand-soft-cream"
                                        }`}
                                >
                                    {v.size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price & Quantity & Actions */}
                    <div className="flex flex-col gap-6">
                        {hasPrice ? (
                            <div className="flex items-end gap-4 mb-2">
                                <span className="text-4xl heading-editorial font-bold text-brand-deep-green">
                                    ₹{selectedVariant.sellingPrice}
                                </span>
                                {selectedVariant.mrp > selectedVariant.sellingPrice && (
                                    <span className="text-lg text-brand-dark/40 line-through mb-1">
                                        ₹{selectedVariant.mrp}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div className="mb-2">
                                <span className="text-xl font-semibold uppercase tracking-widest text-brand-gold">
                                    Contact for pricing and availability
                                </span>
                            </div>
                        )}

                        {hasPrice && (
                            <div className="flex items-center gap-4">
                                <h4 className="text-sm font-semibold uppercase tracking-widest text-brand-primary">Quantity:</h4>
                                <div className="flex items-center bg-brand-soft-cream border border-brand-heritage/20 rounded">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center text-brand-dark hover:bg-brand-heritage hover:text-white transition-colors border-r border-brand-heritage/20"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-16 h-10 text-center text-brand-dark bg-transparent border-none focus:ring-0 font-medium"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center text-brand-dark hover:bg-brand-heritage hover:text-white transition-colors border-l border-brand-heritage/20"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {hasPrice && (
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full bg-brand-beige text-brand-primary text-sm uppercase tracking-widest font-bold py-4 rounded hover:bg-brand-heritage hover:text-white transition-colors border border-brand-heritage/10"
                                >
                                    Add to Cart
                                </button>
                            )}
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to order ${quantity}x ${product.name}${selectedVariant ? ` (${selectedVariant.size})` : ''}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white text-sm uppercase tracking-widest font-bold py-4 rounded transition-all shadow-md ${!hasPrice ? "col-span-1 md:col-span-2" : ""}`}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                </svg>
                                Order on WhatsApp
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                <div className="py-8 text-center">
                    <h3 className="heading-editorial text-2xl text-brand-dark mb-4">Product Details Coming Soon</h3>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to know more about ${product.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5A] text-white text-sm uppercase tracking-widest font-bold py-4 px-8 rounded transition-all shadow-md mt-4"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                        </svg>
                        Inquire on WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}
