"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { businessConfig } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like to enquire about Sree Selvanayaki Amman Oil & Flour Mill products."
)}`;

const TRUST_BADGES = [
    { icon: "🏭", label: "From Our\nMill" },
    { icon: "🌿", label: "Carefully\nSelected" },
    { icon: "📦", label: "Hygienically\nPacked" },
    { icon: "✓", label: "FSSAI\nLicensed" },
];

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animations
            gsap.fromTo(".hero-eyebrow", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.1 });
            gsap.fromTo(".hero-headline", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: "power3.out", delay: 0.25 });
            gsap.fromTo(".hero-sub", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.45 });
            gsap.fromTo(".hero-ctas", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.6 });
            gsap.fromTo(".hero-badges", { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.8 });
            gsap.fromTo(".hero-image", { scale: 1.04, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 });

            // Watermark parallax + mouse tracking
            gsap.to(".hero-watermark", {
                y: "25%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            const onMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 18;
                const y = (e.clientY / window.innerHeight - 0.5) * 18;
                gsap.to(".hero-watermark", { x, y, duration: 2, ease: "power2.out" });
            };
            window.addEventListener("mousemove", onMouseMove);
            return () => window.removeEventListener("mousemove", onMouseMove);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero-trigger"
            ref={sectionRef}
            className="relative w-full min-h-screen bg-[#FFFDF7] overflow-hidden flex flex-col"
        >

            {/* ── Background Logo Watermark ─────────────────────────────────────────── */}
            <div className="hero-watermark absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="relative w-[140vw] h-[140vw] md:w-[80vw] md:h-[80vw] opacity-[0.035] mix-blend-multiply">
                    <Image src="/logo.jpeg" alt="" fill className="object-contain" priority aria-hidden="true" />
                </div>
            </div>

            {/* ── Content ─────────────────────────────────────────────────────────────── */}
            <div className="container-wide relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-16 pb-20 lg:py-24">

                {/* Left — Text */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">

                    {/* Eyebrow */}
                    <div className="hero-eyebrow flex items-center gap-3 mb-6">
                        <span className="divider-gold" />
                        <span className="label-caps text-[#B88745]">
                            Sree Selvanayaki Amman · Oil &amp; Flour Mill
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="hero-headline heading-display text-5xl md:text-6xl lg:text-[72px] text-[#2B1812] mb-6">
                        Pure.<br />
                        Traditional.<br />
                        <span className="text-[#164A32]">Made with Care.</span>
                    </h1>

                    {/* Sub */}
                    <p className="hero-sub text-[#2B1812]/70 text-base md:text-lg font-inter font-light leading-relaxed mb-10 max-w-md">
                        Traditional oils and everyday powders from our mill in Pidariyur, Erode.
                        Ordered online, delivered to your door.
                    </p>

                    {/* CTAs */}
                    <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-12">
                        <Link href="/shop" className="btn-primary text-[10px] px-8 py-3.5">
                            Shop Products →
                        </Link>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline text-[10px] px-8 py-3.5 inline-flex items-center gap-2"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Order on WhatsApp
                        </a>
                    </div>

                    {/* Trust Badges */}
                    <div className="hero-badges flex flex-wrap gap-5 pt-6 border-t border-[#4A281B]/10">
                        {TRUST_BADGES.map((b) => (
                            <div key={b.label} className="flex items-center gap-2.5">
                                <span className="text-xl bg-[#F7F1E5] w-9 h-9 rounded-full flex items-center justify-center text-[#164A32] flex-shrink-0">
                                    {b.icon}
                                </span>
                                <span className="label-caps text-[8px] text-[#2B1812]/60 leading-tight whitespace-pre-line">
                                    {b.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right — Product Image */}
                <div className="hero-image w-full lg:w-1/2 h-[360px] lg:h-[640px] relative">
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                        <Image
                            src="/groundnut oil.jpeg"
                            alt="Traditional Groundnut Oil from Sree Selvanayaki Amman"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                        {/* Gradient fade at bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#FFFDF7] to-transparent" />
                    </div>

                    {/* Floating quality badge */}
                    <div className="absolute bottom-6 right-6 bg-[#164A32] text-[#F7F1E5] px-4 py-3 rounded-xl shadow-xl">
                        <p className="label-caps text-[8px] text-[#B88745] mb-0.5">FSSAI</p>
                        <p className="font-cormorant font-semibold text-sm leading-tight">Licensed Mill</p>
                    </div>
                </div>

            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 opacity-40">
                <span className="animate-bounce text-[#2B1812] text-lg">↓</span>
                <span className="label-caps text-[8px] text-[#2B1812]">Scroll</span>
            </div>
        </section>
    );
}
