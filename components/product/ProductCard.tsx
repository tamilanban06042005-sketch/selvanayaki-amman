"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { formatPrice, discountPercent } from "@/lib/utils";
import { buildSingleProductWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { ShoppingCart } from "lucide-react";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const [selectedVariantId, setSelectedVariantId] = useState(
        product.variants.find((v) => v.available)?.id ?? product.variants[0]?.id ?? ""
    );
    const { addItem } = useCartStore();

    const variant = product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];
    if (!variant) return null;

    const discount = discountPercent(variant.mrp, variant.sellingPrice);
    const productHref = `/${product.category}/${product.slug}`;
    const image = product.images[0] ?? "";

    const handleAddToCart = () => {
        track("add_to_cart", { productId: product.id, variantId: variant.id });
        addItem({
            productId: product.id,
            variantId: variant.id,
            productName: product.name,
            variantName: variant.size,
            unitPrice: variant.sellingPrice,
            quantity: 1,
            image,
            lineTotal: variant.sellingPrice,
        });
    };

    const whatsAppUrl = buildWhatsAppUrl(
        buildSingleProductWhatsAppMessage(product.name, variant.size)
    );

    return (
        <article className="bg-white rounded-xl border border-stone-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
            {/* Image */}
            <Link href={productHref} aria-label={`View ${product.name}`}>
                <div className="aspect-square bg-stone-50 overflow-hidden">
                    {image ? (
                        <Image
                            src={image}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-300 text-xs text-center p-4">
                            Product image coming soon
                        </div>
                    )}
                </div>
            </Link>

            {/* Info */}
            <div className="p-4 flex flex-col flex-1">
                <Link href={productHref}>
                    <h3 className="font-bold text-stone-800 text-sm mb-1 hover:text-amber-700 transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-xs text-stone-500 leading-relaxed mb-3 flex-1">{product.shortDescription}</p>

                {/* Variant selector */}
                {product.variants.length > 1 && (
                    <div className="mb-3">
                        <label htmlFor={`variant-${product.id}`} className="sr-only">Select size</label>
                        <select
                            id={`variant-${product.id}`}
                            value={selectedVariantId}
                            onChange={(e) => setSelectedVariantId(e.target.value)}
                            className="w-full text-xs border border-stone-200 rounded-md px-2 py-1.5 text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-700"
                        >
                            {product.variants.map((v) => (
                                <option key={v.id} value={v.id} disabled={!v.available}>
                                    {v.size}{!v.available ? " — Out of stock" : ""}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-base font-bold text-amber-700">{formatPrice(variant.sellingPrice)}</span>
                    {variant.mrp > variant.sellingPrice && (
                        <>
                            <span className="text-xs text-stone-400 line-through">{formatPrice(variant.mrp)}</span>
                            {discount && (
                                <span className="text-xs bg-amber-100 text-amber-800 rounded px-1 font-medium">{discount}% off</span>
                            )}
                        </>
                    )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <button
                        onClick={handleAddToCart}
                        disabled={!variant.available}
                        className="flex-1 flex items-center justify-center gap-1.5 text-xs bg-stone-800 hover:bg-amber-700 text-white py-2 rounded-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-medium"
                    >
                        <ShoppingCart size={13} />
                        Add to Cart
                    </button>
                    <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track("whatsapp_order_started")}
                        className="flex-1 text-center text-xs bg-green-700 hover:bg-green-600 text-white py-2 rounded-md transition-colors font-medium"
                        aria-label={`Order ${product.name} on WhatsApp`}
                    >
                        WhatsApp
                    </a>
                </div>
            </div>
        </article>
    );
}
