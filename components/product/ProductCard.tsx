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

    const hasDiscount = selectedVariant.mrp > selectedVariant.sellingPrice;

    return (
        <div className="group bg-white rounded-2xl border border-brand-brown/10 overflow-hidden shadow-md hover:shadow-[0_20px_40px_-5px_rgba(74,48,24,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative">
            <Link href={`/${product.category}/${product.slug}`} className="block relative aspect-[4/3] bg-brand-beige-dark overflow-hidden">
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
                    <h3 className="text-xl font-bold font-playfair text-brand-ink group-hover:text-brand-brown transition-colors line-clamp-1">{product.name}</h3>
                </Link>
                <p className="text-sm text-brand-ink/60 line-clamp-2 mb-6 flex-grow">{product.shortDescription}</p>

                {/* Variant Selector */}
                <div className="relative mb-4">
                    <select
                        value={selectedVariantId}
                        onChange={(e) => setSelectedVariantId(e.target.value)}
                        className="w-full appearance-none bg-brand-beige-dark/30 border border-brand-beige-dark text-brand-ink font-medium text-sm rounded-md pl-4 pr-10 py-3 focus:outline-none focus:ring-1 focus:ring-brand-emerald transition-shadow cursor-pointer"
                        aria-label="Select size"
                    >
                        {product.variants.map((v) => (
                            <option key={v.id} value={v.id}>
                                {v.size}
                            </option>
                        ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-brand-ink/50 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Pricing */}
                <div className="flex items-end gap-3 mb-6">
                    <span className="text-2xl font-bold text-brand-emerald font-playfair">
                        {formatPrice(selectedVariant.sellingPrice)}
                    </span>
                    {hasDiscount && (
                        <span className="text-sm text-brand-ink/40 line-through mb-1">
                            {formatPrice(selectedVariant.mrp)}
                        </span>
                    )}
                    {hasDiscount && (
                        <span className="ml-auto bg-brand-emerald/10 text-brand-emerald text-xs font-bold px-2.5 py-1 rounded-full">
                            Save {formatPrice(selectedVariant.mrp - selectedVariant.sellingPrice)}
                        </span>
                    )}
                </div>

                {/* Actions */}
                <div className="mt-auto">
                    <button
                        onClick={handleAddToCart}
                        className="w-full group/btn flex items-center justify-center gap-2 bg-brand-brown hover:bg-brand-brown-light text-white rounded-md py-3 font-medium transition-colors text-sm shadow-sm"
                    >
                        {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        {added ? "Added to Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}
