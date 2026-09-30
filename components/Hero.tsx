"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { businessConfig } from "@/lib/config";

const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello Sree Selvanayaki Amman, I would like to enquire about your products."
)}`;

export default function Hero() {
    const headlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = headlineRef.current;
        if (!el) return;
        const children = Array.from(el.children) as HTMLElement[];
        children.forEach((child, i) => {
            child.style.opacity = "0";
            child.style.transform = "translateY(24px)";
            child.style.transition = `opacity 0.7s ease ${i * 0.13}s, transform 0.7s ease ${i * 0.13}s`;
            requestAnimationFrame(() => {
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
            });
        });
    }, []);

    return (
        <section
            className="relative min-h-screen bg-[#064B36] flex flex-col items-center justify-center overflow-hidden"
            aria-label="Hero"
        >
            {/* Botanical SVG background art */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Large leaf left */}
                <svg className="absolute -left-24 top-1/4 w-[420px] h-[420px] opacity-[0.08]" viewBox="0 0 200 200" fill="none">
                    <path d="M100 180 C100 180 10 130 10 60 C10 10 55 -5 100 -5 C145 -5 190 10 190 60 C190 130 100 180 100 180Z" fill="#F7F1E5" />
                    <path d="M100 180 L100 -5" stroke="#F7F1E5" strokeWidth="2" />
                    <path d="M35 130 Q100 90 165 130" stroke="#F7F1E5" strokeWidth="1" fill="none" opacity="0.6" />
                    <path d="M20 80 Q100 50 180 80" stroke="#F7F1E5" strokeWidth="1" fill="none" opacity="0.6" />
                </svg>
                {/* Large leaf right */}
                <svg className="absolute -right-24 bottom-1/4 w-[380px] h-[380px] opacity-[0.08]" viewBox="0 0 200 200" fill="none">
                    <path d="M100 180 C100 180 10 130 10 60 C10 10 55 -5 100 -5 C145 -5 190 10 190 60 C190 130 100 180 100 180Z" fill="#F7F1E5" />
                    <path d="M100 180 L100 -5" stroke="#F7F1E5" strokeWidth="2" />
                </svg>
                {/* Gold dashed circle */}
                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.06]" viewBox="0 0 600 600">
                    <circle cx="300" cy="300" r="280" stroke="#B88745" strokeWidth="1.5" strokeDasharray="8 6" fill="none" />
                    <circle cx="300" cy="300" r="200" stroke="#B88745" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                </svg>
                {/* SSA monogram watermark */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cormorant font-bold text-[clamp(12rem,25vw,22rem)] italic text-[#F7F1E5]/[0.04] select-none leading-none whitespace-nowrap">
                    SSA
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10 container-narrow text-center px-4 pt-28 pb-16">
                <div ref={headlineRef} className="flex flex-col items-center gap-5">
                    <p className="font-inter text-[10px] font-bold tracking-[0.28em] uppercase text-[#B88745]">
                        Pidariyur, Erode · Est. Since Generations
                    </p>

                    <span className="block w-10 h-px bg-[#B88745]" aria-hidden="true" />

                    <h1 className="font-cormorant font-bold text-[clamp(3rem,8vw,6rem)] text-[#F7F1E5] leading-[1.03] tracking-wide">
                        Traditional Oils &<br />
                        <em className="not-italic text-[#D9B76E]">Everyday Essentials</em>
                    </h1>

                    <p className="font-cormorant text-xl md:text-2xl italic text-[#F7F1E5]/70 max-w-lg leading-snug">
                        Sree Selvanayaki Amman Oil &amp; Flour Mill — quality from our mill to your home.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
                        <Link
                            href="/shop"
                            className="bg-[#F7F1E5] text-[#164A32] px-8 py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.18em] uppercase hover:bg-white transition-all shadow-lg"
                        >
                            Shop Products
                        </Link>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border-2 border-[#F7F1E5]/40 text-[#F7F1E5] px-8 py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.18em] uppercase hover:border-[#F7F1E5] transition-all"
                        >
                            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Order on WhatsApp
                        </a>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-5 mt-6 pt-6 border-t border-[#F7F1E5]/15 w-full max-w-lg">
                        {[
                            { icon: "🛡️", label: "FSSAI Licensed" },
                            { icon: "🌿", label: "No Preservatives" },
                            { icon: "🏭", label: "Mill Fresh" },
                            { icon: "📦", label: "Direct Delivery" },
                        ].map((b) => (
                            <div key={b.label} className="flex items-center gap-1.5 text-[#F7F1E5]/70">
                                <span className="text-sm" aria-hidden="true">{b.icon}</span>
                                <span className="font-inter text-[10px] font-semibold tracking-wider uppercase">{b.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#F7F1E5]/40" aria-hidden="true">
                <span className="font-inter text-[9px] tracking-[0.2em] uppercase">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-[#F7F1E5]/40 to-transparent" />
            </div>
        </section>
    );
}
