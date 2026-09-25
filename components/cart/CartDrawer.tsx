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
                    <h2 className="font-bold text-stone-800 flex items-center gap-2">
                        <ShoppingCart size={18} /> Cart
                        {summary.itemCount > 0 && (
                            <span className="text-xs bg-amber-700 text-white rounded-full px-2 py-0.5">{summary.itemCount}</span>
                        )}
                    </h2>
                    <button
                        onClick={closeCart}
                        aria-label="Close cart"
                        className="p-1 text-stone-500 hover:text-stone-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Free shipping bar */}
                {summary.subtotal > 0 && !summary.freeShipping && (
                    <div className="bg-amber-50 border-b border-amber-100 px-5 py-2">
                        <p className="text-xs text-amber-800">
                            Add <strong>{formatPrice(remaining)}</strong> more for free delivery
                        </p>
                    </div>
                )}
                {summary.freeShipping && (
                    <div className="bg-green-50 border-b border-green-100 px-5 py-2">
                        <p className="text-xs text-green-800 font-medium">🎉 You qualify for free delivery!</p>
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
                                className="text-sm font-medium text-amber-700 underline hover:text-amber-800"
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
                                        <p className="text-sm font-semibold text-stone-800 truncate">{item.productName}</p>
                                        <p className="text-xs text-stone-500">{item.variantName}</p>
                                        <p className="text-sm font-bold text-amber-700 mt-0.5">{formatPrice(item.lineTotal)}</p>
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
                                            <span className="text-sm w-5 text-center">{item.quantity}</span>
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
                                <span>{summary.freeShipping ? <span className="text-green-700 font-medium">Free</span> : formatPrice(summary.shippingFee)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-stone-800 pt-1 border-t border-stone-100">
                                <span>Total</span><span className="text-amber-700">{formatPrice(summary.total)}</span>
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
                            className="block w-full text-center text-sm bg-green-700 hover:bg-green-600 text-white py-2.5 rounded-md transition-colors font-semibold"
                        >
                            Order on WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
