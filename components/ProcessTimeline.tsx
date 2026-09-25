"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
    { step: "01", label: "SELECT", icon: "🌱" },
    { step: "02", label: "PREPARE", icon: "💧" },
    { step: "03", label: "PROCESS", icon: "⚙️" },
    { step: "04", label: "QUALITY CHECK", icon: "✔️" },
    { step: "05", label: "PACK", icon: "📦" },
    { step: "06", label: "DELIVER", icon: "🚚" }, // Assuming simple emoji icons or SVGs for now
];

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            stepsRef.current.forEach((step, index) => {
                if (!step) return;
                gsap.fromTo(step,
                    { y: 30, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 80%",
                        }
                    }
                );
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="process" className="py-24 bg-[#F5F2EB] px-6 border-b border-[#E8E4D9]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                {/* Left side: Text/Story */}
                <div className="lg:w-1/3">
                    <h2 className="text-3xl md:text-5xl font-playfair text-[#4A3930] mb-6 leading-tight">
                        FROM OUR MILL<br />TO YOUR HOME
                    </h2>
                    <p className="text-[#4A3930]/80 text-sm md:text-base leading-relaxed font-inter font-light mb-8 max-w-sm">
                        Sree Selvanayaki Amman Oil & Flour Mill is based in Pidariyur, Erode, Tamil Nadu. We offer traditional oils, natural powders and everyday essentials with a focus on quality and customer trust.
                    </p>
                    <a href="/about" className="inline-flex items-center gap-2 bg-[#183921] text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-semibold hover:bg-[#112918] transition-colors">
                        Our Story <span aria-hidden="true">→</span>
                    </a>
                </div>

                {/* Right side: Timeline */}
                <div className="lg:w-2/3 w-full">
                    <h3 className="text-xl md:text-2xl font-playfair text-[#4A3930] mb-12 lg:mb-16">
                        HOW IT COMES TO YOU
                    </h3>

                    <div className="relative flex justify-between items-start w-full overflow-x-auto pb-4 hide-scrollbar">
                        {/* Connecting Line */}
                        <div className="absolute top-6 left-8 right-8 h-px bg-[#4A3930]/20 border-b border-dashed border-[#4A3930]/30 hidden md:block"></div>

                        {PROCESS_STEPS.map((s, i) => (
                            <div
                                key={s.step}
                                ref={el => { stepsRef.current[i] = el; }}
                                className="relative flex flex-col items-center min-w-[80px] z-10"
                            >
                                {/* Circular Icon Wrapper */}
                                <div className="w-12 h-12 bg-[#F5F2EB] rounded-full border border-[#4A3930]/20 flex items-center justify-center text-xl mb-4 text-[#4A3930]">
                                    {s.icon}
                                </div>
                                <div className="text-[10px] font-playfair italic text-[#4A3930]/80 mb-1">
                                    {s.step}
                                </div>
                                <div className="text-[9px] font-bold uppercase tracking-widest text-[#4A3930] text-center w-full">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
