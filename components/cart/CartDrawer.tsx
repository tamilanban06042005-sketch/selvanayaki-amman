"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { shippingConfig } from "@/lib/shipping";
import { buildWhatsAppOrderMessage, buildWhatsAppUrl, openWhatsApp } from "@/lib/whatsapp";
import { calculateShipping } from "@/lib/shipping";
import { track } from "@/lib/analytics";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
    const { items, summary, isOpen, closeCart, updateQuantity, removeItem } = useCartStore();
    const router = useRouter();

    // Prevent body scroll when drawer open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleWhatsApp = () => {
        if (items.length === 0) return;
        const shipping = calculateShipping(summary.subtotal);
        track("whatsapp_order_started");
        const result = openWhatsApp({ items, shipping, subtotal: summary.subtotal, total: summary.total });
        closeCart();
        router.push("/thank-you-whatsapp");
        if (!result.success) {
            // Handled on thank-you page
        }
    };

    const remaining = shippingConfig.freeShippingThreshold - summary.subtotal;

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
                    onClick={closeCart}
                    aria-hidden="true"
                />
            )}

            {/* Drawer */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
                className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
                    <h2 className="font-bold text-stone-800 flex items-center gap-2 font-playfair tracking-wide">
                        <ShoppingCart size={18} /> Cart
                        {summary.itemCount > 0 && (
                            <span className="text-xs bg-[var(--color-brand-brown)] text-white rounded-full px-2 py-0.5">{summary.itemCount}</span>
                        )}
                    </h2>
                    <button
                        onClick={closeCart}
                        aria-label="Close cart"
                        className="p-1 text-stone-500 hover:text-[var(--color-brand-brown)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-brown)] rounded"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Free shipping bar */}
                {summary.subtotal > 0 && !summary.freeShipping && (
                    <div className="bg-[var(--color-brand-emerald)]/10 border-b border-[var(--color-brand-emerald)]/20 px-5 py-3 relative overflow-hidden">
                        <div className="absolute left-0 bottom-0 h-1 bg-[var(--color-brand-emerald)]/30 transition-all" style={{ width: `${Math.min(100, (summary.subtotal / shippingConfig.freeShippingThreshold) * 100)}%` }} />
                        <p className="text-xs text-[var(--color-brand-emerald)]">
                            Add <strong className="font-semibold">{formatPrice(remaining)}</strong> more for free delivery
                        </p>
                    </div>
                )}
                {summary.freeShipping && (
                    <div className="bg-[var(--color-brand-emerald)] border-b border-[var(--color-brand-emerald-light)] px-5 py-3">
                        <p className="text-xs text-[var(--color-brand-beige)] font-medium tracking-wide">🎉 You qualify for free delivery!</p>
                    </div>
                )}

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-5 py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                            <ShoppingCart size={40} className="text-stone-200" />
                            <p className="text-stone-500">Your cart is empty.</p>
                            <Link
                                href="/shop"
                                onClick={closeCart}
                                className="text-sm font-medium text-[var(--color-brand-brown)] underline hover:text-[var(--color-brand-brown-light)]"
                            >
                                Shop Products →
                            </Link>
                        </div>
                    ) : (
                        <ul className="space-y-4" role="list">
                            {items.map((item) => (
                                <li key={`${item.productId}-${item.variantId}`} className="flex gap-3">
                                    {/* Image */}
                                    <div className="w-16 h-16 rounded-md overflow-hidden bg-stone-100 flex-shrink-0">
                                        {item.image ? (
                                            <Image src={item.image} alt={item.productName} width={64} height={64} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-stone-300 text-[10px] text-center p-1">No image</div>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-[var(--color-brand-ink)] truncate font-playfair">{item.productName}</p>
                                        <p className="text-xs text-stone-500">{item.variantName}</p>
                                        <p className="text-sm font-bold text-[var(--color-brand-emerald)] mt-0.5">{formatPrice(item.lineTotal)}</p>
                                        {/* Qty + Remove */}
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                                                aria-label="Decrease quantity"
                                                disabled={item.quantity <= 1}
                                                className="p-0.5 border border-stone-200 rounded hover:bg-stone-50 disabled:opacity-30 transition-colors"
                                            >
                                                <Minus size={12} />
                                            </button>
                                            <span className="text-sm w-5 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                                                aria-label="Increase quantity"
                                                disabled={item.quantity >= 99}
                                                className="p-0.5 border border-stone-200 rounded hover:bg-stone-50 disabled:opacity-30 transition-colors"
                                            >
                                                <Plus size={12} />
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.productId, item.variantId)}
                                                aria-label={`Remove ${item.productName}`}
                                                className="ml-2 text-stone-400 hover:text-red-600 transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer totals + CTA */}
                {items.length > 0 && (
                    <div className="border-t border-stone-100 px-5 py-4 space-y-3">
                        <div className="space-y-1 text-sm">
                            <div className="flex justify-between text-stone-600">
                                <span>Subtotal</span><span>{formatPrice(summary.subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-stone-600">
                                <span>Delivery</span>
                                <span>{summary.freeShipping ? <span className="text-[var(--color-brand-emerald)] font-medium">Free</span> : formatPrice(summary.shippingFee)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-stone-800 pt-2 border-t border-stone-100">
                                <span>Total</span><span className="text-[var(--color-brand-brown)]">{formatPrice(summary.total)}</span>
                            </div>
                        </div>
                        <Link
                            href="/cart"
                            onClick={closeCart}
                            className="block w-full text-center text-sm border border-stone-300 text-stone-700 py-2.5 rounded-md hover:bg-stone-50 transition-colors"
                        >
                            View Cart
                        </Link>
                        <button
                            onClick={handleWhatsApp}
                            className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-whatsapp)] hover:bg-[var(--color-brand-whatsapp-hover)] text-white py-3 rounded-md transition-all font-medium text-sm shadow-sm hover:-translate-y-0.5"
                        >
                            Order on WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
