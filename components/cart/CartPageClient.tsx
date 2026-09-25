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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
            <Navbar />
            <main className="min-h-screen bg-[#F9F7F2] pt-32 pb-24 border-t-[8px] border-[#183921] font-inter">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#4A3930] mb-12">Your Cart</h1>

                    {items.length === 0 ? (
                        <div className="text-center py-32 bg-white border border-[#4A3930]/10 rounded-sm">
                            <ShoppingCart size={48} className="text-[#4A3930]/20 mx-auto mb-6" />
                            <p className="text-lg text-[#4A3930]/60 mb-8 font-light">Your cart is currently empty.</p>
                            <Link
                                href="/shop"
                                className="inline-block bg-[#183921] text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] rounded-full font-bold hover:bg-[#112918] transition-colors"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                            {/* Items */}
                            <div className="lg:col-span-7 space-y-6">
                                {items.map((item) => (
                                    <div
                                        key={`${item.productId}-${item.variantId}`}
                                        className="bg-white rounded-sm border border-[#4A3930]/10 p-6 flex flex-col md:flex-row gap-6 relative"
                                    >
                                        <div className="w-24 h-24 rounded overflow-hidden bg-[#F2F0E9] flex-shrink-0 border border-[#4A3930]/5">
                                            {item.image ? (
                                                <Image src={item.image} alt={item.productName} width={96} height={96} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-[#4A3930]/30 text-xs">No img</div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <p className="font-playfair font-bold text-xl text-[#4A3930]">{item.productName}</p>
                                                    <p className="text-xs uppercase tracking-widest text-[#4A3930]/60 mt-1 mb-3">{item.variantName}</p>
                                                </div>
                                                <button onClick={() => removeItem(item.productId, item.variantId)} aria-label={`Remove ${item.productName}`} className="text-[#4A3930]/40 hover:text-red-700 transition-colors absolute md:relative top-6 right-6 md:top-auto md:right-auto">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>

                                            <div className="flex items-end justify-between mt-auto">
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#4A3930]">Qty</span>
                                                    <div className="flex items-center border border-[#4A3930]/20 rounded-sm">
                                                        <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)} disabled={item.quantity <= 1} className="w-8 h-8 flex items-center justify-center text-[#4A3930] hover:bg-[#F9F7F2] disabled:opacity-30 border-r border-[#4A3930]/20 transition-colors">
                                                            <Minus size={12} />
                                                        </button>
                                                        <span className="w-10 text-center text-sm font-medium text-[#4A3930]">{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)} disabled={item.quantity >= 99} className="w-8 h-8 flex items-center justify-center text-[#4A3930] hover:bg-[#F9F7F2] disabled:opacity-30 border-l border-[#4A3930]/20 transition-colors">
                                                            <Plus size={12} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-[#4A3930]/50 mb-1">{formatPrice(item.unitPrice)} each</p>
                                                    <p className="font-playfair font-bold text-xl text-[#4A3930]">{formatPrice(item.lineTotal)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="lg:col-span-5 relative">
                                <div className="bg-white rounded-sm border border-[#4A3930]/10 p-8 sticky top-32">
                                    <h2 className="font-playfair text-2xl font-bold text-[#4A3930] mb-8 pb-4 border-b border-[#4A3930]/10">Order Summary</h2>
                                    <div className="space-y-4 text-base mb-8">
                                        <div className="flex justify-between text-[#4A3930]/80">
                                            <span>Subtotal</span><span>{formatPrice(summary.subtotal)}</span>
                                        </div>
                                        <div className="flex justify-between text-[#4A3930]/80 pb-6 border-b border-[#4A3930]/10">
                                            <span>Estimated Delivery</span>
                                            <span>{summary.freeShipping ? <span className="text-[#183921] font-semibold">Free</span> : formatPrice(summary.shippingFee)}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-2xl font-playfair font-bold text-[#4A3930]">
                                            <span>Total</span>
                                            <span>{formatPrice(summary.total)}</span>
                                        </div>
                                    </div>

                                    {!summary.freeShipping && (
                                        <div className="bg-[#F9F7F2] p-4 rounded-sm border border-[#4A3930]/10 mb-8 text-center">
                                            <p className="text-sm font-medium text-[#4A3930]/80">
                                                Add <strong className="text-[#4A3930]">{formatPrice(1000 - summary.subtotal)}</strong> more for free delivery
                                            </p>
                                        </div>
                                    )}

                                    <button
                                        onClick={handleWhatsApp}
                                        className="w-full flex items-center justify-center gap-3 bg-[#183921] hover:bg-[#112918] text-white text-[10px] uppercase tracking-[0.2em] font-semibold py-5 rounded-full transition-all shadow-md mb-6"
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                                        </svg>
                                        Order on WhatsApp
                                    </button>

                                    <Link href="/shop" className="block text-center text-xs uppercase tracking-widest font-bold text-[#4A3930]/60 hover:text-[#183921] transition-colors underline-offset-4 hover:underline">
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

