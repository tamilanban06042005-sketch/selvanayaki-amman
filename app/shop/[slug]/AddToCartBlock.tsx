"use client";
import { useState } from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";

export default function AddToCartBlock({
    product,
    whatsappNumber,
}: {
    product: Product;
    whatsappNumber: string;
}) {
    const [selectedVariantId, setSelectedVariantId] = useState(
        product.variants.length > 0 ? product.variants[0].id : null
    );
    const [quantity, setQuantity] = useState(1);
    const [addedFeedback, setAddedFeedback] = useState(false);
    const addItem = useCartStore((s) => s.addItem);

    const selectedVariant = product.variants.find((v) => v.id === selectedVariantId);
    const hasPrice = selectedVariant && selectedVariant.sellingPrice > 0;
    const mrp = selectedVariant?.mrp ?? 0;
    const sellingPrice = selectedVariant?.sellingPrice ?? 0;
    const savings = mrp > sellingPrice ? mrp - sellingPrice : 0;
    const discountPct = mrp > 0 && savings > 0 ? Math.round((savings / mrp) * 100) : 0;

    const whatsappMsg = `Hi, I would like to order ${quantity}x ${product.name}${selectedVariant ? ` (${selectedVariant.size})` : ""}.`;
    const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

    function handleAddToCart() {
        if (!selectedVariant) return;
        addItem({
            productId: product.id,
            variantId: selectedVariant.id,
            productName: product.name,
            variantName: selectedVariant.size,
            unitPrice: selectedVariant.sellingPrice,
            quantity,
            image: product.images[0],
            lineTotal: selectedVariant.sellingPrice * quantity,
        });
        setAddedFeedback(true);
        setTimeout(() => setAddedFeedback(false), 2200);
    }

    if (product.variants.length === 0) {
        return (
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#164A32] text-[#F7F1E5] py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.15em] uppercase hover:bg-[#1a573b] transition-all shadow-md">
                Enquire on WhatsApp
            </a>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            {/* Size selector */}
            <div>
                <p className="font-inter text-[10px] font-bold tracking-[0.18em] uppercase text-[#2B1812]/50 mb-2">Select Size</p>
                <div className="flex flex-wrap gap-2.5">
                    {product.variants.map((v) => {
                        const isSelected = selectedVariantId === v.id;
                        return (
                            <button
                                key={v.id}
                                onClick={() => setSelectedVariantId(v.id)}
                                aria-pressed={isSelected}
                                className={`flex flex-col items-center px-4 py-2.5 rounded-xl border transition-all focus-visible:outline-2 focus-visible:outline-[#B88745] ${isSelected
                                        ? "border-[#164A32] bg-white shadow-md text-[#164A32]"
                                        : "border-[#2B1812]/10 bg-white/60 text-[#2B1812]/70 hover:border-[#164A32]/30"
                                    }`}
                            >
                                <span className="font-inter text-[10px] font-semibold tracking-wider uppercase">{v.size}</span>
                                <span className={`font-cormorant font-bold text-lg leading-tight ${isSelected ? "text-[#164A32]" : "text-[#2B1812]"}`}>₹{v.sellingPrice}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Price banner */}
            {hasPrice && (
                <div className="flex items-center gap-4 bg-[#F9F5EC] border border-[#B88745]/20 rounded-xl px-5 py-3">
                    <div>
                        <p className="font-inter text-[9px] text-[#2B1812]/40 uppercase tracking-wider">Price</p>
                        <p className="font-cormorant font-bold text-3xl text-[#164A32] leading-none">₹{sellingPrice}</p>
                    </div>
                    {mrp > 0 && mrp > sellingPrice && (
                        <>
                            <div>
                                <p className="font-inter text-[9px] text-[#2B1812]/40 uppercase tracking-wider">MRP</p>
                                <p className="font-cormorant text-xl text-[#2B1812]/40 line-through leading-none">₹{mrp}</p>
                            </div>
                            <div className="ml-auto bg-[#164A32]/10 border border-[#164A32]/20 px-3 py-1.5 rounded-lg text-center">
                                <p className="font-inter text-[8px] text-[#164A32] uppercase tracking-wider font-bold">Save</p>
                                <p className="font-cormorant font-bold text-lg text-[#164A32] leading-none">{discountPct}%</p>
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Quantity + Add to Cart */}
            {hasPrice && (
                <div className="flex items-stretch gap-3">
                    <div className="flex items-center bg-white border border-[#2B1812]/10 rounded-xl overflow-hidden shadow-sm">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-12 flex items-center justify-center text-[#2B1812] hover:bg-[#F3EFE6] transition-colors font-bold text-lg" aria-label="Decrease quantity">−</button>
                        <span className="w-8 text-center font-inter font-bold text-sm text-[#2B1812] select-none">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-12 flex items-center justify-center text-[#2B1812] hover:bg-[#F3EFE6] transition-colors font-bold text-lg" aria-label="Increase quantity">+</button>
                    </div>
                    <button
                        onClick={handleAddToCart}
                        className={`flex-1 h-12 rounded-xl font-inter font-bold text-[11px] tracking-[0.12em] uppercase flex items-center justify-center gap-2 transition-all ${addedFeedback ? "bg-[#164A32]/80 text-[#F7F1E5] scale-95" : "bg-[#164A32] text-[#F7F1E5] hover:bg-[#1a573b] shadow-md hover:shadow-lg active:scale-95"
                            }`}
                        aria-live="polite"
                    >
                        {addedFeedback ? (
                            <><svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg> Added!</>
                        ) : (
                            <><svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg> Add to Cart</>
                        )}
                    </button>
                </div>
            )}

            {/* WhatsApp */}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 border-2 border-[#164A32] text-[#164A32] py-3.5 rounded-xl font-inter font-bold text-[11px] tracking-[0.12em] uppercase hover:bg-[#164A32] hover:text-[#F7F1E5] transition-all"
            >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Order on WhatsApp
            </a>
        </div>
    );
}
