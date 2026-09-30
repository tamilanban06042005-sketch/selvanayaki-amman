import SectionHeading from "@/components/SectionHeading";

const PILLARS = [
    { icon: "🌿", title: "No Preservatives", desc: "Our products contain no artificial preservatives, colours or additives." },
    { icon: "🏭", title: "Mill Fresh", desc: "Products come directly from our mill — ensuring maximum freshness and quality." },
    { icon: "🛡️", title: "FSSAI Licensed", desc: "We operate under FSSAI License No. 22419058000081 for your peace of mind." },
    { icon: "📞", title: "Direct Ordering", desc: "Order directly on WhatsApp — no middlemen, no markups, transparent pricing." },
    { icon: "⚖️", title: "Honest Weights", desc: "Accurate weights every time. What you pay for is exactly what you receive." },
];

export default function WhyChooseUsSection() {
    return (
        <section className="bg-[#064B36] py-20 px-4" aria-label="Why choose us">
            <div className="container-wide">
                <div className="text-center mb-14">
                    <SectionHeading
                        eyebrow="Why Choose Us"
                        title={"Five Reasons to\nTrust Our Mill"}
                        align="center"
                        light
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {PILLARS.map((p) => (
                        <div
                            key={p.title}
                            className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl border border-[#B88745]/20 bg-[#F7F1E5]/[0.05] hover:bg-[#F7F1E5]/[0.10] transition-colors"
                        >
                            <div className="w-14 h-14 rounded-full border border-[#B88745]/40 flex items-center justify-center text-2xl bg-[#064B36]">
                                {p.icon}
                            </div>
                            <h3 className="font-cormorant font-bold text-xl text-[#F7F1E5] leading-snug">{p.title}</h3>
                            <p className="font-inter text-xs text-[#F7F1E5]/60 leading-relaxed">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
