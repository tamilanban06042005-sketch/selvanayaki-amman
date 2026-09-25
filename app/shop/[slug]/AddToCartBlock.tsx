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
        <div className="bg-white p-6 md:p-8 rounded border border-[#4A3930]/10 shadow-sm font-inter">
            {product.variants.length > 0 ? (
                <>
                    {/* Size Selector */}
                    <div className="mb-8">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930] mb-4">Select Size / Volume</h4>
                        <div className="flex flex-wrap gap-3">
                            {product.variants.map((v) => (
                                <button
                                    key={v.id}
                                    onClick={() => setSelectedVariantId(v.id)}
                                    className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest rounded-sm border transition-all ${selectedVariantId === v.id
                                        ? "border-[#183921] bg-[#183921] text-white"
                                        : "border-[#4A3930]/20 text-[#4A3930] hover:border-[#183921] bg-transparent"
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
                            <div className="flex items-end gap-4 mb-2 border-b border-[#4A3930]/10 pb-6">
                                <span className="text-4xl font-playfair font-bold text-[#4A3930]">
                                    ₹{selectedVariant.sellingPrice}
                                </span>
                                {selectedVariant.mrp > selectedVariant.sellingPrice && (
                                    <span className="text-lg text-[#4A3930]/40 line-through mb-1">
                                        ₹{selectedVariant.mrp}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <div className="mb-2 border-b border-[#4A3930]/10 pb-6">
                                <span className="text-base font-bold uppercase tracking-widest text-[#4A3930]/60">
                                    Contact for pricing and availability
                                </span>
                            </div>
                        )}

                        {hasPrice && (
                            <div className="flex items-center gap-6">
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930]">Quantity</h4>
                                <div className="flex items-center bg-white border border-[#4A3930]/20 rounded-sm">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center text-[#4A3930] hover:bg-[#F9F7F2] transition-colors border-r border-[#4A3930]/20"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-16 h-10 text-center text-[#4A3930] bg-transparent border-none focus:ring-0 font-medium text-sm"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center text-[#4A3930] hover:bg-[#F9F7F2] transition-colors border-l border-[#4A3930]/20"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col gap-3 mt-2">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to order ${quantity}x ${product.name}${selectedVariant ? ` (${selectedVariant.size})` : ''}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-[#183921] hover:bg-[#112918] text-white text-[10px] uppercase tracking-[0.2em] font-semibold py-4 rounded-full transition-all"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                </svg>
                                Order on WhatsApp
                            </a>
                        </div>
                    </div>
                </>
            ) : (
                <div className="py-8 text-center border-t border-[#4A3930]/10 mt-6 pt-6">
                    <h3 className="text-xl font-playfair font-semibold text-[#4A3930] mb-4">Product Details Coming Soon</h3>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Hi, I would like to know more about ${product.name}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-[#183921] hover:bg-[#112918] text-white text-[10px] uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded-full transition-all mt-4"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                        </svg>
                        Inquire on WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}
