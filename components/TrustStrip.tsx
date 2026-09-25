"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TRUST_ITEMS = [
    "FROM OUR MILL",
    "CAREFULLY SELECTED INGREDIENTS",
    "HYGIENICALLY PACKED",
    "FSSAI LICENSED",
];

export default function TrustStrip() {
    const stripRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!stripRef.current) return;

        // Simple GSAP horizontal marquee
        const ctx = gsap.context(() => {
            gsap.to(stripRef.current, {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1,
            });
        });

        return () => ctx.revert();
    }, []);

    // Double the array for seamless looping
    const displayItems = [...TRUST_ITEMS, ...TRUST_ITEMS];

    return (
        <section className="bg-brand-charcoal-deep text-brand-cream-ivory py-5 border-y border-brand-brown-heritage/30 overflow-hidden w-full relative">
            <div
                ref={stripRef}
                className="flex items-center whitespace-nowrap min-w-max"
            >
                {displayItems.map((item, index) => (
                    <div key={index} className="flex items-center pl-10 md:pl-16">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green-primary mr-6"></span>
                        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-cream-beige/90">
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
