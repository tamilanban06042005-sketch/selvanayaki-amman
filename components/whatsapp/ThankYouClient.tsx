"use client";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessConfig } from "@/lib/config";
import { useState } from "react";

export default function ThankYouClient() {
    const { clearCart } = useCartStore();
    const [confirmed, setConfirmed] = useState(false);

    const handleConfirmed = () => {
        clearCart();
        setConfirmed(true);
    };

    return (
        <>
            <Navbar />
            <main className="bg-[#F3EFE6] font-inter pt-32 pb-24 min-h-screen flex items-center justify-center">
                <div className="max-w-xl w-full bg-white rounded-3xl border border-[#4A281B]/10 shadow-[0_8px_30px_rgba(74,40,27,0.04)] p-10 md:p-14 text-center mx-4">

                    <div className="text-5xl mb-6">💬</div>

                    <h1 className="heading-display text-3xl md:text-4xl text-[#2B1812] mb-6">
                        {confirmed ? "Thank You For Your Order" : "Complete Your Order"}
                    </h1>

                    {confirmed ? (
                        <p className="text-[#2B1812]/70 leading-relaxed mb-8 font-inter">
                            Your cart has been cleared. Our team is reviewing your message on WhatsApp and will confirm your delivery and payment details shortly.
                        </p>
                    ) : (
                        <>
                            <div className="bg-[#F7F1E5] border-l-4 border-[#164A32] p-5 mb-8 text-left rounded-r-xl">
                                <p className="text-[#2B1812] text-sm leading-relaxed font-inter">
                                    Your order details have been prepared for WhatsApp. Please ensure you sent the message so our team can immediately confirm stock and delivery charges.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={handleConfirmed}
                                    className="btn-primary w-full py-4 text-[10px] justify-center"
                                >
                                    ✓ I Have Sent My Order
                                </button>
                                <Link
                                    href="/cart"
                                    className="btn-outline w-full py-4 text-[10px] justify-center"
                                >
                                    Return to Cart
                                </Link>
                            </div>

                            <div className="mt-8 pt-8 border-t border-[#4A281B]/10 text-sm text-[#2B1812]/60 font-inter">
                                <p className="mb-2">If WhatsApp failed to launch automatically:</p>
                                <a
                                    href={`https://wa.me/${businessConfig.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-[#164A32] font-semibold hover:text-[#B88745] transition-colors"
                                >
                                    Open WhatsApp directly →
                                </a>
                            </div>
                        </>
                    )}

                    <div className="mt-10 flex gap-6 justify-center">
                        <Link href="/shop" className="label-caps text-[9px] text-[#2B1812]/80 hover:text-[#164A32] underline-offset-4 hover:underline">
                            Continue Shopping
                        </Link>
                        <span className="text-[#2B1812]/20">|</span>
                        <Link href="/" className="label-caps text-[9px] text-[#2B1812]/80 hover:text-[#164A32] underline-offset-4 hover:underline">
                            Return Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
