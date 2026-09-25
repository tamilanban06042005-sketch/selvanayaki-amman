"use client";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
            <Header />
            <main className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
                <div className="max-w-lg w-full bg-white rounded-xl border border-stone-100 shadow-sm p-8 text-center">
                    <div className="text-5xl mb-4">ðŸ’¬</div>
                    <h1 className="text-2xl font-bold text-stone-800 mb-3">
                        {confirmed ? "Thank you for your order!" : "WhatsApp Order Prepared"}
                    </h1>

                    {confirmed ? (
                        <p className="text-stone-600 leading-relaxed mb-6">
                            Your cart has been cleared. Our team will be in touch to confirm your delivery and payment.
                        </p>
                    ) : (
                        <>
                            <div className="bg-[var(--color-brand-beige)] border border-[var(--color-brand-brass)] rounded-lg p-4 mb-6 text-left">
                                <p className="text-sm text-[var(--color-brand-ink)] leading-relaxed">
                                    Your WhatsApp order message has been prepared. Please make sure the message has been
                                    sent to our business WhatsApp.{" "}
                                    <strong>Our team will confirm availability, delivery charges and payment details.</strong>
                                </p>
                            </div>

                            <p className="text-xs text-stone-400 mb-6">
                                Opening WhatsApp does not mean your order has been confirmed. Please ensure the message was sent.
                            </p>

                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={handleConfirmed}
                                    className="w-full bg-green-700 hover:bg-green-600 text-white py-3 rounded-md font-semibold transition-colors"
                                >
                                    âœ… I Have Sent My Order
                                </button>
                                <Link
                                    href="/cart"
                                    className="w-full text-center border border-stone-200 text-stone-600 py-3 rounded-md hover:bg-stone-50 transition-colors text-sm"
                                >
                                    Return to Cart
                                </Link>
                            </div>

                            <div className="mt-6 pt-4 border-t border-stone-100 text-sm text-stone-500">
                                <p className="mb-2">If WhatsApp did not open:</p>
                                <a
                                    href={`https://wa.me/${businessConfig.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block text-green-700 underline mb-2"
                                >
                                    Open WhatsApp directly
                                </a>
                                <p>or call us: <a href={`tel:${businessConfig.phone}`} className="text-[var(--color-brand-brown)] underline">{businessConfig.phone}</a></p>
                            </div>
                        </>
                    )}

                    <div className="mt-6 flex gap-3 justify-center">
                        <Link href="/shop" className="text-sm text-[var(--color-brand-brown)] underline hover:text-[var(--color-brand-ink)]">
                            Continue Shopping
                        </Link>
                        <Link href="/" className="text-sm text-stone-500 underline hover:text-stone-700">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

