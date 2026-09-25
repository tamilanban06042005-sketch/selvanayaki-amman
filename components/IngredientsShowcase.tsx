"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const INGREDIENTS = [
    { name: "Groundnuts", icon: "/groundnut-oil.jpeg" },
    { name: "Sesame", icon: "/gingelly-oil.jpeg" },
    { name: "Coconut", icon: "/coconut-oil.jpeg" },
    { name: "Turmeric", icon: "/turmeric.png" },
    { name: "Shikakai", icon: "/shikakai.png" },
    { name: "Green Gram", icon: "/green-gram.png" },
    { name: "Grains", icon: "/health-mix.png" },
];

export default function IngredientsShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (gridRef.current) {
                gsap.from(gridRef.current.children, {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.6,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                });
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#183921] py-12 px-6 lg:px-12 text-[#E7E2D5] overflow-hidden border-y-[4px] border-[#4A3930]">
            <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row items-center gap-8 xl:gap-16">

                <div className="xl:w-1/4 flex-shrink-0 text-center xl:text-left">
                    <h2 className="text-xl md:text-2xl font-playfair uppercase tracking-wide leading-snug">
                        THE INGREDIENTS<br />BEHIND OUR PRODUCTS
                    </h2>
                </div>

                <div
                    ref={gridRef}
                    className="xl:w-3/4 flex justify-between gap-4 w-full overflow-x-auto hide-scrollbar pb-4 xl:pb-0 px-4 xl:px-0"
                >
                    {INGREDIENTS.map((ing) => (
                        <div key={ing.name} className="flex flex-col items-center min-w-[80px] md:min-w-[100px] group cursor-default">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-[40%] overflow-hidden mb-3 relative bg-[#112918] flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300">
                                <Image
                                    src={ing.icon}
                                    alt={ing.name}
                                    fill
                                    className="object-cover opacity-80 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-300"
                                />
                            </div>
                            <span className="text-[10px] md:text-xs font-inter text-[#E7E2D5]">{ing.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
