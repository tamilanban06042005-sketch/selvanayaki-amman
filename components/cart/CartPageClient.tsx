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
            <main className="min-h-screen bg-[#F3EFE6] pt-28 lg:pt-36 pb-24 font-inter">
                <div className="container-wide">
                    <div className="text-center mb-12">
                        <span className="label-caps text-[#164A32] mb-4">Secure Checkout</span>
                        <h1 className="heading-display text-4xl md:text-5xl text-[#2B1812]">Your Cart</h1>
                    </div>

                    {items.length === 0 ? (
                        <div className="text-center py-24 bg-white border border-[#4A281B]/10 rounded-2xl shadow-sm max-w-2xl mx-auto">
                            <ShoppingCart size={48} className="text-[#4A281B]/20 mx-auto mb-6" />
                            <p className="text-lg text-[#2B1812]/60 mb-8 font-inter">Your cart is currently empty.</p>
                            <Link
                                href="/shop"
                                className="btn-primary py-4 px-8 text-[10px]"
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
                                        className="bg-white rounded-2xl border border-[#4A281B]/10 p-6 flex flex-col md:flex-row gap-6 relative shadow-sm"
                                    >
                                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-[#F7F1E5] flex-shrink-0 border border-[#4A281B]/10">
                                            {item.image ? (
                                                <Image src={item.image} alt={item.productName} width={96} height={96} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-[#2B1812]/30 text-xs text-center p-2">Item Image</div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0 flex flex-col justify-between">
                                            <div className="flex justify-between items-start gap-4">
                                                <div>
                                                    <p className="font-cormorant font-bold text-2xl text-[#2B1812]">{item.productName}</p>
                                                    <p className="label-caps text-[9px] text-[#2B1812]/60 mt-1 mb-3">{item.variantName}</p>
                                                </div>
                                                <button onClick={() => removeItem(item.productId, item.variantId)} aria-label={`Remove ${item.productName}`} className="text-[#2B1812]/30 hover:text-[#e11d48] transition-colors absolute md:relative top-6 right-6 md:top-auto md:right-auto">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>

                                            <div className="flex items-end justify-between mt-auto">
                                                <div className="flex items-center gap-4">
                                                    <span className="label-caps text-[#2B1812]">Qty</span>
                                                    <div className="flex items-center border border-[#4A281B]/20 rounded-lg">
                                                        <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity - 1)} disabled={item.quantity <= 1} className="w-8 h-8 flex items-center justify-center text-[#2B1812] hover:bg-[#F7F1E5] disabled:opacity-30 border-r border-[#4A281B]/20 transition-colors rounded-l-lg">
                                                            <Minus size={12} />
                                                        </button>
                                                        <span className="w-10 text-center text-sm font-semibold text-[#2B1812]">{item.quantity}</span>
                                                        <button onClick={() => updateQuantity(item.productId, item.variantId, item.quantity + 1)} disabled={item.quantity >= 99} className="w-8 h-8 flex items-center justify-center text-[#2B1812] hover:bg-[#F7F1E5] disabled:opacity-30 border-l border-[#4A281B]/20 transition-colors rounded-r-lg">
                                                            <Plus size={12} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-[#2B1812]/50 mb-1">{formatPrice(item.unitPrice)} each</p>
                                                    <p className="font-cormorant font-bold text-2xl text-[#164A32]">{formatPrice(item.lineTotal)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Summary */}
                            <div className="lg:col-span-5 relative">
                                <div className="bg-white rounded-2xl border border-[#4A281B]/10 overflow-hidden shadow-sm sticky top-32">
                                    <div className="p-8 border-b border-[#4A281B]/10 bg-[#F7F1E5]">
                                        <h2 className="heading-display text-2xl text-[#2B1812] mb-1">Order Summary</h2>
                                        <p className="text-[#2B1812]/60 text-sm font-inter">Secure processing via WhatsApp</p>
                                    </div>

                                    <div className="p-8">
                                        <div className="space-y-4 text-base mb-8">
                                            <div className="flex justify-between text-[#2B1812]/80 font-inter">
                                                <span>Subtotal</span><span>{formatPrice(summary.subtotal)}</span>
                                            </div>
                                            <div className="flex justify-between text-[#2B1812]/80 font-inter pb-6 border-b border-[#4A281B]/10">
                                                <span>Estimated Delivery</span>
                                                <span>{summary.freeShipping ? <span className="text-[#B88745] font-semibold">Free</span> : formatPrice(summary.shippingFee)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-3xl font-cormorant font-bold text-[#164A32] pt-2">
                                                <span className="text-[#2B1812]">Total</span>
                                                <span>{formatPrice(summary.total)}</span>
                                            </div>
                                        </div>

                                        {!summary.freeShipping && (
                                            <div className="bg-[#F3EFE6] p-4 rounded-xl border border-[#B88745]/30 mb-8 text-center text-sm font-medium text-[#2B1812]/80 overflow-hidden relative">
                                                <div className="absolute top-0 left-0 h-1 bg-[#B88745] transition-all" style={{ width: `${Math.min(100, (summary.subtotal / 1000) * 100)}%` }} />
                                                <p className="relative z-10 pt-2">
                                                    Add <strong className="text-[#B88745]">{formatPrice(1000 - summary.subtotal)}</strong> more for free delivery
                                                </p>
                                            </div>
                                        )}

                                        <button
                                            onClick={handleWhatsApp}
                                            className="btn-whatsapp w-full py-5 justify-center text-[10px] shadow-sm mb-6"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            Order on WhatsApp
                                        </button>

                                        <p className="text-center text-[10px] text-[#2B1812]/50 font-inter">
                                            Orders fulfilled directly by the Sree Selvanayaki Amman Mill
                                        </p>
                                    </div>
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
