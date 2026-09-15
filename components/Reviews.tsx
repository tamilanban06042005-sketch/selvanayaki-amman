"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
    {
        name: "_R.Kavyashri",
        when: "a week ago",
        rating: 5,
        text: "Pure and authentic! You can smell the freshness. Best oil mill in 1010 colony..",
        initials: "RK",
        color: "#c8922a",
    },
    {
        name: "Krithika U R",
        when: "2 months ago",
        rating: 5,
        text: "Very hygienic and product quality is awesome. Customer service is highly satisfactory.",
        initials: "KU",
        color: "#8b6340",
    },
    {
        name: "Gopal Krishnan",
        when: "a month ago",
        rating: 5,
        text: "Good quality of oil and other products.",
        initials: "GK",
        color: "#4a7c5a",
    },
    {
        name: "sakthikumararaja Thangarasu",
        when: "2 months ago",
        rating: 5,
        text: "Quality product and good service",
        initials: "ST",
        color: "#c8922a",
    },
    {
        name: "Meiyarasu Eswaran",
        when: "2 months ago",
        rating: 5,
        text: "Customer service is excellent",
        initials: "ME",
        color: "#8b6340",
    },
    {
        name: "RADHAI PALANISAMY",
        when: "2 months ago",
        rating: 5,
        text: "masala, oil, flour are all good",
        initials: "RP",
        color: "#4a7c5a",
    },
    {
        name: "GOBIKA A",
        when: "2 months ago",
        rating: 5,
        text: "Good quality and hygiene products",
        initials: "GA",
        color: "#c8922a",
    },
    {
        name: "Rx RAGU",
        when: "2 months ago",
        rating: 5,
        text: "Always quick process. Must visit shop",
        initials: "RR",
        color: "#8b6340",
    },
    {
        name: "Premkumar s.",
        when: "3 months ago",
        rating: 5,
        text: "Nice place to buy original products.",
        initials: "PS",
        color: "#4a7c5a",
    },
    {
        name: "103 Sujith S",
        when: "a month ago",
        rating: 5,
        text: "Good products.... no artificial products, full of natural products",
        initials: "SS",
        color: "#c8922a",
    },
    {
        name: "Dhinesh Raj",
        when: "3 months ago",
        rating: 5,
        text: "Good quality products. Good service",
        initials: "DR",
        color: "#8b6340",
    },
    {
        name: "Abarna Alice",
        when: "2 months ago",
        rating: 5,
        text: "Low price good quality must buy",
        initials: "AA",
        color: "#4a7c5a",
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: count }).map((_, i) => (
                <svg
                    key={i}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="#c8922a"
                    aria-hidden="true"
                >
                    <path d="M6 0l1.5 4.5H12L8.25 7.25 9.75 12 6 9.25 2.25 12l1.5-4.75L0 4.5h4.5z" />
                </svg>
            ))}
        </div>
    );
}

export default function Reviews() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                ".reviews-header",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".reviews-header",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Cards stagger
            const cards = sectionRef.current?.querySelectorAll(".review-card");
            cards?.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: (i % 3) * 0.12,
                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });

            // Summary row
            gsap.fromTo(
                ".reviews-summary",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".reviews-summary",
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="reviews"
            ref={sectionRef}
            className="py-24 md:py-32 relative"
            style={{ background: "#0e0e0c" }}
            aria-labelledby="reviews-heading"
        >
            {/* Background texture */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,146,42,0.04) 0%, transparent 60%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Header */}
                <div className="reviews-header text-center mb-16">
                    <p
                        className="text-[10px] tracking-[0.4em] uppercase mb-4"
                        style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                    >
                        Customer Voices
                    </p>
                    <h2
                        id="reviews-heading"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            color: "#f0e8d5",
                            lineHeight: 1.1,
                        }}
                    >
                        Trusted by Families
                        <br />
                        <em>Across Tamil Nadu</em>
                    </h2>
                    <div className="gold-divider max-w-xs mx-auto mb-6" />
                    <p
                        className="text-base opacity-60 max-w-xl mx-auto"
                        style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8", lineHeight: 1.7 }}
                    >
                        Generations of households have trusted our oils for authentic taste and uncompromising purity.
                    </p>
                </div>

                {/* Summary row */}
                <div
                    className="reviews-summary flex flex-wrap justify-center gap-10 mb-16 pb-16"
                    style={{ borderBottom: "1px solid rgba(200,146,42,0.12)" }}
                >
                    {[
                        { value: "12", label: "Google Reviews" },
                        { value: "5.0 ★", label: "Average Rating" },
                        { value: "100%", label: "Five Star Reviews" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div
                                className="text-4xl md:text-5xl font-bold mb-1"
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    color: "#c8922a",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div
                                className="text-[10px] tracking-[0.3em] uppercase opacity-50"
                                style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8" }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Review cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REVIEWS.map((review, i) => (
                        <article
                            key={i}
                            className="review-card relative flex flex-col p-7"
                            style={{
                                background: "rgba(255,255,255,0.025)",
                                border: "1px solid rgba(240,232,213,0.07)",
                                borderRadius: "3px",
                            }}
                        >
                            {/* Top accent line */}
                            <div
                                className="absolute top-0 left-7 right-7 h-px"
                                style={{
                                    background: `linear-gradient(90deg, transparent, ${review.color}55, transparent)`,
                                }}
                            />

                            {/* Quote mark */}
                            <div
                                className="text-5xl leading-none mb-4 select-none"
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    color: `${review.color}33`,
                                    lineHeight: 0.8,
                                }}
                                aria-hidden="true"
                            >
                                "
                            </div>

                            {/* Review text */}
                            <p
                                className="text-sm leading-relaxed mb-6 flex-1 opacity-75"
                                style={{ fontFamily: "var(--font-inter)", color: "#f0e8d5" }}
                            >
                                {review.text}
                            </p>

                            {/* Google badge */}
                            <div className="mb-5 flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 24 24" aria-label="Google" role="img">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span
                                    className="text-[9px] tracking-[0.2em] uppercase opacity-50"
                                    style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8" }}
                                >
                                    Google Review
                                </span>
                            </div>

                            {/* Divider */}
                            <div
                                className="h-px mb-5"
                                style={{ background: "rgba(240,232,213,0.07)" }}
                            />

                            {/* Footer */}
                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div
                                    className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0"
                                    style={{
                                        background: `${review.color}22`,
                                        border: `1px solid ${review.color}44`,
                                        color: review.color,
                                        fontFamily: "var(--font-inter)",
                                    }}
                                >
                                    {review.initials}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div
                                        className="text-sm font-medium truncate"
                                        style={{ fontFamily: "var(--font-inter)", color: "#f0e8d5" }}
                                    >
                                        {review.name}
                                    </div>
                                    <div
                                        className="text-[10px] opacity-40 truncate"
                                        style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8" }}
                                    >
                                        {review.when} · Google Maps
                                    </div>
                                </div>
                                <StarRating count={review.rating} />
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom note */}
                <p
                    className="text-center text-[10px] tracking-[0.25em] uppercase opacity-30 mt-12"
                    style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8" }}
                >
                    Verified Google Reviews · Sree Selvanayaki Amman Oil &amp; Flour Mill
                </p>
            </div>
        </section>
    );
}
