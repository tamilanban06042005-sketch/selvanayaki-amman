"use client";

import { useState } from "react";
import { Product } from "@/types/product";

export default function AddToCartBlock({ product, whatsappNumber }: { product: Product; whatsappNumber: string }) {
    const [selectedVariantId, setSelectedVariantId] = useState(
        product.variants.length > 0 ? product.variants[0].id : null
    );
    const [quantity, setQuantity] = useState(1);

    const selectedVariant = product.variants.find((v) => v.id === selectedVariantId);
    const hasPrice = selectedVariant && selectedVariant.sellingPrice > 0;

    return (
        <div className="flex flex-col">
            {product.variants.length > 0 ? (
                <>
                    {/* Size Selector */}
                    <div className="mb-8">
                        <h4 className="font-inter font-bold text-[10px] text-[#2B1812]/50 tracking-widest uppercase mb-4">Select Size</h4>
                        <div className="flex flex-wrap gap-3">
                            {product.variants.map((v) => {
                                const isSelected = selectedVariantId === v.id;
                                return (
                                    <button
                                        key={v.id}
                                        onClick={() => setSelectedVariantId(v.id)}
                                        aria-pressed={isSelected}
                                        className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all border ${isSelected
                                            ? "border-[#164A32] bg-[#164A32] text-[#F3EFE6] shadow-md shadow-[#164A32]/20"
                                            : "border-[#2B1812]/10 text-[#2B1812]/80 hover:border-[#164A32] hover:text-[#164A32] bg-white shadow-sm"
                                            }`}
                                    >
                                        {v.size}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex flex-col gap-1 mb-8">
                        {hasPrice ? (
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="font-cormorant font-bold text-4xl text-[#164A32]">
                                        ₹{selectedVariant.sellingPrice}
                                    </span>
                                    {selectedVariant.mrp != null && selectedVariant.mrp > selectedVariant.sellingPrice && (
                                        <span className="text-lg text-[#2B1812]/40 line-through font-cormorant italic font-semibold">
                                            ₹{selectedVariant.mrp}
                                        </span>
                                    )}
                                </div>
                                <p className="text-[10px] text-[#2B1812]/50 mt-1 uppercase tracking-widest font-bold">Inclusive of all taxes</p>
                            </div>
                        ) : (
                            <div>
                                <span className="font-inter font-bold text-[10px] text-[#2B1812]/50 tracking-widest uppercase">
                                    Contact for pricing and availability
                                </span>
                            </div>
                        )}
                    </div>

                    {hasPrice && (
                        <div className="flex items-center gap-6 mb-8">
                            <h4 className="font-inter font-bold text-[10px] text-[#2B1812]/50 tracking-widest uppercase">Quantity</h4>
                            <div className="flex items-center bg-white border border-[#2B1812]/10 rounded-full w-28 h-10 shadow-sm overflow-hidden">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-full flex items-center justify-center text-[#2B1812] hover:bg-[#F3EFE6] transition-colors hover:text-[#164A32]"
                                    aria-label="Decrease quantity"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="flex-1 h-full text-center text-[#2B1812] bg-transparent border-none focus:ring-0 font-inter font-semibold text-sm p-0 m-0 w-full"
                                    aria-label="Quantity"
                                />
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-10 h-full flex items-center justify-center text-[#2B1812] hover:bg-[#F3EFE6] transition-colors hover:text-[#164A32]"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}

                    {/* CTAs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <button className="w-full bg-white border border-[#2B1812]/10 text-[#2B1812] py-3.5 rounded-full hover:border-[#164A32] hover:text-[#164A32] transition-colors text-xs font-bold tracking-widest uppercase shadow-sm">
                            Add to Cart
                        </button>
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                `Hi, I would like to order ${quantity}x ${product.name}${selectedVariant ? ` (${selectedVariant.size})` : ""
                                }.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 bg-[#123A25] border border-[#123A25] text-[#F3EFE6] py-3.5 rounded-full hover:bg-[#1C1613] hover:border-[#1C1613] transition-colors text-xs font-bold tracking-widest uppercase shadow-md shadow-[#123A25]/20"
                        >
                            <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Order on WhatsApp
                        </a>
                    </div>
                </>
            ) : (
                <div className="text-center mt-2">
                    <h3 className="font-semibold text-lg text-[#2B1812] mb-4">
                        Product Details Coming Soon
                    </h3>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Hi, I would like to know more about ${product.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#123A25] border border-[#123A25] text-[#F3EFE6] py-3.5 px-6 rounded-full hover:bg-[#1C1613] hover:border-[#1C1613] transition-colors text-xs font-bold tracking-widest uppercase shadow-md"
                    >
                        Inquire on WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}

