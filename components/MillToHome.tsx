"use client";
import Image from "next/image";

export default function MillToHome() {
    return (
        <section id="our-story" className="w-full py-16 lg:py-24 bg-[#F9F7F2] font-inter">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-[#3A2F22] uppercase tracking-wide mb-6 leading-tight max-w-md">
                            From Our Mill<br />To Your Home
                        </h2>
                        <p className="text-[#3A2F22] text-sm md:text-base leading-relaxed mb-8 max-w-md">
                            Sree Selvanayaki Amman Oil & Flour Mill is based in Pidariyur, Erode, Tamil Nadu. We offer traditional oils, natural powders and everyday essentials with a focus on quality and customer trust.
                        </p>
                        <a href="#about" className="bg-[#183921] hover:bg-[#112918] text-[#F9F7F2] text-[11px] font-medium px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 uppercase tracking-widest">
                            Our Story <span>→</span>
                        </a>
                    </div>

                    {/* Right: Traditional Image */}
                    <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] relative rounded-xl overflow-hidden shadow-2xl">
                        <Image
                            src="/groundnut oil.jpeg" /* using available image as placeholder for rural setting */
                            alt="Traditional Mill Setting"
                            fill
                            className="object-cover mix-blend-multiply opacity-80"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
