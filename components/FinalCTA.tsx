"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
                }
            );
        });
        return () => ctx.revert();
    }, []);

    const scrollToOils = () =>
        document.querySelector("#our-oils")?.scrollIntoView({ behavior: "smooth" });
    const scrollToContact = () =>
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="final-cta"
            ref={sectionRef}
            className="py-32 md:py-40 relative overflow-hidden text-center"
            style={{ background: "#0e0e0c" }}
            aria-labelledby="cta-heading"
        >
            {/* Radial golden stage light */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(200,146,42,0.12) 0%, rgba(200,146,42,0.04) 40%, transparent 70%)",
                }}
                aria-hidden="true"
            />

            {/* Decorative top line */}
            <div className="gold-divider max-w-xs mx-auto mb-16" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <p
                    className="text-[10px] tracking-[0.5em] uppercase mb-6"
                    style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                >
                    Sree Selvanayaki Amman
                </p>

                <h2
                    ref={headingRef}
                    id="cta-heading"
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8"
                    style={{
                        fontFamily: "var(--font-playfair)",
                        color: "#f0e8d5",
                        lineHeight: 1.05,
                        textShadow: "0 0 60px rgba(200,146,42,0.15)",
                    }}
                >
                    Bring Tradition
                    <br />
                    <em>Home.</em>
                </h2>

                <p
                    className="text-base md:text-lg opacity-60 mb-12 max-w-md mx-auto"
                    style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8", lineHeight: 1.7 }}
                >
                    Discover authentic oils made for everyday life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Primary CTA — golden fill with shine */}
                    <button
                        ref={btnRef}
                        onClick={scrollToOils}
                        aria-label="Explore our traditional oils"
                        className="relative overflow-hidden px-10 py-4 text-[11px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0c]"
                        style={{
                            background: "linear-gradient(135deg, #c8922a 0%, #e8b84b 50%, #c8922a 100%)",
                            backgroundSize: "200% auto",
                            color: "#111110",
                            fontFamily: "var(--font-inter)",
                            borderRadius: "2px",
                            animation: "shine 3s ease-in-out infinite",
                            boxShadow: "0 0 30px rgba(200,146,42,0.25), 0 4px 20px rgba(0,0,0,0.4)",
                        }}
                    >
                        <span className="relative z-10">Explore Our Oils</span>
                    </button>

                    {/* Secondary CTA */}
                    <button
                        onClick={scrollToContact}
                        aria-label="Contact us"
                        className="px-10 py-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[rgba(200,146,42,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0e0c]"
                        style={{
                            border: "1px solid rgba(200,146,42,0.35)",
                            color: "#f0e8d5",
                            fontFamily: "var(--font-inter)",
                            borderRadius: "2px",
                        }}
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            <div className="gold-divider max-w-xs mx-auto mt-16" />
        </section>
    );
}
