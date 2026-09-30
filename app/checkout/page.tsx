"use client";
import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { businessConfig } from "@/lib/config";
import { useRouter } from "next/navigation";

interface FormData {
    name: string;
    phone: string;
    address: string;
    city: string;
    pincode: string;
    notes: string;
}

const EMPTY_FORM: FormData = { name: "", phone: "", address: "", city: "", pincode: "", notes: "" };

function buildWhatsAppMessage(cart: ReturnType<typeof useCartStore.getState>, form: FormData): string {
    const lines = cart.items.map(
        (item) => `• ${item.productName} (${item.variantName}) × ${item.quantity} = ₹${item.lineTotal}`
    );
    return (
        `Hello Sree Selvanayaki Amman Oil & Flour Mill,\n\nI'd like to place an order:\n\n${lines.join("\n")}\n\n` +
        `Order Total: ₹${cart.summary.total}\n\n` +
        `Delivery to:\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}, ${form.city} – ${form.pincode}\n` +
        (form.notes ? `\nNotes: ${form.notes}` : "")
    );
}

export default function CheckoutPage() {
    const { items, summary, clearCart } = useCartStore();
    const [form, setForm] = useState<FormData>(EMPTY_FORM);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const router = useRouter();

    function validate() {
        const e: Partial<FormData> = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter a valid 10-digit phone number";
        if (!form.address.trim()) e.address = "Address is required";
        if (!form.city.trim()) e.city = "City is required";
        if (!form.pincode.match(/^\d{6}$/)) e.pincode = "Enter a valid 6-digit pincode";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;
        const msg = buildWhatsAppMessage({ items, summary } as any, form);
        const url = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        clearCart();
        window.open(url, "_blank");
        router.push("/thank-you");
    }

    if (items.length === 0) {
        return (
            <div className="bg-[#F7F1E5] min-h-screen pt-36 pb-20 px-4 text-center">
                <p className="font-cormorant text-2xl text-[#2B1812]/60 mb-4 italic">Your cart is empty.</p>
                <Link href="/shop" className="inline-flex items-center gap-2 bg-[#164A32] text-[#F7F1E5] px-8 py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.18em] uppercase hover:bg-[#1a573b]">
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#F7F1E5] min-h-screen pt-28 pb-20 px-4">
            <div className="container-wide">
                <h1 className="font-cormorant font-bold text-4xl text-[#2B1812] mb-10">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-5" noValidate>
                        <div className="bg-white rounded-2xl border border-[#B88745]/15 p-6">
                            <h2 className="font-cormorant font-bold text-2xl text-[#2B1812] mb-5">Delivery Details</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { key: "name", label: "Full Name", type: "text", cols: 2 },
                                    { key: "phone", label: "Phone Number", type: "tel", cols: 2 },
                                    { key: "address", label: "Street Address", type: "text", cols: 2 },
                                    { key: "city", label: "City", type: "text", cols: 1 },
                                    { key: "pincode", label: "PIN Code", type: "text", cols: 1 },
                                ].map((field) => (
                                    <div key={field.key} className={field.cols === 2 ? "sm:col-span-2" : ""}>
                                        <label htmlFor={field.key} className="block font-inter text-[10px] font-bold tracking-[0.14em] uppercase text-[#2B1812]/50 mb-1.5">
                                            {field.label}
                                        </label>
                                        <input
                                            id={field.key}
                                            type={field.type}
                                            value={form[field.key as keyof FormData]}
                                            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                                            className={`w-full bg-[#F9F5EC] border rounded-xl px-4 py-3 font-inter text-sm text-[#2B1812] focus:outline-none focus:ring-2 transition-all ${errors[field.key as keyof FormData] ? "border-red-400 focus:ring-red-200" : "border-[#2B1812]/10 focus:ring-[#164A32]/20"}`}
                                        />
                                        {errors[field.key as keyof FormData] && (
                                            <p className="font-inter text-[10px] text-red-500 mt-1">{errors[field.key as keyof FormData]}</p>
                                        )}
                                    </div>
                                ))}

                                <div className="sm:col-span-2">
                                    <label htmlFor="notes" className="block font-inter text-[10px] font-bold tracking-[0.14em] uppercase text-[#2B1812]/50 mb-1.5">Notes (optional)</label>
                                    <textarea
                                        id="notes"
                                        rows={3}
                                        value={form.notes}
                                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                                        className="w-full bg-[#F9F5EC] border border-[#2B1812]/10 rounded-xl px-4 py-3 font-inter text-sm text-[#2B1812] focus:outline-none focus:ring-2 focus:ring-[#164A32]/20 resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#164A32] text-[#F7F1E5] py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.18em] uppercase hover:bg-[#1a573b] transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Send Order on WhatsApp
                        </button>
                        <p className="text-center font-inter text-[10px] text-[#2B1812]/40">
                            You will be redirected to WhatsApp with your order details.
                        </p>
                    </form>

                    {/* Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-2xl border border-[#B88745]/15 p-6 sticky top-28">
                            <h2 className="font-cormorant font-bold text-2xl text-[#2B1812] mb-5">Order Summary</h2>
                            <div className="space-y-3 mb-5">
                                {items.map((item) => (
                                    <div key={`${item.productId}-${item.variantId}`} className="flex items-start justify-between gap-3">
                                        <div className="flex-1">
                                            <p className="font-inter text-sm font-semibold text-[#2B1812]">{item.productName}</p>
                                            <p className="font-inter text-[11px] text-[#2B1812]/50">{item.variantName} × {item.quantity}</p>
                                        </div>
                                        <p className="font-cormorant font-bold text-lg text-[#164A32] whitespace-nowrap">₹{item.lineTotal}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#B88745]/20 pt-4 space-y-2 font-inter text-sm">
                                <div className="flex justify-between text-[#2B1812]/60">
                                    <span>Subtotal</span>
                                    <span>₹{summary.subtotal}</span>
                                </div>
                                <div className="flex justify-between text-[#2B1812]/60">
                                    <span>Shipping</span>
                                    <span>{summary.freeShipping ? <span className="text-[#164A32] font-bold">Free</span> : `₹${summary.shippingFee}`}</span>
                                </div>
                                <div className="flex justify-between font-bold text-[#2B1812] text-base border-t border-[#B88745]/20 pt-2 mt-2">
                                    <span>Total</span>
                                    <span>₹{summary.total}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
