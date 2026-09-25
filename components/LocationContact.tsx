"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                }
            });
        });
        return () => ctx.revert();
    }, []);

    const whatsAppNumber = "919965005891";

    return (
        <section ref={containerRef} className="py-16 bg-[#F9F7F2] px-6 lg:px-12 border-b border-[#E8E4D9]">
            <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">

                {/* Left Side: Why Choose Us */}
                <div className="lg:w-2/3 w-full">
                    <h2 className="text-xl md:text-2xl font-playfair text-[#4A3930] mb-8 uppercase tracking-wide">
                        WHY SREE SELVANAYAKI AMMAN?
                    </h2>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="text-2xl mt-1">🌿</div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930] mb-1">TRADITIONAL ROOTS</h4>
                                <p className="text-[10px] text-[#4A3930]/70 font-light leading-relaxed">A local mill focused on everyday essentials.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-2xl mt-1">🛡️</div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930] mb-1">QUALITY FOCUS</h4>
                                <p className="text-[10px] text-[#4A3930]/70 font-light leading-relaxed">Prepared and packed with care.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-2xl mt-1">🏺</div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930] mb-1">EVERYDAY ESSENTIALS</h4>
                                <p className="text-[10px] text-[#4A3930]/70 font-light leading-relaxed">Products for your daily needs.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-2xl mt-1">🤝</div>
                            <div>
                                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930] mb-1">DIRECT CUSTOMER ACCESS</h4>
                                <p className="text-[10px] text-[#4A3930]/70 font-light leading-relaxed">Order easily and speak with us directly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: CTA */}
                <div className="lg:w-1/3 w-full text-center lg:text-right flex flex-col items-center lg:items-end p-8 bg-white border border-[#E8E4D9] rounded shadow-sm">
                    <h2 className="text-3xl font-playfair text-[#4A3930] mb-3">
                        BRING THE MILL HOME.
                    </h2>
                    <p className="text-xs text-[#4A3930]/70 font-light mb-8 max-w-xs text-center lg:text-right">
                        Explore our seven everyday essentials or speak with us directly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 w-full justify-end">
                        <Link
                            href="/shop"
                            className="bg-[#183921] hover:bg-[#112918] text-white text-[10px] uppercase tracking-[0.2em] font-semibold py-3 px-6 rounded-full transition-colors flex-1 sm:flex-none text-center"
                        >
                            Shop Products →
                        </Link>
                        <a
                            href={`https://wa.me/${whatsAppNumber}?text=Hello!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-[#183921] text-[#183921] hover:bg-[#F2F7F4] text-[10px] uppercase tracking-[0.2em] font-semibold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-none"
                        >
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Order on WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
