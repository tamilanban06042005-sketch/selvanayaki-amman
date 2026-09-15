"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const OILS = [
    { name: "Gingelly Oil", image: "/gingelly-oil.jpeg", accent: "#c8922a", ingredient: "Sesame" },
    { name: "Groundnut Oil", image: "/groundnut-oil.jpeg", accent: "#8b6340", ingredient: "Groundnut" },
    { name: "Coconut Oil", image: "/coconut-oil.jpeg", accent: "#4a5c3a", ingredient: "Coconut" },
];

export default function ThreeOilsSignature() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const bottleRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
                }
            );

            bottleRefs.current.forEach((bottle, i) => {
                if (!bottle) return;
                gsap.fromTo(
                    bottle,
                    { opacity: 0, y: 60 + i * 10, scale: 0.93 },
                    {
                        opacity: 1, y: 0, scale: 1,
                        duration: 1.3, ease: "power3.out",
                        delay: i * 0.2,
                        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            ref={sectionRef}
            style={{ background: "#111110" }}
            aria-labelledby="signature-heading"
        >
            {/* Radial ambient stage light */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(200,146,42,0.08) 0%, transparent 70%)",
                }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div ref={headingRef} className="text-center mb-20">
                    <p
                        className="text-[10px] tracking-[0.4em] uppercase mb-4"
                        style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                    >
                        The Collection
                    </p>
                    <h2
                        id="signature-heading"
                        className="text-4xl md:text-6xl lg:text-7xl font-bold"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            color: "#f0e8d5",
                            lineHeight: 1.08,
                        }}
                    >
                        Three Oils.
                        <br />
                        <em>One Tradition.</em>
                    </h2>
                    <div className="gold-divider max-w-xs mx-auto mt-8" />
                </div>

                {/* Three bottles */}
                <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-0">
                    {OILS.map((oil, i) => (
                        <div
                            key={oil.name}
                            ref={(el) => { bottleRefs.current[i] = el; }}
                            className={`relative flex flex-col items-center group ${i === 1 ? "z-10 md:-mx-4" : "md:scale-90"
                                } transition-transform duration-700 hover:scale-105`}
                        >
                            {/* Glow behind bottle */}
                            <div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-20 blur-2xl opacity-30"
                                style={{ background: oil.accent }}
                                aria-hidden="true"
                            />

                            <Image
                                src={oil.image}
                                alt={`${oil.name} — Sree Selvanayaki Amman`}
                                width={i === 1 ? 280 : 220}
                                height={i === 1 ? 420 : 340}
                                className="object-contain relative z-10 drop-shadow-2xl"
                                priority
                            />

                            {/* Label */}
                            <div className="mt-6 text-center relative z-10">
                                <p
                                    className="text-[9px] tracking-[0.35em] uppercase mb-1"
                                    style={{ color: oil.accent, fontFamily: "var(--font-inter)" }}
                                >
                                    {oil.ingredient}
                                </p>
                                <p
                                    className="text-sm font-semibold"
                                    style={{ fontFamily: "var(--font-playfair)", color: "#f0e8d5" }}
                                >
                                    {oil.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom tagline */}
                <p
                    className="text-center mt-16 text-base opacity-50"
                    style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8", letterSpacing: "0.05em" }}
                >
                    Natural ingredients. Traditional process. Timeless taste.
                </p>
            </div>
        </section>
    );
}
