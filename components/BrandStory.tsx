"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function BrandStory() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRef.current?.children || [], {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                }
            });

            gsap.from(imageRef.current, {
                scale: 0.9,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="our-story" className="py-24 md:py-32 bg-brand-charcoal-deep text-brand-cream-soft px-6 lg:px-12 border-y border-brand-brown-heritage/30">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Text Content */}
                <div ref={textRef} className="flex-1 max-w-2xl">
                    <span className="block text-[10px] tracking-[0.3em] font-semibold uppercase text-brand-green-primary mb-6">
                        OUR HERITAGE
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-10 leading-tight">
                        Rooted in tradition.<br className="hidden md:block" />
                        Made for today.
                    </h2>
                    <p className="text-brand-cream-beige/70 text-base md:text-lg leading-relaxed font-light mb-8">
                        We believe in the slow, meticulous art of extraction. At Sree Selvanayaki Amman, our products are crafted using traditional methods that naturally prevent nutrient degradation. No harsh chemicals, no artificial processes—just the unadulterated essence of the finest seeds, sourced ethically and packed cleanly in our Pidariyur mill.
                    </p>
                    <p className="text-brand-cream-beige/70 text-base md:text-lg leading-relaxed font-light mb-12">
                        Operating directly out of Pidariyur, Erode, we serve our customers with dedication and transparency, bringing everyday essentials right to your home.
                    </p>

                    <Link href="/about" className="group inline-flex items-center gap-4 border-b border-brand-green-primary pb-2 text-[11px] uppercase tracking-[0.25em] font-semibold text-brand-cream-ivory hover:text-brand-green-primary transition-colors">
                        <span>Discover Our Legacy</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>

                {/* Hero Image */}
                <div ref={imageRef} className="flex-1 w-full max-w-md lg:max-w-none relative aspect-[4/5] object-cover bg-brand-charcoal overflow-hidden p-4 rounded-sm border border-brand-charcoal-light">
                    <div className="absolute inset-4 overflow-hidden bg-brand-charcoal-deep">
                        {/* We use a placeholder since user will provide their own photos later, we use an existing image if available or just fallback to color/texture */}
                        <Image
                            src="/coconut-oil.jpeg"
                            alt="Traditional Mill Process"
                            fill
                            className="object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-brand-charcoal-deep/20"></div>
                    </div>
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-brown-heritage opacity-50"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-brown-heritage opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-brown-heritage opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-brown-heritage opacity-50"></div>
                </div>

            </div>
        </section>
    );
}
