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
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#4A281B]/10 shadow-[0_4px_16px_rgba(74,40,27,0.03)]">
            {product.variants.length > 0 ? (
                <>
                    {/* Size Selector */}
                    <div className="mb-8">
                        <h4 className="label-caps text-[#2B1812] mb-3">Select Size</h4>
                        <div className="flex flex-wrap gap-2.5">
                            {product.variants.map((v) => (
                                <button
                                    key={v.id}
                                    onClick={() => setSelectedVariantId(v.id)}
                                    aria-pressed={selectedVariantId === v.id}
                                    className={`px-5 py-3 text-[10px] uppercase font-semibold tracking-wider rounded-lg border transition-all ${selectedVariantId === v.id
                                            ? "border-[#164A32] bg-[#164A32] text-[#F7F1E5]"
                                            : "border-[#4A281B]/20 text-[#2B1812]/70 hover:border-[#4A281B]/60 bg-transparent"
                                        }`}
                                >
                                    {v.size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Pricing & Quantity */}
                    <div className="flex flex-col gap-6">
                        {hasPrice ? (
                            <div className="flex items-end gap-4 border-b border-[#4A281B]/10 pb-6">
                                <span className="font-cormorant font-bold text-4xl text-[#164A32]">
                                    ₹{selectedVariant.sellingPrice}
                                </span>
                                {selectedVariant.mrp != null && selectedVariant.mrp > selectedVariant.sellingPrice && (
                                    <span className="text-lg text-[#2B1812]/30 line-through mb-1">
                                        ₹{selectedVariant.mrp}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div className="border-b border-[#4A281B]/10 pb-6">
                                <span className="label-caps text-[#2B1812]/50">
                                    Contact for pricing and availability
                                </span>
                            </div>
                        )}

                        {hasPrice && (
                            <div className="flex items-center justify-between">
                                <h4 className="label-caps text-[#2B1812]">Quantity</h4>
                                <div className="flex items-center bg-white border border-[#4A281B]/20 rounded-lg">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center text-[#2B1812] hover:bg-[#F7F1E5] transition-colors border-r border-[#4A281B]/10 rounded-l-lg"
                                        aria-label="Decrease quantity"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-14 h-10 text-center text-[#2B1812] bg-transparent border-none focus:ring-0 font-inter font-semibold text-sm"
                                        aria-label="Quantity"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center text-[#2B1812] hover:bg-[#F7F1E5] transition-colors border-l border-[#4A281B]/10 rounded-r-lg"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* CTAs */}
                        <div className="mt-2">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                                    `Hi, I would like to order ${quantity}x ${product.name}${selectedVariant ? ` (${selectedVariant.size})` : ""
                                    }.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp w-full justify-center py-4 text-[10px]"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Order on WhatsApp
                            </a>
                            <p className="text-center mt-3 text-[9px] uppercase tracking-wider text-[#2B1812]/50 font-semibold">
                                Orders fulfilled directly by the mill
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="py-6 text-center border-t border-[#4A281B]/10 mt-2">
                    <h3 className="font-cormorant font-semibold text-xl text-[#2B1812] mb-4">
                        Product Details Coming Soon
                    </h3>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Hi, I would like to know more about ${product.name}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp py-3 px-6 justify-center text-[10px]"
                    >
                        Inquire on WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}
