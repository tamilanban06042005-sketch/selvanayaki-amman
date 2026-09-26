"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { businessConfig } from "@/lib/config";

const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like to enquire about Sree Selvanayaki Amman Oil & Flour Mill products."
)}`;

const TRUST_BADGES = [
    { icon: "🏭", label: "FROM OUR\nMILL" },
    { icon: "🌿", label: "CAREFULLY\nSELECTED\nINGREDIENTS" },
    { icon: "📦", label: "HYGIENICALLY\nPACKED" },
    { icon: "✓", label: "FSSAI\nLICENSED" },
];

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".hero-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 });
            gsap.fromTo(".hero-headline", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 });
            gsap.fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 });
            gsap.fromTo(".hero-ctas", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 });
            gsap.fromTo(".hero-badges .badge-item",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.8 }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center pt-32 pb-16 px-4 overflow-hidden"
        >
            <div className="container-wide relative z-10 flex flex-col items-center text-center">

                {/* Eyebrow */}
                <div className="hero-eyebrow mb-6 mt-10 md:mt-20">
                    <p className="font-cormorant font-bold uppercase tracking-widest text-[#2B1812] text-sm md:text-base leading-tight">
                        Sree Selvanayaki Amman
                    </p>
                    <div className="flex justify-center items-center gap-2 mt-1 hidden sm:flex">
                        <div className="w-12 h-[1px] bg-[#2B1812]/20"></div>
                        <p className="font-inter text-[9px] uppercase tracking-[0.25em] text-[#2B1812]/70 font-semibold">
                            Oil &amp; Flour Mill
                        </p>
                        <div className="w-12 h-[1px] bg-[#2B1812]/20"></div>
                    </div>
                </div>

                {/* Headline */}
                <h1 className="hero-headline font-cormorant font-bold text-5xl md:text-7xl lg:text-[84px] text-[#2B1812] leading-[1.05] uppercase tracking-wide mb-6 max-w-4xl">
                    Tradition,<br />
                    Presented<br />
                    Beautifully.
                </h1>

                {/* Sub */}
                <p className="hero-sub text-[#2B1812]/80 font-cormorant italic text-xl md:text-2xl mb-10 max-w-xl mx-auto">
                    Traditional oils and everyday powders <br className="hidden md:block" />from our mill in Pidariyur, Erode.
                </p>

                {/* CTAs */}
                <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 w-full max-w-md mx-auto">
                    <Link href="/shop" className="w-full sm:w-auto bg-[#164A32] text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#1a573b] transition-colors shadow-md">
                        Shop Products
                    </Link>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-transparent border border-[#164A32] text-[#164A32] px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#164A32]/5 transition-colors inline-flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Order on WhatsApp
                    </a>
                </div>

                {/* Trust Badges */}
                <div className="hero-badges flex flex-wrap justify-center gap-6 md:gap-16 pt-10 border-t border-[#D6AD7A]/30 w-full max-w-3xl">
                    {TRUST_BADGES.map((b) => (
                        <div key={b.label} className="badge-item flex flex-col items-center gap-3 w-20 md:w-24">
                            <span className="text-2xl border border-[#D6AD7A]/40 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-[#164A32] flex-shrink-0 bg-transparent shadow-sm">
                                {b.icon}
                            </span>
                            <span className="font-inter text-[9px] uppercase tracking-wide text-[#2B1812]/80 leading-tight whitespace-pre-line font-bold">
                                {b.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 opacity-40">
                <span className="animate-bounce text-[#2B1812] text-lg">↓</span>
                <span className="label-caps text-[8px] tracking-widest text-[#2B1812]">Scroll</span>
            </div>
        </section>
    );
}
