"use client";
import { useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";

const TESTIMONIALS = [
    { name: "Priya R.", location: "Erode", rating: 5, text: "The groundnut oil is absolutely pure and has that authentic smell we used to get from village mills. My family loves it!" },
    { name: "Karthik S.", location: "Coimbatore", rating: 5, text: "Ordered the gingelly oil and health mix powder together. Both are excellent quality. Fast delivery too." },
    { name: "Meena V.", location: "Salem", rating: 5, text: "The shikakai powder is great — very natural and my hair feels so soft after using it. Will definitely reorder." },
    { name: "Rajan M.", location: "Tirupur", rating: 5, text: "Been using their coconut oil for cooking for 6 months now. The quality and taste are consistently excellent." },
];

function Stars({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < count ? "text-[#B88745]" : "text-[#2B1812]/20"}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 4500);
        return () => clearInterval(id);
    }, []);

    const t = TESTIMONIALS[active];

    return (
        <section className="bg-[#F7F1E5] py-20 px-4" aria-label="Customer testimonials">
            <div className="container-narrow text-center">
                <SectionHeading
                    eyebrow="Testimonials"
                    title={"Trusted by\nFamilies Across TN"}
                    align="center"
                />

                <div className="mt-10 relative min-h-[160px] flex flex-col items-center justify-center">
                    <div key={active} className="animate-fade-in">
                        <Stars count={t.rating} />
                        <blockquote className="font-cormorant text-2xl italic text-[#2B1812]/80 mt-4 mb-5 max-w-xl mx-auto leading-relaxed">
                            &ldquo;{t.text}&rdquo;
                        </blockquote>
                        <p className="font-inter text-[11px] font-bold tracking-widest uppercase text-[#2B1812]/50">
                            — {t.name}, {t.location}
                        </p>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial navigation">
                    {TESTIMONIALS.map((_, i) => (
                        <button
                            key={i}
                            role="tab"
                            aria-selected={i === active}
                            onClick={() => setActive(i)}
                            className={`rounded-full transition-all ${i === active ? "w-6 h-2 bg-[#B88745]" : "w-2 h-2 bg-[#B88745]/30 hover:bg-[#B88745]/60"}`}
                            aria-label={`Testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
