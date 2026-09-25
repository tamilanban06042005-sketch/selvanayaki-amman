"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Categories() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const catsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                }
            });

            if (catsRef.current) {
                gsap.from(catsRef.current.children, {
                    y: 100,
                    opacity: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: catsRef.current,
                        start: "top 75%",
                    }
                });
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-brand-cream-soft px-6 lg:px-12">
            <div className="max-w-[1600px] mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" ref={titleRef}>
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-[#4A3930] mb-2 uppercase tracking-wide">
                            EXPLORE OUR ESSENTIALS
                        </h2>
                        <span className="block text-sm md:text-base font-inter text-[#4A3930]/70">
                            Seven everyday essentials from Sree Selvanayaki Amman Oil & Flour Mill.
                        </span>
                    </div>
                    {/* Placeholder for carousel arrows if needed, as seen in mockup */}
                    <div className="flex gap-4 hidden md:flex">
                        <button aria-label="Previous" className="w-10 h-10 rounded-full border border-[#4A3930]/20 flex items-center justify-center text-[#4A3930] hover:bg-[#4A3930] hover:text-white transition-colors">
                            <span aria-hidden="true" className="transform rotate-180">→</span>
                        </button>
                        <button aria-label="Next" className="w-10 h-10 rounded-full border border-[#4A3930]/20 flex items-center justify-center text-[#4A3930] hover:bg-[#4A3930] hover:text-white transition-colors">
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>

                <div ref={catsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Oils Category */}
                    <div className="group relative h-[400px] md:h-[500px] bg-[#3B2920] rounded-[4px] overflow-hidden flex flex-col md:flex-row p-8 md:p-12 shadow-sm border border-[#4A3930]/10">
                        <Image
                            src="/gingelly-oil.jpeg"
                            alt="Traditional Oils Background"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-30 mix-blend-luminosity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2A3720]/80 via-transparent to-transparent"></div>
                        <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-end md:justify-center">
                            <h3 className="text-4xl md:text-5xl font-playfair mb-4 text-[#F5F2EB] uppercase tracking-wide leading-tight">
                                TRADITIONAL<br />OILS
                            </h3>
                            <ul className="text-sm font-inter text-[#E8E4D9]/80 mb-8 space-y-1">
                                <li>Groundnut Oil</li>
                                <li>Gingelly Oil</li>
                                <li>Coconut Oil</li>
                            </ul>
                            <Link href="/#products" className="inline-flex w-fit bg-transparent border border-[#F5F2EB]/50 hover:bg-[#F5F2EB] hover:text-[#4A3930] text-[#F5F2EB] text-[10px] uppercase tracking-[0.2em] font-semibold py-3 px-6 rounded-full transition-colors">
                                Explore Oils →
                            </Link>
                        </div>
                    </div>

                    {/* Powders Category */}
                    <div className="group relative h-[400px] md:h-[500px] bg-[#3A2F22] rounded-[4px] overflow-hidden flex flex-col md:flex-row p-8 md:p-12 shadow-sm border border-[#4A3930]/10">
                        <Image
                            src="/health-mix.png"
                            alt="Powders Background"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-[#372A20]/90 via-[#372A20]/50 to-transparent"></div>
                        <div className="relative z-10 w-full md:w-1/2 md:ml-auto flex flex-col justify-end md:justify-center md:items-end md:text-right">
                            <h3 className="text-4xl md:text-5xl font-playfair mb-4 text-[#F5F2EB] uppercase tracking-wide leading-tight text-right w-full">
                                POWDERS
                            </h3>
                            <ul className="text-sm font-inter text-[#E8E4D9]/80 mb-8 space-y-1 text-right w-full">
                                <li>Turmeric Powder</li>
                                <li>Shikakai Powder</li>
                                <li>Green Gram Powder</li>
                                <li>Health Mix Powder</li>
                            </ul>
                            <Link href="/#products" className="inline-flex w-fit bg-[#183921] hover:bg-[#112918] border border-transparent text-[#F5F2EB] text-[10px] uppercase tracking-[0.2em] font-semibold py-3 px-6 rounded-full transition-colors">
                                Explore Powders →
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
