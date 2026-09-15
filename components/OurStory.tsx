"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurStory() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                leftRef.current,
                { opacity: 0, x: -40 },
                {
                    opacity: 1, x: 0, duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
                }
            );
            gsap.fromTo(
                rightRef.current,
                { opacity: 0, x: 40 },
                {
                    opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.15,
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="our-story"
            ref={sectionRef}
            className="py-24 md:py-32 relative overflow-hidden"
            style={{ background: "#0e0e0c" }}
            aria-labelledby="story-heading"
        >
            {/* Subtle background element */}
            <div
                className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "url('/gingelly-oil.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(40px) saturate(0.3)",
                }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Label */}
                <p
                    className="text-[10px] tracking-[0.4em] uppercase mb-16 text-center"
                    style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                >
                    Our Heritage
                </p>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    {/* Left — pull quote */}
                    <div ref={leftRef} className="lg:w-5/12">
                        <h2
                            id="story-heading"
                            className="text-5xl md:text-6xl lg:text-7xl font-bold italic leading-tight"
                            style={{
                                fontFamily: "var(--font-playfair)",
                                color: "#f0e8d5",
                                lineHeight: 1.08,
                            }}
                        >
                            Rooted in<br />Tradition
                        </h2>
                        <div
                            className="w-16 h-px mt-8 mb-8"
                            style={{ background: "linear-gradient(90deg, #c8922a, transparent)" }}
                        />
                        {/* Tamil-inspired decorative glyph area */}
                        <div
                            className="text-4xl opacity-15 select-none"
                            style={{ fontFamily: "serif", color: "#c8922a", lineHeight: 1 }}
                            aria-hidden="true"
                        >
                            ◈
                        </div>
                    </div>

                    {/* Right — narrative text */}
                    <div ref={rightRef} className="lg:w-7/12">
                        <p
                            className="text-lg md:text-xl leading-relaxed mb-6"
                            style={{
                                fontFamily: "var(--font-inter)",
                                color: "#d9c9a8",
                                lineHeight: 1.8,
                                opacity: 0.85,
                            }}
                        >
                            Sree Selvanayaki Amman Oil & Flour Mill is built around a simple
                            idea — good food begins with good ingredients.
                        </p>
                        <p
                            className="text-base leading-relaxed mb-10"
                            style={{
                                fontFamily: "var(--font-inter)",
                                color: "#d9c9a8",
                                lineHeight: 1.8,
                                opacity: 0.65,
                            }}
                        >
                            From traditional oils to wholesome food products, we focus on
                            bringing familiar goodness to modern homes while respecting the
                            traditions that shaped our food. Every bottle carries the care of
                            hands that understand what natural quality truly means.
                        </p>

                        {/* Three pillars */}
                        <div className="grid grid-cols-3 gap-6">
                            {[
                                { label: "Traditional", sub: "Methods" },
                                { label: "Natural", sub: "Ingredients" },
                                { label: "Trusted", sub: "Quality" },
                            ].map((p) => (
                                <div key={p.label} className="text-center py-4 px-2" style={{ borderTop: "1px solid rgba(200,146,42,0.2)" }}>
                                    <div
                                        className="text-sm font-semibold mb-1"
                                        style={{ color: "#c8922a", fontFamily: "var(--font-playfair)" }}
                                    >
                                        {p.label}
                                    </div>
                                    <div
                                        className="text-[10px] tracking-[0.2em] uppercase opacity-50"
                                        style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8" }}
                                    >
                                        {p.sub}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
