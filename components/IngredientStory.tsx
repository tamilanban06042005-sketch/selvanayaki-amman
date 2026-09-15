"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INGREDIENTS = [
    {
        name: "Sesame",
        tagline: "Traditional richness",
        description:
            "Carefully selected sesame seeds pressed the traditional way to preserve their natural depth and aroma.",
        emoji: "🌾",
        accent: "#c8922a",
    },
    {
        name: "Groundnut",
        tagline: "Wholesome goodness",
        description:
            "Ripe groundnuts sourced for their natural richness, bringing everyday warmth to every dish.",
        emoji: "🥜",
        accent: "#8b6340",
    },
    {
        name: "Coconut",
        tagline: "Natural nourishment",
        description:
            "Fresh coconuts at their peak, expressing the full tropical richness of nature's finest ingredient.",
        emoji: "🥥",
        accent: "#4a5c3a",
    },
];

export default function IngredientStory() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const colRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            colRefs.current.forEach((col, i) => {
                if (!col) return;
                gsap.fromTo(
                    col,
                    { opacity: 0, y: 50, scale: 0.97 },
                    {
                        opacity: 1, y: 0, scale: 1,
                        duration: 1.1, ease: "power3.out",
                        delay: i * 0.15,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section
            className="py-24 md:py-32"
            ref={sectionRef}
            style={{ background: "#111110" }}
            aria-labelledby="ingredients-heading"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p
                        className="text-[10px] tracking-[0.4em] uppercase mb-4"
                        style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                    >
                        The Source
                    </p>
                    <h2
                        id="ingredients-heading"
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "var(--font-playfair)", color: "#f0e8d5", lineHeight: 1.1 }}
                    >
                        Nature Is Our First Ingredient
                    </h2>
                    <div className="gold-divider max-w-xs mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
                    {INGREDIENTS.map((ing, i) => (
                        <div
                            key={ing.name}
                            ref={(el) => { colRefs.current[i] = el; }}
                            className="group relative p-10 md:p-12 text-center"
                            style={{
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.04)",
                            }}
                        >
                            {/* Hover accent */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: `${ing.accent}08` }}
                            />

                            <div
                                className="text-5xl mb-6"
                                aria-hidden="true"
                                role="img"
                            >
                                {ing.emoji}
                            </div>

                            <h3
                                className="text-2xl md:text-3xl font-bold mb-2"
                                style={{ fontFamily: "var(--font-playfair)", color: "#f0e8d5" }}
                            >
                                {ing.name}
                            </h3>

                            <div
                                className="w-8 h-px mx-auto mb-4"
                                style={{ background: ing.accent }}
                            />

                            <p
                                className="text-[10px] tracking-[0.25em] uppercase mb-5"
                                style={{ color: ing.accent, fontFamily: "var(--font-inter)" }}
                            >
                                {ing.tagline}
                            </p>

                            <p
                                className="text-sm leading-relaxed opacity-60"
                                style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8", lineHeight: 1.7 }}
                            >
                                {ing.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
