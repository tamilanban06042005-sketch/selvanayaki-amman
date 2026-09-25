"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, ProductVariant } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { buildSingleProductWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { formatPrice } from "@/lib/utils";
import { Plus, Check, ChevronDown } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
    const [selectedVariantId, setSelectedVariantId] = useState<string>(product.variants[0].id);
    const addItem = useCartStore((state) => state.addItem);
    const openCart = useCartStore((state) => state.openCart);
    const [added, setAdded] = useState(false);

    const selectedVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

    const handleAddToCart = () => {
        addItem({
            productId: product.id,
            variantId: selectedVariant.id,
            productName: product.name,
            variantName: selectedVariant.size,
            quantity: 1,
            unitPrice: selectedVariant.sellingPrice,
            image: product.images?.[0] || "",
            lineTotal: selectedVariant.sellingPrice * 1,
        });
        setAdded(true);
        openCart();
        setTimeout(() => setAdded(false), 2000);
    };

    const handleWhatsAppOrder = () => {
        const message = buildSingleProductWhatsAppMessage(
            product.name,
            selectedVariant.size
        );
        const url = buildWhatsAppUrl(message);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const hasDiscount = selectedVariant.mrp > selectedVariant.sellingPrice;

    return (
        <div className="group bg-white rounded-2xl border border-brand-terracotta/10 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative">
            <Link href={`/${product.category}/${product.slug}`} className="block relative aspect-[4/3] bg-brand-cream-dark overflow-hidden">
                {product.images?.[0] ? (
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-brand-ink/30 text-sm">
                        No Image
                    </div>
                )}
                <div className="absolute inset-0 bg-brand-ink/5 mix-blend-multiply group-hover:bg-transparent transition-colors z-10" />
            </Link>

            <div className="p-6 flex flex-col flex-grow bg-white">
                <Link href={`/${product.category}/${product.slug}`} className="block mb-2 mt-2">
                    <h3 className="text-xl font-bold font-playfair text-brand-ink group-hover:text-brand-terracotta transition-colors line-clamp-1">{product.name}</h3>
                </Link>
                <p className="text-sm text-brand-ink/60 line-clamp-2 mb-6 flex-grow">{product.shortDescription}</p>

                {/* Variant Selector */}
                <div className="relative mb-4">
                    <select
                        value={selectedVariantId}
                        onChange={(e) => setSelectedVariantId(e.target.value)}
                        className="w-full appearance-none bg-brand-cream-dark/30 border border-brand-cream-dark text-brand-ink font-medium text-sm rounded-md pl-4 pr-10 py-3 focus:outline-none focus:ring-1 focus:ring-brand-terracotta transition-shadow cursor-pointer"
                        aria-label="Select size"
                    >
                        {product.variants.map((v) => (
                            <option key={v.id} value={v.id}>
                                {v.size} {v.mrp > v.sellingPrice ? `- Save ${formatPrice(v.mrp - v.sellingPrice)}` : ''}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-brand-ink/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Pricing */}
                <div className="flex items-end gap-3 mb-6">
                    <span className="text-2xl font-bold text-brand-ink font-playfair">
                        {formatPrice(selectedVariant.sellingPrice)}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-brand-ink/40 line-through mb-1">
                            {formatPrice(selectedVariant.mrp)}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="mt-auto space-y-2">
                    <button
                        onClick={handleAddToCart}
                        className="w-full group/btn flex items-center justify-center gap-2 bg-brand-terracotta hover:bg-brand-terracotta-dark text-white rounded-md py-3 font-medium transition-colors text-sm shadow-sm"
                    >
                        {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        {added ? "Added to Cart" : "Add to Cart"}
                    </button>

                    <button
                        onClick={handleWhatsAppOrder}
                        className="w-full flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white rounded-md py-3 font-medium transition-colors text-sm shadow-sm"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Order on WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}
