const STEPS = [
    {
        num: "01",
        title: "Source",
        body: "We select raw groundnuts, sesame, coconuts, and spices from trusted local suppliers in Erode district.",
    },
    {
        num: "02",
        title: "Clean",
        body: "Every batch is cleaned by hand and machine to remove impurities before entering the mill.",
    },
    {
        num: "03",
        title: "Press & Mill",
        body: "Oils are pressed and flours are ground using our traditional mill — no heat distortion, no chemical solvents.",
    },
    {
        num: "04",
        title: "Pack",
        body: "Products are hygienically packed, sealed, and labelled with our FSSAI-licensed details.",
    },
    {
        num: "05",
        title: "Deliver",
        body: "Orders are dispatched within 2–4 working days across Tamil Nadu, Kerala, Karnataka, AP and Telangana.",
    },
];

export default function ProcessTimeline() {
    return (
        <section id="process" className="section-pad bg-[#164A32] relative overflow-hidden">

            {/* Faint giant numeral background */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-cormorant font-bold text-white/[0.025] pointer-events-none select-none leading-none"
                aria-hidden="true"
            >
                MILL
            </div>

            <div className="container-wide relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <span className="divider-gold" />
                        <span className="label-caps text-[#B88745]">Our Process</span>
                        <span className="divider-gold" />
                    </div>
                    <h2 className="heading-display text-4xl md:text-5xl text-[#F7F1E5]">
                        From Our Mill<br />
                        <span className="text-[#B88745] italic">to Your Home.</span>
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                    {STEPS.map((step, i) => (
                        <div key={step.num} className="relative flex flex-col gap-4 group">
                            {/* Connector line (desktop only) */}
                            {i < STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#F7F1E5]/10 z-0 -translate-x-1/2" />
                            )}

                            {/* Step number disc */}
                            <div className="relative z-10 w-14 h-14 rounded-full border border-[#B88745]/40 flex items-center justify-center bg-[#245C40] group-hover:bg-[#B88745] transition-colors duration-300">
                                <span className="font-cormorant font-bold text-[#B88745] group-hover:text-[#164A32] text-lg transition-colors">
                                    {step.num}
                                </span>
                            </div>

                            <div>
                                <h3 className="font-cormorant font-semibold text-[#F7F1E5] text-xl mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-[#F7F1E5]/60 text-sm font-inter leading-relaxed">
                                    {step.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom trust note */}
                <div className="mt-16 pt-10 border-t border-[#F7F1E5]/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <p className="font-cormorant font-medium text-[#F7F1E5]/80 text-xl italic">
                        "Every batch made to the same standard as if it were for our own family."
                    </p>
                    <div className="bg-[#245C40] px-6 py-3 rounded-full flex-shrink-0">
                        <p className="label-caps text-[8px] text-[#B88745]">FSSAI · 22419058000081</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
