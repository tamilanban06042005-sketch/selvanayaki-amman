import Link from "next/link";

export default function BrandStory() {
    return (
        <section className="section-pad bg-[#FFFDF7] border-y border-[#4A281B]/8">
            <div className="container-narrow text-center">

                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="divider-gold" />
                    <span className="label-caps text-[#B88745]">Our Story</span>
                    <span className="divider-gold" />
                </div>

                <h2 className="heading-display text-4xl md:text-5xl text-[#2B1812] mb-8">
                    A Mill. A Family.<br />
                    <span className="text-[#164A32] italic">A Tradition of Care.</span>
                </h2>

                <p className="text-[#2B1812]/70 text-base md:text-lg font-inter font-light leading-relaxed mb-6 max-w-2xl mx-auto">
                    Sree Selvanayaki Amman Oil &amp; Flour Mill is based in Pidariyur, Erode district, Tamil Nadu.
                    Our mill presses oils and grinds flours for families who value honest, traditionally made products.
                </p>

                <p className="text-[#2B1812]/60 text-sm md:text-base font-inter font-light leading-relaxed mb-12 max-w-xl mx-auto">
                    We keep it simple: select the best raw materials, process them carefully, pack them hygienically,
                    and deliver directly to you — with the same standards we hold for our own family.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/about" className="btn-outline text-[10px] px-8 py-3.5">
                        Read Our Story →
                    </Link>
                    <Link href="/shop" className="btn-primary text-[10px] px-8 py-3.5">
                        Shop Products
                    </Link>
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-[#4A281B]/10">
                    {[
                        { num: "7", label: "Products" },
                        { num: "5+", label: "States Delivered" },
                        { num: "100%", label: "FSSAI Licensed" },
                    ].map((s) => (
                        <div key={s.label} className="flex flex-col items-center gap-1">
                            <span className="font-cormorant font-bold text-[#164A32] text-4xl md:text-5xl">{s.num}</span>
                            <span className="label-caps text-[9px] text-[#2B1812]/50">{s.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
