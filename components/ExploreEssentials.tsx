"use client";
import Image from "next/image";

export default function ExploreEssentials() {
    return (
        <section className="w-full py-16 lg:py-24 bg-[#F9F7F2] font-inter">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-12 flex justify-between items-end border-b pb-4 border-[#3A2F22]/10">
                    <div>
                        <h2 className="text-3xl md:text-[40px] font-playfair font-bold text-[#3A2F22] uppercase tracking-wide mb-2">
                            Explore Our Essentials
                        </h2>
                        <p className="text-[#3A2F22]/70 text-sm">
                            Seven everyday essentials from Sree Selvanayaki Amman Oil & Flour Mill.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Oils Card */}
                    <div className="flex-1 bg-[#334226] text-[#F9F7F2] rounded-xl overflow-hidden relative group min-h-[400px] flex items-center p-12">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/groundnut oil.jpeg"
                                alt="Traditional Oils"
                                fill
                                className="object-cover opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="relative z-10 w-full flex justify-end">
                            <div className="max-w-[280px]">
                                <h3 className="text-3xl font-playfair font-bold tracking-widest uppercase mb-4 text-[#F9F7F2]">Traditional<br />Oils</h3>
                                <ul className="space-y-2 mb-8 text-[#E8E4D9]">
                                    <li className="text-lg">Groundnut Oil</li>
                                    <li className="text-lg">Gingelly Oil</li>
                                    <li className="text-lg">Coconut Oil</li>
                                </ul>
                                <a href="#products" className="inline-flex items-center gap-2 border border-[#F9F7F2] text-[#F9F7F2] px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#F9F7F2] hover:text-[#334226] transition-colors">
                                    Explore Oils <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Powders Card */}
                    <div className="flex-1 bg-[#4A3930] text-[#F9F7F2] rounded-xl overflow-hidden relative group min-h-[400px] flex items-center p-12">
                        <div className="absolute inset-0 z-0">
                            {/* We don't have a specific combined powders image, but we can reuse a background or style. We'll use a soft color block for now or placeholder */}
                        </div>
                        <div className="relative z-10 w-full flex justify-end">
                            <div className="max-w-[280px]">
                                <h3 className="text-3xl font-playfair font-bold tracking-widest uppercase mb-4 text-[#F9F7F2]">Powders</h3>
                                <ul className="space-y-2 mb-8 text-[#E8E4D9]">
                                    <li className="text-lg">Turmeric Powder</li>
                                    <li className="text-lg">Shikakai Powder</li>
                                    <li className="text-lg">Green Gram Powder</li>
                                    <li className="text-lg">Health Mix Powder</li>
                                </ul>
                                <a href="#products" className="inline-flex items-center gap-2 border border-[#F9F7F2] text-[#F9F7F2] px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#F9F7F2] hover:text-[#4A3930] transition-colors">
                                    Explore Powders <span>→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
