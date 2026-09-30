import SectionHeading from "@/components/SectionHeading";

const STEPS = [
    { num: "01", title: "Raw Material Selection", desc: "We source the finest quality groundnuts, sesame seeds, and coconuts from trusted suppliers.", emoji: "🌾" },
    { num: "02", title: "Cleaning & Sorting", desc: "Thorough cleaning removes impurities to ensure only pure ingredients enter the next stage.", emoji: "✨" },
    { num: "03", title: "Stone Mill Pressing", desc: "Traditional stone mill pressing preserves the natural flavour, aroma and nutrients of the oils.", emoji: "⚙️" },
    { num: "04", title: "Natural Settling", desc: "The extracted oil is allowed to settle naturally — no chemicals, no heat treatment.", emoji: "⏳" },
    { num: "05", title: "Quality Check", desc: "Every batch is inspected for colour, aroma and purity before it moves to packaging.", emoji: "🔬" },
    { num: "06", title: "Hygienic Packaging", desc: "Packed in food-grade containers under hygienic conditions, sealed fresh from the mill.", emoji: "📦" },
];

export default function ProcessSection() {
    return (
        <section className="bg-[#064B36] py-20 px-4" aria-label="Our process">
            <div className="container-wide">
                <div className="text-center mb-14">
                    <SectionHeading
                        eyebrow="How We Work"
                        title={"From Mill to\nYour Home"}
                        subtitle="Every drop and every powder follows a careful, time-honoured process."
                        align="center"
                        light
                    />
                </div>

                {/* Steps grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STEPS.map((step, i) => (
                        <div
                            key={step.num}
                            className="relative bg-[#F7F1E5]/[0.06] border border-[#B88745]/20 rounded-2xl p-6 flex flex-col gap-3 hover:bg-[#F7F1E5]/[0.10] transition-colors group"
                        >
                            {/* Step number */}
                            <span className="font-cormorant font-bold text-[3.5rem] text-[#B88745]/20 leading-none select-none absolute top-3 right-5">
                                {step.num}
                            </span>
                            <span className="text-2xl" aria-hidden="true">{step.emoji}</span>
                            <h3 className="font-cormorant font-bold text-xl text-[#F7F1E5] leading-tight">{step.title}</h3>
                            <p className="font-inter text-xs text-[#F7F1E5]/60 leading-relaxed">{step.desc}</p>

                            {/* Connector arrow for all but last */}
                            {i < STEPS.length - 1 && (
                                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-[#B88745]/30 z-10" aria-hidden="true" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
