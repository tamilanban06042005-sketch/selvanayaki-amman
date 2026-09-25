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
            <main className="bg-[#F9F7F2] font-inter pt-32 pb-24 min-h-screen border-t-[8px] border-[#183921] flex items-center justify-center -mt-20">
                <div className="max-w-xl w-full bg-white rounded-sm border border-[#4A3930]/10 shadow-sm p-12 text-center mt-20">
                    <div className="text-5xl mb-6">💬</div>
                    <h1 className="text-3xl font-playfair font-bold text-[#4A3930] mb-6">
                        {confirmed ? "Thank you for your order" : "Complete your Order"}
                    </h1>

                    {confirmed ? (
                        <p className="text-[#4A3930]/70 leading-relaxed mb-8 font-light text-lg">
                            Your cart has been cleared. Our team will be in touch via WhatsApp to confirm your delivery and payment details quickly.
                        </p>
                    ) : (
                        <>
                            <div className="bg-[#F9F7F2] border border-[#4A3930]/20 rounded-sm p-6 mb-8 text-left">
                                <p className="text-[#4A3930]/90 leading-relaxed font-light">
                                    Your order details have been prepared for WhatsApp. Please ensure the message was successfully dispatched to our business account.{" "}
                                    <strong className="font-semibold text-[#4A3930]">Our team will confirm stock availability, actual delivery charges, and final payment details.</strong>
                                </p>
                            </div>

                            <p className="text-xs uppercase tracking-widest font-semibold text-[#4A3930]/50 mb-8 border-b border-[#4A3930]/10 pb-8">
                                Please ensure the WhatsApp message was sent.
                            </p>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={handleConfirmed}
                                    className="w-full bg-[#183921] hover:bg-[#112918] text-white py-4 rounded-full text-[10px] uppercase font-bold tracking-[0.2em] transition-colors"
                                >
                                    ✓ I Have Sent My Order
                                </button>
                                <Link
                                    href="/cart"
                                    className="w-full text-center border border-[#4A3930]/20 text-[#4A3930] py-4 rounded-full hover:bg-[#F9F7F2] transition-colors text-[10px] uppercase font-bold tracking-[0.2em]"
                                >
                                    Return to Cart
                                </Link>
                            </div>

                            <div className="mt-8 pt-8 border-t border-[#4A3930]/10 text-sm text-[#4A3930]/60">
                                <p className="mb-2">If WhatsApp failed to launch automatically:</p>
                                <a
                                    href={`https://wa.me/${businessConfig.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-[#183921] font-semibold underline mb-2 tracking-wide"
                                >
                                    Open WhatsApp directly
                                </a>
                            </div>
                        </>
                    )}

                    <div className="mt-8 flex gap-6 justify-center">
                        <Link href="/shop" className="text-xs uppercase tracking-widest font-bold text-[#4A3930]/80 hover:text-[#183921] underline-offset-4 hover:underline">
                            Shop
                        </Link>
                        <span className="text-[#4A3930]/20">|</span>
                        <Link href="/" className="text-xs uppercase tracking-widest font-bold text-[#4A3930]/80 hover:text-[#183921] underline-offset-4 hover:underline">
                            Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

