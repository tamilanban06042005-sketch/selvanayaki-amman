"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PANELS = [
    {
        number: "01",
        title: "Traditional Goodness",
        description:
            "Time-tested methods passed through generations, preserving the authentic character of every oil we produce.",
        icon: "◈",
    },
    {
        number: "02",
        title: "Carefully Selected Ingredients",
        description:
            "We source only the finest sesame seeds, groundnuts and coconuts — chosen for natural quality and freshness.",
        icon: "◉",
    },
    {
        number: "03",
        title: "Quality You Can Trust",
        description:
            "Every batch is made with care and attention. Pure, natural, without compromise — for families who deserve the best.",
        icon: "◎",
    },
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            panelRefs.current.forEach((panel, i) => {
                if (!panel) return;
                gsap.fromTo(
                    panel,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1, y: 0, duration: 1, ease: "power3.out",
                        delay: i * 0.18,
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
            id="why-us"
            ref={sectionRef}
            className="py-24 md:py-32"
            style={{ background: "#0e0e0c" }}
            aria-labelledby="why-heading"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p
                        className="text-[10px] tracking-[0.4em] uppercase mb-4"
                        style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                    >
                        Our Promise
                    </p>
                    <h2
                        id="why-heading"
                        className="text-4xl md:text-5xl font-bold mb-4"
                        style={{ fontFamily: "var(--font-playfair)", color: "#f0e8d5", lineHeight: 1.1 }}
                    >
                        Why Families Choose Us
                    </h2>
                    <div className="gold-divider max-w-xs mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PANELS.map((panel, i) => (
                        <div
                            key={panel.number}
                            ref={(el) => { panelRefs.current[i] = el; }}
                            className="group relative p-10 transition-transform duration-500 hover:-translate-y-2 cursor-default"
                            style={{
                                background: "rgba(255,255,255,0.025)",
                                border: "1px solid rgba(200,146,42,0.15)",
                                backdropFilter: "blur(12px)",
                                WebkitBackdropFilter: "blur(12px)",
                            }}
                        >
                            {/* Corner accents */}
                            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-amber-gold opacity-40" />
                            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-amber-gold opacity-40" />
                            <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-amber-gold opacity-40" />
                            <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-amber-gold opacity-40" />

                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                style={{ background: "rgba(200,146,42,0.04)" }}
                            />

                            <div
                                className="text-3xl mb-6 opacity-40 select-none"
                                style={{ color: "#c8922a" }}
                                aria-hidden="true"
                            >
                                {panel.icon}
                            </div>

                            <span
                                className="block text-[9px] tracking-[0.4em] uppercase mb-3 opacity-50"
                                style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                            >
                                {panel.number}
                            </span>

                            <h3
                                className="text-xl md:text-2xl font-bold mb-4"
                                style={{ fontFamily: "var(--font-playfair)", color: "#f0e8d5", lineHeight: 1.2 }}
                            >
                                {panel.title}
                            </h3>

                            <div
                                className="w-8 h-px mb-5"
                                style={{ background: "rgba(200,146,42,0.4)" }}
                            />

                            <p
                                className="text-sm leading-relaxed opacity-60"
                                style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8", lineHeight: 1.7 }}
                            >
                                {panel.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
