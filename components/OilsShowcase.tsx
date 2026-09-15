"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const OILS = [
    {
        id: "gingelly",
        number: "01",
        name: "Gingelly Oil",
        secondary: "SESAME OIL",
        description:
            "Rich, traditional sesame oil crafted for authentic South Indian cooking. Cold-pressed from carefully selected sesame seeds, this golden oil carries the warmth of generations.",
        ingredient: "Sesame Seeds",
        image: "/gingelly-oil.jpeg",
        accent: "#c8922a",
        bg: "rgba(200,146,42,0.04)",
    },
    {
        id: "groundnut",
        number: "02",
        name: "Groundnut Oil",
        secondary: "PEANUT OIL",
        description:
            "Naturally rich groundnut oil bringing wholesome goodness to everyday meals. Light, pure and full of natural character — a staple in every South Indian kitchen.",
        ingredient: "Groundnuts",
        image: "/groundnut-oil.jpeg",
        accent: "#8b6340",
        bg: "rgba(139,99,64,0.04)",
    },
    {
        id: "coconut",
        number: "03",
        name: "Coconut Oil",
        secondary: "VIRGIN COCONUT",
        description:
            "Pure coconut goodness with the familiar aroma and richness of tradition. Extracted from fresh coconuts, delivering nature's nourishment to your daily cooking.",
        ingredient: "Fresh Coconut",
        image: "/coconut-oil.jpeg",
        accent: "#4a5c3a",
        bg: "rgba(74,92,58,0.04)",
    },
];

export default function OilsShowcase() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll(".oil-card");
        if (!cards) return;

        // Use gsap.context() so cleanup only kills THIS component's triggers,
        // not the global hero frame-scrubbing ScrollTrigger
        const ctx = gsap.context(() => {
            cards.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                        delay: i * 0.12,
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="our-oils"
            ref={sectionRef}
            className="py-24 md:py-32 relative"
            style={{ background: "#111110" }}
            aria-labelledby="oils-heading"
        >
            {/* Section header */}
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <p
                    className="text-[10px] tracking-[0.4em] uppercase mb-4"
                    style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                >
                    The Collection
                </p>
                <h2
                    id="oils-heading"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    style={{
                        fontFamily: "var(--font-playfair)",
                        color: "#f0e8d5",
                        lineHeight: 1.1,
                    }}
                >
                    Our Traditional Oils
                </h2>
                <div className="gold-divider max-w-xs mx-auto mb-6" />
                <p
                    className="text-base opacity-60 max-w-xl mx-auto"
                    style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8", lineHeight: 1.7 }}
                >
                    Three timeless oils. One commitment to natural goodness.
                </p>
            </div>

            {/* Oils */}
            <div className="max-w-7xl mx-auto px-6 space-y-32">
                {OILS.map((oil, i) => (
                    <article
                        key={oil.id}
                        id={oil.id}
                        className={`oil-card flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            } gap-12 lg:gap-20 items-center`}
                    >
                        {/* Product image */}
                        <div className="relative flex-1 flex items-center justify-center group">
                            {/* Ambient glow — box-shadow avoids expensive CSS blur filter during scroll */}
                            <div
                                className="absolute inset-0 opacity-30 rounded-full scale-75"
                                style={{
                                    boxShadow: `0 0 80px 40px ${oil.accent}55`,
                                }}
                            />
                            {/* Number watermark */}
                            <div
                                className="absolute top-0 left-0 text-[120px] leading-none font-bold select-none pointer-events-none"
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    color: "rgba(200,146,42,0.05)",
                                    lineHeight: 0.9,
                                    zIndex: 0,
                                }}
                                aria-hidden="true"
                            >
                                {oil.number}
                            </div>
                            <div
                                className="relative w-60 md:w-72 lg:w-80 transition-transform duration-700 group-hover:scale-105"
                                style={{ zIndex: 1 }}
                            >
                                <Image
                                    src={oil.image}
                                    alt={`${oil.name} bottle — Sree Selvanayaki Amman`}
                                    width={320}
                                    height={460}
                                    className="object-contain w-full h-auto drop-shadow-2xl"
                                    priority={i === 0}
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 max-w-lg">
                            <div className="flex items-center gap-4 mb-6">
                                <span
                                    className="text-[10px] tracking-[0.35em] uppercase"
                                    style={{ color: oil.accent, fontFamily: "var(--font-inter)" }}
                                >
                                    {oil.number} — {oil.secondary}
                                </span>
                            </div>

                            <h3
                                className="text-4xl md:text-5xl font-bold mb-4"
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    color: "#f0e8d5",
                                    lineHeight: 1.1,
                                }}
                            >
                                {oil.name}
                            </h3>

                            <div
                                className="w-12 h-px mb-6"
                                style={{ background: oil.accent }}
                            />

                            <p
                                className="text-base leading-relaxed mb-8 opacity-70"
                                style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8" }}
                            >
                                {oil.description}
                            </p>

                            {/* Ingredient tag */}
                            <div
                                className="inline-flex items-center gap-3 px-4 py-2 mb-8"
                                style={{
                                    border: `1px solid ${oil.accent}33`,
                                    background: oil.bg,
                                    borderRadius: "1px",
                                }}
                            >
                                <span
                                    className="text-[9px] tracking-[0.3em] uppercase opacity-60"
                                    style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8" }}
                                >
                                    Key Ingredient
                                </span>
                                <span className="w-px h-3 opacity-30" style={{ background: oil.accent }} />
                                <span
                                    className="text-[10px] tracking-[0.2em] uppercase font-medium"
                                    style={{ color: oil.accent, fontFamily: "var(--font-inter)" }}
                                >
                                    {oil.ingredient}
                                </span>
                            </div>

                            {/* Qualities list */}
                            <div className="flex flex-wrap gap-2">
                                {["Natural", "Traditional", "Pure"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[9px] tracking-[0.25em] uppercase px-3 py-1.5 opacity-60"
                                        style={{
                                            border: "1px solid rgba(240,232,213,0.12)",
                                            fontFamily: "var(--font-inter)",
                                            color: "#d9c9a8",
                                            borderRadius: "1px",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
