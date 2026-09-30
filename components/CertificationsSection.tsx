import SectionHeading from "@/components/SectionHeading";

const BADGES = [
    { icon: "🛡️", label: "FSSAI Licensed", detail: "Lic. No. 22419058000081" },
    { icon: "✅", label: "Quality Assured", detail: "Every batch inspected" },
    { icon: "🌿", label: "No Additives", detail: "100% natural ingredients" },
    { icon: "🏭", label: "Own Mill", detail: "Pidariyur, Erode" },
];

export default function CertificationsSection() {
    return (
        <section className="bg-[#FFFDF7] py-16 px-4 border-t border-[#B88745]/20" aria-label="Certifications and standards">
            <div className="container-wide">
                <div className="text-center mb-10">
                    <SectionHeading eyebrow="Standards" title={"Your Safety is\nOur Priority"} align="center" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {BADGES.map((b) => (
                        <div key={b.label} className="flex flex-col items-center text-center gap-3 p-6 bg-[#F7F1E5] border border-[#B88745]/20 rounded-2xl">
                            <span className="text-3xl" aria-hidden="true">{b.icon}</span>
                            <h3 className="font-cormorant font-bold text-lg text-[#2B1812]">{b.label}</h3>
                            <p className="font-inter text-[10px] text-[#2B1812]/50 tracking-wide">{b.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
