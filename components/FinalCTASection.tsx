import Link from "next/link";
import { businessConfig } from "@/lib/config";

const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello Sree Selvanayaki Amman Oil & Flour Mill, I would like to place an order."
)}`;

export default function FinalCTASection() {
    return (
        <section className="bg-[#F7F1E5] py-24 px-4 overflow-hidden relative" aria-label="Call to action">
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <svg className="absolute -top-20 left-0 w-64 h-64 opacity-[0.05]" viewBox="0 0 200 200" fill="none">
                    <path d="M100 180 C100 180 10 130 10 60 C10 10 55 -5 100 -5 C145 -5 190 10 190 60 C190 130 100 180 100 180Z" fill="#064B36" />
                    <path d="M100 180 L100 -5" stroke="#064B36" strokeWidth="2" />
                </svg>
                <svg className="absolute -bottom-16 right-0 w-56 h-56 opacity-[0.05]" viewBox="0 0 200 200" fill="none">
                    <path d="M100 180 C100 180 10 130 10 60 C10 10 55 -5 100 -5 C145 -5 190 10 190 60 C190 130 100 180 100 180Z" fill="#064B36" />
                </svg>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto">
                <div className="flex items-center gap-4 mb-8 max-w-xs mx-auto" aria-hidden="true">
                    <div className="flex-1 h-px bg-[#B88745]/30" />
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="#B88745" opacity="0.7"><polygon points="8,1 9.5,6 15,6 10.5,9.5 12,14.5 8,11 4,14.5 5.5,9.5 1,6 6.5,6" /></svg>
                    <div className="flex-1 h-px bg-[#B88745]/30" />
                </div>

                <p className="font-inter text-[10px] font-bold tracking-[0.22em] uppercase text-[#2B1812]/50 mb-3">Order Direct from Our Mill</p>
                <h2 className="font-cormorant font-bold text-[clamp(2.5rem,7vw,4rem)] text-[#2B1812] leading-tight tracking-wide mb-5">
                    Bring Natural Goodness<br />to Your Home.
                </h2>
                <p className="font-cormorant text-xl italic text-[#2B1812]/60 mb-10 leading-snug">
                    Traditional goodness, always with you.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#164A32] text-[#F7F1E5] px-8 py-4 rounded-full text-[11px] font-inter font-bold tracking-[0.18em] uppercase hover:bg-[#1a573b] transition-all shadow-lg flex items-center gap-2 group"
                    >
                        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Order on WhatsApp →
                    </a>
                    <Link href="/shop" className="border-2 border-[#164A32] text-[#164A32] px-8 py-4 rounded-full text-[11px] font-inter font-bold tracking-[0.18em] uppercase hover:bg-[#164A32]/5 transition-all">
                        Browse Products
                    </Link>
                </div>

                <div className="flex items-center gap-4 mt-10 max-w-xs mx-auto" aria-hidden="true">
                    <div className="flex-1 h-px bg-[#B88745]/30" />
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="#B88745" opacity="0.7"><polygon points="8,1 9.5,6 15,6 10.5,9.5 12,14.5 8,11 4,14.5 5.5,9.5 1,6 6.5,6" /></svg>
                    <div className="flex-1 h-px bg-[#B88745]/30" />
                </div>
            </div>
        </section>
    );
}
