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
                            <li><Link href="/" className="hover:text-[var(--color-brand-brown)]">Home</Link></li>
                            <li aria-hidden="true">/</li>
                            <li><Link href={`/${product.category}`} className="hover:text-[var(--color-brand-brown)]">{categoryLabel}</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-[var(--color-brand-emerald)] font-medium" aria-current="page">{product.name}</li>
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
                            <p className="text-xs uppercase tracking-widest text-[var(--color-brand-brass)] mb-2 font-semibold">
                                {categoryLabel}
                            </p>
                            <h1 className="text-3xl font-bold font-playfair text-[var(--color-brand-ink)] mb-3">{product.name}</h1>
                            <p className="text-[var(--color-brand-ink)]/70 mb-6 leading-relaxed bg-[var(--color-brand-beige)] p-4 border-l-4 border-[var(--color-brand-emerald)]">{product.shortDescription}</p>

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
                                                    ? "border-[var(--color-brand-emerald)] bg-[var(--color-brand-emerald)] text-white shadow-sm"
                                                    : v.available
                                                        ? "border-stone-200 text-stone-700 hover:border-[var(--color-brand-brown)] hover:text-[var(--color-brand-brown)]"
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
                                <div className="flex items-baseline gap-3 mb-8 pb-6 border-b border-stone-200">
                                    <span className="text-3xl font-bold font-playfair text-[var(--color-brand-emerald)]">{formatPrice(variant.sellingPrice)}</span>
                                    {variant.mrp > variant.sellingPrice && (
                                        <>
                                            <span className="text-lg text-stone-400 line-through">MRP {formatPrice(variant.mrp)}</span>
                                            {discount && (
                                                <span className="text-sm bg-[var(--color-brand-emerald)]/10 text-[var(--color-brand-emerald)] rounded-full px-3 py-1 font-bold">Save {discount}%</span>
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
                            <div className="mb-8">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={!variant?.available}
                                    className="w-full flex items-center justify-center gap-3 bg-[var(--color-brand-brown)] hover:bg-[var(--color-brand-brown-light)] hover:shadow-lg text-[var(--color-brand-beige)] py-4 rounded-md transition-all font-semibold disabled:opacity-40 text-lg"
                                >
                                    <ShoppingCart size={20} /> Add to Order
                                </button>
                                <p className="text-xs text-center text-stone-500 mt-3 flex items-center justify-center gap-1">
                                    <span className="text-[var(--color-brand-emerald)]">✓</span> Add to cart to place your secure order via WhatsApp
                                </p>
                            </div>

                            {/* Delivery info */}
                            <div className="bg-[var(--color-brand-emerald)]/5 border border-[var(--color-brand-emerald)]/10 rounded-md p-5 text-sm text-[var(--color-brand-ink)]/80 space-y-2.5 mb-8">
                                <p className="flex items-center gap-2"><span className="text-lg">🚚</span> <span>Standard delivery: <strong>₹50</strong> · <span className="text-[var(--color-brand-emerald)] font-semibold border-b border-[var(--color-brand-emerald)]/30">Free above ₹1,000</span></span></p>
                                <p className="flex items-center gap-2"><span className="text-lg">⏱</span> <span>Estimated delivery: <strong>2–4 working days</strong></span></p>
                                <p className="flex items-start gap-2"><span className="text-lg">📍</span> <span><span className="font-semibold">Coverage:</span> Tamil Nadu, Kerala, Karnataka, Andhra Pradesh & Telangana.</span></p>
                            </div>

                            {/* Product details */}
                            <div className="mt-8 space-y-3 text-sm text-[var(--color-brand-ink)]/80">
                                {product.description && product.description !== product.shortDescription && (
                                    <div className="mb-6">
                                        <h3 className="font-bold text-lg font-playfair text-[var(--color-brand-ink)] mb-2">More Information</h3>
                                        <p className="leading-relaxed">{product.description}</p>
                                    </div>
                                )}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-md border border-stone-100">
                                    {product.intendedUse && (
                                        <p><span className="font-semibold text-stone-700 block text-xs uppercase tracking-wider mb-1">Intended Use</span> {product.intendedUse}</p>
                                    )}
                                    {product.storageInstructions && (
                                        <p><span className="font-semibold text-stone-700 block text-xs uppercase tracking-wider mb-1">Storage</span> {product.storageInstructions}</p>
                                    )}
                                    {product.shelfLife && (
                                        <p><span className="font-semibold text-stone-700 block text-xs uppercase tracking-wider mb-1">Shelf Life</span> {product.shelfLife}</p>
                                    )}
                                    <p><span className="font-semibold text-stone-700 block text-xs uppercase tracking-wider mb-1">Pressed On</span> Freshly pressed every week</p>
                                    <p><span className="font-semibold text-stone-700 block text-xs uppercase tracking-wider mb-1">Best Before</span> 6 months from pressing</p>
                                    <p><span className="font-semibold text-stone-700 block text-xs uppercase tracking-wider mb-1">Brand</span> {product.brand}</p>
                                    <p><span className="font-semibold text-stone-700 block text-xs uppercase tracking-wider mb-1">FSSAI</span> {product.fssai}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
