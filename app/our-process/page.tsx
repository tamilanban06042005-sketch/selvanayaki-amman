import SectionHeading from "@/components/SectionHeading";
import ProcessSection from "@/components/ProcessSection";
import WaveSection from "@/components/WaveSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Process — From Mill to Home",
    description: "Discover the traditional 6-step process behind the purity and quality of every product at Sree Selvanayaki Amman Oil & Flour Mill.",
};

export default function OurProcessPage() {
    return (
        <div className="bg-[#F7F1E5]">
            {/* Hero banner */}
            <div className="bg-[#064B36] pt-36 pb-20 px-4 text-center">
                <SectionHeading
                    eyebrow="Our Process"
                    title={"Crafted with\nCare & Tradition"}
                    subtitle="Six careful steps from raw ingredient to your home."
                    align="center"
                    light
                />
            </div>

            <WaveSection variant="green-to-cream" />
            <ProcessSection />
            <WaveSection variant="cream-to-green" />

            {/* Quality commitment */}
            <div className="bg-[#064B36] py-20 px-4">
                <div className="container-narrow text-center">
                    <SectionHeading eyebrow="Our Promise" title={"Quality You\nCan Trust"} align="center" light />
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                            { icon: "🌿", title: "No Chemicals", desc: "We never use chemical solvents or synthetic preservatives." },
                            { icon: "🔬", title: "Batch Tested", desc: "Each batch is checked for purity, aroma and consistency." },
                            { icon: "📦", title: "Freshly Packed", desc: "Packed immediately after processing to preserve freshness." },
                        ].map((item) => (
                            <div key={item.title} className="bg-[#F7F1E5]/[0.07] border border-[#B88745]/20 rounded-2xl p-6 text-center">
                                <span className="text-2xl block mb-3" aria-hidden="true">{item.icon}</span>
                                <h3 className="font-cormorant font-bold text-xl text-[#F7F1E5] mb-2">{item.title}</h3>
                                <p className="font-inter text-xs text-[#F7F1E5]/60 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Link href="/shop" className="inline-flex items-center gap-2 bg-[#F7F1E5] text-[#164A32] px-8 py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.18em] uppercase hover:bg-white transition-all shadow-lg">
                            Shop Our Products →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
