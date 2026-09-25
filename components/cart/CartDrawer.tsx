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
                    className="fixed inset-0 bg-brand-dark/40 z-50 backdrop-blur-sm"
                    onClick={closeCart}
                    aria-hidden="true"
                />
            )}

            {/* Drawer */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
                className={`fixed top-0 right-0 h-full w-full max-w-sm bg-brand-soft-cream z-50 shadow-2xl flex flex-col transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-brand-heritage/10">
                    <h2 className="heading-editorial font-bold text-brand-deep-green flex items-center gap-2 tracking-wide text-xl">
                        <ShoppingCart size={18} /> Cart
                        {summary.itemCount > 0 && (
                            <span className="text-xs bg-brand-primary text-white rounded-full px-2 py-0.5 min-w-[20px] text-center font-sans tracking-tight">{summary.itemCount}</span>
                        )}
                    </h2>
                    <button
                        onClick={closeCart}
                        aria-label="Close cart"
                        className="p-1 text-brand-dark/50 hover:text-brand-heritage transition-colors focus:outline-none rounded"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Free shipping bar */}
                {summary.subtotal > 0 && !summary.freeShipping && (
                    <div className="bg-brand-primary/5 border-b border-brand-primary/10 px-5 py-4 relative overflow-hidden">
                        <div className="absolute left-0 bottom-0 h-1 bg-brand-gold transition-all" style={{ width: `${Math.min(100, (summary.subtotal / shippingConfig.freeShippingThreshold) * 100)}%` }} />
                        <p className="text-xs text-brand-primary font-medium tracking-wide">
                            Add <strong className="font-semibold">{formatPrice(remaining)}</strong> more for free delivery
                        </p>
                    </div>
                )}
                {summary.freeShipping && (
                    <div className="bg-brand-primary border-b border-brand-primary px-5 py-4">
                        <p className="text-xs text-brand-ivory font-semibold tracking-wide uppercase">🎉 You qualify for free delivery!</p>
                    </div>
                )}

                {/* Items */}
                <div className="flex-1 overflow-y-auto px-5 py-4 bg-brand-soft-cream">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-4">
                            <ShoppingCart size={40} className="text-brand-heritage/20" />
                            <p className="text-brand-dark/50 font-light">Your cart is empty.</p>
                            <Link
                                href="/shop"
                                onClick={closeCart}
                                className="text-sm font-semibold uppercase tracking-wide text-brand-heritage hover:text-brand-gold transition-colors border-b border-brand-heritage pb-1"
                            >
                                Shop Products →
                            </Link>
                        </div>
                    ) : (
                        <ul className="space-y-6" role="list">
                            {items.map((item) => (
                                <li key={`${item.productId}-${item.variantId}`} className="flex gap-4">
                                    {/* Image */}
                                    <div className="w-20 h-24 rounded-md overflow-hidden bg-brand-ivory flex-shrink-0 border border-brand-heritage/10">
                                        {item.image ? (
                                            <Image src={item.image} alt={item.productName} width={80} height={96} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-brand-heritage/30 text-[10px] text-center p-1 uppercase font-semibold">Image</div>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                                        <div>
                                            <p className="text-lg font-bold text-brand-deep-green truncate heading-editorial">{item.productName}</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <p className="text-xs text-brand-dark/50 uppercase tracking-widest font-semibold">{item.variantName}</p>
                                                <p className="text-sm font-bold text-brand-primary">{formatPrice(item.lineTotal)}</p>
                                            </div>
                                        </div>

                                        {/* Qty + Remove */}
                                        <div className="flex items-center gap-2 mt-4">
                                            <div className="flex items-center border border-brand-heritage/20 rounded">
                                                <button
                                                    onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)}
                                                    aria-label="Decrease quantity"
                                                    disabled={item.quantity <= 1}
                                                    className="w-7 h-7 flex items-center justify-center hover:bg-brand-heritage hover:text-white disabled:opacity-30 transition-colors text-brand-dark"
                                                >
                                                    <Minus size={12} />
                                                </button>
                                                <span className="text-sm w-8 text-center font-medium bg-brand-ivory h-7 flex items-center justify-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)}
                                                    aria-label="Increase quantity"
                                                    disabled={item.quantity >= 99}
                                                    className="w-7 h-7 flex items-center justify-center hover:bg-brand-heritage hover:text-white disabled:opacity-30 transition-colors text-brand-dark"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.productId, item.variantId)}
                                                aria-label={`Remove ${item.productName}`}
                                                className="ml-auto text-brand-dark/30 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
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
                    <div className="border-t border-brand-heritage/10 px-6 py-6 space-y-4 bg-brand-ivory">
                        <div className="space-y-2 text-sm font-light">
                            <div className="flex justify-between text-brand-dark/70">
                                <span>Subtotal</span><span>{formatPrice(summary.subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-brand-dark/70">
                                <span>Delivery</span>
                                <span>{summary.freeShipping ? <span className="text-brand-primary font-semibold uppercase tracking-widest text-[10px]">Free</span> : formatPrice(summary.shippingFee)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-brand-deep-green pt-4 border-t border-brand-heritage/10 text-lg">
                                <span>Total</span><span className="text-brand-heritage">{formatPrice(summary.total)}</span>
                            </div>
                        </div>
                        <div className="pt-2 flex flex-col gap-3">
                            <Link
                                href="/cart"
                                onClick={closeCart}
                                className="block w-full text-center text-xs uppercase tracking-widest font-semibold border border-brand-heritage/30 text-brand-dark py-4 flex-1 rounded hover:bg-brand-heritage hover:text-white transition-colors"
                            >
                                View Cart Details
                            </Link>
                            <button
                                onClick={handleWhatsApp}
                                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white py-4 rounded transition-all font-bold text-xs uppercase tracking-widest shadow-md hover:-translate-y-0.5"
                            >
                                Order on WhatsApp
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
