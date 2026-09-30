import Link from "next/link";
import type { Metadata } from "next";
import { businessConfig } from "@/lib/config";

export const metadata: Metadata = {
    title: "Order Placed — Sree Selvanayaki Amman",
    description: "Thank you for your order. We will confirm it shortly on WhatsApp.",
};

const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello Sree Selvanayaki Amman, I just placed an order and would like to confirm details."
)}`;

export default function ThankYouPage() {
    return (
        <div className="bg-[#F7F1E5] min-h-screen pt-36 pb-24 px-4 flex items-center">
            <div className="container-narrow text-center">
                {/* Gold seal */}
                <div className="w-20 h-20 border-2 border-[#B88745] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-9 h-9 text-[#B88745]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </div>

                <p className="font-inter text-[10px] font-bold tracking-[0.22em] uppercase text-[#B88745] mb-3">Order Received</p>
                <h1 className="font-cormorant font-bold text-[clamp(2.5rem,7vw,4rem)] text-[#2B1812] leading-tight mb-4">
                    Thank You for<br />Your Order!
                </h1>
                <p className="font-cormorant text-xl italic text-[#2B1812]/60 max-w-md mx-auto leading-relaxed mb-10">
                    Your order has been sent via WhatsApp. We will confirm it and arrange delivery shortly.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#164A32] text-[#F7F1E5] px-8 py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.18em] uppercase hover:bg-[#1a573b] transition-all shadow-lg"
                    >
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        Follow Up on WhatsApp
                    </a>
                    <Link href="/shop" className="border-2 border-[#164A32] text-[#164A32] px-8 py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.18em] uppercase hover:bg-[#164A32]/5 transition-all">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}
