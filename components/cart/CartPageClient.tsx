"use client";
import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { calculateShipping } from "@/lib/shipping";
import { openWhatsApp } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CartPageClient() {
    const { items, summary, updateQuantity, removeItem, hydrate } = useCartStore();
    const router = useRouter();

    useEffect(() => { hydrate(); }, [hydrate]);

    const handleWhatsApp = () => {
        if (items.length === 0) return;
        const shipping = calculateShipping(summary.subtotal);
        track("whatsapp_order_started");
        openWhatsApp({ items, shipping, subtotal: summary.subtotal, total: summary.total });
        router.push("/thank-you-whatsapp");
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
                    <h1 className="text-3xl font-bold text-stone-800 mb-8">Your Cart</h1>

                    {items.length === 0 ? (
                        <div className="text-center py-20">
                            <ShoppingCart size={48} className="text-stone-200 mx-auto mb-4" />
                            <p className="text-stone-500 mb-6">Your cart is empty.</p>
                            <Link
                                href="/shop"
                                className="inline-block bg-[var(--color-brand-brown)] text-white px-6 py-3 rounded-md font-semibold hover:bg-[var(--color-brand-ink)] transition-colors"
                            >
                                Shop Products
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Items */}
                            <div className="lg:col-span-2 space-y-4">
                                {items.map((item) => (
                                    <div
                                        key={`${item.productId}-${item.variantId}`}
                                        className="bg-white rounded-xl border border-stone-100 p-4 flex gap-4"
                                    >
                                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-stone-50 flex-shrink-0">
                                            {item.image ? (
                                                <Image src={item.image} alt={item.productName} width={80} height={80} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-stone-300 text-xs">No img</div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-semibold text-stone-800">{item.productName}</p>
                                            <p className="text-sm text-stone-500 mb-2">{item.variantName}</p>
                                            <p className="text-sm text-stone-500">
                                                {formatPrice(item.unitPrice)} Ã— {item.quantity} = <strong className="text-[var(--color-brand-brown)]">{formatPrice(item.lineTotal)}</strong>
                                            </p>
                                            <div className="flex items-center gap-3 mt-3">
                                                <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)} disabled={item.quantity <= 1} aria-label="Decrease" className="w-7 h-7 border border-stone-200 rounded flex items-center justify-center hover:bg-stone-50 disabled:opacity-30">
                                                    <Minus size={12} />
                                                </button>
                                                <span className="w-6 text-center text-sm">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)} disabled={item.quantity >= 99} aria-label="Increase" className="w-7 h-7 border border-stone-200 rounded flex items-center justify-center hover:bg-stone-50 disabled:opacity-30">
                                                    <Plus size={12} />
                                                </button>
                                                <button onClick={() => removeItem(item.productId, item.variantId)} aria-label={`Remove ${item.productName}`} className="ml-2 text-stone-400 hover:text-red-600 transition-colors">
                                                    <Trash2 size={15} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="bg-white rounded-xl border border-stone-100 p-6 h-fit">
                                <h2 className="font-bold text-stone-800 mb-4">Order Summary</h2>
                                <div className="space-y-2 text-sm mb-4">
                                    <div className="flex justify-between text-stone-600">
                                        <span>Subtotal</span><span>{formatPrice(summary.subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-stone-600">
                                        <span>Delivery</span>
                                        <span>{summary.freeShipping ? <span className="text-green-700 font-medium">Free</span> : formatPrice(summary.shippingFee)}</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-stone-800 pt-2 border-t border-stone-100">
                                        <span>Total</span><span className="text-[var(--color-brand-brown)]">{formatPrice(summary.total)}</span>
                                    </div>
                                </div>
                                {!summary.freeShipping && (
                                    <p className="text-xs text-stone-400 mb-4">
                                        Add {formatPrice(1000 - summary.subtotal)} more for free delivery
                                    </p>
                                )}
                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition-colors mb-3"
                                >
                                    Order on WhatsApp
                                </button>
                                <Link href="/shop" className="block text-center text-sm text-stone-500 hover:text-[var(--color-brand-brown)] transition-colors">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

