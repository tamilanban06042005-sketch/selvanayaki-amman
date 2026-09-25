"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { formatPrice, discountPercent } from "@/lib/utils";
import { buildSingleProductWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShoppingCart } from "lucide-react";

interface Props { product: Product; }

const CATEGORY_LABELS: Record<string, string> = {
    oils: "Oils",
    powders: "Food & Powders",
    "personal-care": "Personal Care",
};

export default function ProductPageClient({ product }: Props) {
    const [selectedVariantId, setSelectedVariantId] = useState(
        product.variants.find((v) => v.available)?.id ?? product.variants[0]?.id ?? ""
    );
    const [quantity, setQuantity] = useState(1);
    const { addItem } = useCartStore();

    const variant = product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];
    const discount = variant ? discountPercent(variant.mrp, variant.sellingPrice) : undefined;
    const image = product.images[0] ?? "";
    const categoryLabel = CATEGORY_LABELS[product.category] ?? product.category;

    const handleAddToCart = () => {
        if (!variant) return;
        track("add_to_cart", { productId: product.id, variantId: variant.id });
        addItem({
            productId: product.id,
            variantId: variant.id,
            productName: product.name,
            variantName: variant.size,
            unitPrice: variant.sellingPrice,
            quantity,
            image,
            lineTotal: variant.sellingPrice * quantity,
        });
    };

    const whatsAppUrl = variant
        ? buildWhatsAppUrl(buildSingleProductWhatsAppMessage(product.name, variant.size))
        : "#";

    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex flex-wrap items-center gap-2 text-xs text-stone-400">
                            <li><Link href="/" className="hover:text-amber-700">Home</Link></li>
                            <li aria-hidden="true">/</li>
                            <li><Link href={`/${product.category}`} className="hover:text-amber-700">{categoryLabel}</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-stone-600 font-medium" aria-current="page">{product.name}</li>
                        </ol>
                    </nav>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Image gallery */}
                        <div>
                            <div className="aspect-square bg-white rounded-xl border border-stone-100 overflow-hidden shadow-sm">
                                {image ? (
                                    <Image
                                        src={image}
                                        alt={product.name}
                                        width={600}
                                        height={600}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-stone-300 text-sm">
                                        Product image coming soon
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Info */}
                        <div>
                            <p className="text-xs uppercase tracking-widest text-amber-700 mb-2 font-semibold">
                                {categoryLabel}
                            </p>
                            <h1 className="text-3xl font-bold text-stone-800 mb-2">{product.name}</h1>
                            <p className="text-stone-500 mb-6 leading-relaxed">{product.shortDescription}</p>

                            {/* Variant selector */}
                            {product.variants.length > 1 && (
                                <div className="mb-4">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Select Size</p>
                                    <div className="flex flex-wrap gap-2">
                                        {product.variants.map((v) => (
                                            <button
                                                key={v.id}
                                                onClick={() => setSelectedVariantId(v.id)}
                                                disabled={!v.available}
                                                className={`px-4 py-2 text-sm rounded-md border transition-colors ${selectedVariantId === v.id
                                                        ? "border-amber-700 bg-amber-700 text-white"
                                                        : v.available
                                                            ? "border-stone-200 text-stone-700 hover:border-amber-700"
                                                            : "border-stone-100 text-stone-300 cursor-not-allowed"
                                                    }`}
                                                aria-pressed={selectedVariantId === v.id}
                                            >
                                                {v.size}
                                                {!v.available && " (Out of stock)"}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Price */}
                            {variant && (
                                <div className="flex items-baseline gap-3 mb-6">
                                    <span className="text-3xl font-bold text-amber-700">{formatPrice(variant.sellingPrice)}</span>
                                    {variant.mrp > variant.sellingPrice && (
                                        <>
                                            <span className="text-lg text-stone-400 line-through">MRP {formatPrice(variant.mrp)}</span>
                                            {discount && (
                                                <span className="text-sm bg-amber-100 text-amber-800 rounded px-2 py-0.5 font-bold">{discount}% off</span>
                                            )}
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Quantity */}
                            <div className="mb-6">
                                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">Quantity</p>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                        className="w-8 h-8 border border-stone-200 rounded-md flex items-center justify-center hover:bg-stone-50"
                                        aria-label="Decrease quantity"
                                        disabled={quantity <= 1}
                                    >−</button>
                                    <span className="w-8 text-center font-semibold">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                                        className="w-8 h-8 border border-stone-200 rounded-md flex items-center justify-center hover:bg-stone-50"
                                        aria-label="Increase quantity"
                                        disabled={quantity >= 99}
                                    >+</button>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!variant?.available}
                                    className="flex-1 flex items-center justify-center gap-2 bg-stone-800 hover:bg-amber-700 text-white py-3 rounded-md transition-colors font-semibold disabled:opacity-40"
                                >
                                    <ShoppingCart size={16} /> Add to Cart
                                </button>
                                <a
                                    href={whatsAppUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => track("whatsapp_order_started")}
                                    className="flex-1 text-center bg-green-700 hover:bg-green-600 text-white py-3 rounded-md transition-colors font-semibold"
                                >
                                    Order on WhatsApp
                                </a>
                            </div>

                            {/* Delivery info */}
                            <div className="bg-stone-50 border border-stone-100 rounded-md p-4 text-sm text-stone-600 space-y-1">
                                <p>🚚 Standard delivery: <strong>₹50</strong> · Free above ₹1,000</p>
                                <p>⏱ Estimated delivery: <strong>2–4 working days</strong></p>
                                <p>📞 Questions? <a href="tel:+917708039583" className="text-amber-700 underline">+91 7708039583</a></p>
                            </div>

                            {/* Product details */}
                            <div className="mt-6 space-y-3 text-sm text-stone-600">
                                {product.description && product.description !== product.shortDescription && (
                                    <div>
                                        <p className="font-semibold text-stone-800 mb-1">About</p>
                                        <p className="leading-relaxed">{product.description}</p>
                                    </div>
                                )}
                                {product.intendedUse && (
                                    <p><span className="font-semibold text-stone-700">Intended Use:</span> {product.intendedUse}</p>
                                )}
                                {product.storageInstructions && (
                                    <p><span className="font-semibold text-stone-700">Storage:</span> {product.storageInstructions}</p>
                                )}
                                {product.shelfLife && (
                                    <p><span className="font-semibold text-stone-700">Shelf Life:</span> {product.shelfLife}</p>
                                )}
                                <p><span className="font-semibold text-stone-700">Brand:</span> {product.brand}</p>
                                <p><span className="font-semibold text-stone-700">Manufacturer:</span> {product.manufacturer}</p>
                                <p><span className="font-semibold text-stone-700">FSSAI:</span> {product.fssai}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
