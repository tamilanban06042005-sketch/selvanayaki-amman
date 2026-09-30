import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story — Sree Selvanayaki Amman Oil & Flour Mill",
    description: "Learn about the heritage and values behind Sree Selvanayaki Amman Oil & Flour Mill, based in Pidariyur, Erode.",
};

const VALUES = [
    { icon: "🌿", title: "Natural & Pure", desc: "No preservatives, additives or artificial agents in any of our products." },
    { icon: "🏭", title: "Own Mill", desc: "We own and operate our mill in Pidariyur — full control over quality." },
    { icon: "🛡️", title: "FSSAI Licensed", desc: "Operating under Lic. No. 22419058000081 for your safety and trust." },
    { icon: "📞", title: "Direct Service", desc: "Order directly from us on WhatsApp — transparent pricing, no middlemen." },
];

export default function OurStoryPage() {
    return (
        <div className="bg-[#F7F1E5] min-h-screen">

            {/* Hero */}
            <div className="bg-[#064B36] pt-36 pb-20 px-4 text-center">
                <SectionHeading
                    eyebrow="Our Story"
                    title={"From Our Mill\nto Your Home"}
                    subtitle="A family business dedicated to quality and tradition."
                    align="center"
                    light
                />
            </div>

            {/* Story content */}
            <div className="py-20 px-4">
                <div className="container-narrow">
                    <div className="space-y-6 font-cormorant text-xl text-[#2B1812]/75 leading-relaxed mb-12">
                        <p><strong className="font-bold text-[#2B1812]">Sree Selvanayaki Amman Oil &amp; Flour Mill</strong> is based in Pidariyur, Erode, Tamil Nadu. We have been serving families across the region with traditional oils and natural powders for everyday needs.</p>
                        <p>Our mill produces Groundnut Oil, Gingelly Oil, and Coconut Oil alongside a range of everyday powders including Health Mix, Turmeric, Green Gram and Shikakai powders — all produced with care and hygienic practices.</p>
                        <p>We believe in honest sourcing, honest weights and honest prices. Every product that leaves our mill has been carefully processed and inspected before reaching your home.</p>
                        <p>We are FSSAI licensed (Lic. No. 22419058000081) and are committed to maintaining the highest standards of food safety and quality in everything we produce.</p>
                    </div>

                    {/* Brand values grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {VALUES.map((v) => (
                            <div key={v.title} className="flex gap-4 items-start p-6 bg-white border border-[#B88745]/15 rounded-2xl">
                                <span className="text-2xl shrink-0" aria-hidden="true">{v.icon}</span>
                                <div>
                                    <h3 className="font-cormorant font-bold text-xl text-[#2B1812] mb-1">{v.title}</h3>
                                    <p className="font-inter text-xs text-[#2B1812]/55 leading-relaxed">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/shop" className="inline-flex items-center gap-2 bg-[#164A32] text-[#F7F1E5] px-8 py-4 rounded-full font-inter font-bold text-[11px] tracking-[0.18em] uppercase hover:bg-[#1a573b] transition-all shadow-lg">
                            Shop Our Products →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
