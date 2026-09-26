import Link from "next/link";
import { businessConfig } from "@/lib/config";

const REASONS = [
    {
        icon: "🌿",
        title: "Traditional Roots",
        body: "A local mill with deep roots in Pidariyur, Erode — focused on quality you can trust for everyday use.",
    },
    {
        icon: "🛡️",
        title: "FSSAI Licensed",
        body: "Our mill is fully licensed and compliant. Every product is prepared under hygienic, regulated conditions.",
    },
    {
        icon: "📦",
        title: "Packed with Care",
        body: "All products are hygienically sealed and labelled, ready to deliver freshness directly to your family.",
    },
    {
        icon: "🤝",
        title: "Direct from Mill",
        body: "Order directly from us via WhatsApp. No middlemen — you get our personal attention with every order.",
    },
];

const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like to enquire about Sree Selvanayaki Amman Oil & Flour Mill products."
)}`;

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-[#F3EFE6]">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left column — reasons */}
                    <div className="lg:col-span-7">
                        <h2 className="font-cormorant font-bold text-3xl md:text-4xl text-[#2B1812] uppercase tracking-widest mb-16">
                            Why Sree Selvanayaki Amman?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
                            {REASONS.map((r) => (
                                <div key={r.title} className="flex gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-[#2B1812]/10 flex items-center justify-center text-xl shadow-sm">
                                        {r.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-cormorant font-bold text-[#2B1812] text-xl mb-2">
                                            {r.title}
                                        </h3>
                                        <p className="text-[#2B1812]/70 text-sm font-inter leading-relaxed pr-4">
                                            {r.body}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right column — CTA card */}
                    <div className="lg:col-span-5 relative">
                        {/* Decorative arched border */}
                        <div className="absolute inset-x-0 -top-4 -bottom-4 border border-[#2B1812]/10 rounded-t-[100px] rounded-b-xl pointer-events-none -mr-4"></div>

                        <div className="bg-white p-10 md:p-14 rounded-t-[80px] rounded-b-xl border border-[#2B1812]/5 shadow-sm text-center">

                            <p className="font-inter font-semibold text-[10px] text-[#2B1812]/50 tracking-[0.2em] uppercase mb-4">
                                Ready to Order?
                            </p>

                            <h3 className="font-cormorant font-bold text-3xl md:text-4xl text-[#164A32] uppercase mb-6 leading-tight">
                                Bring The Mill Home.
                            </h3>

                            <p className="text-[#2B1812]/60 text-sm font-inter leading-relaxed mb-10 text-center px-4">
                                Explore our everyday essentials or speak with us directly. We personally handle each order to ensure quality.
                            </p>

                            <div className="flex flex-col gap-4 items-center">
                                <Link href="/shop" className="w-[85%] bg-[#123A25] text-[#F3EFE6] px-6 py-3.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#1C1613] transition-colors shadow-sm">
                                    Shop All Products
                                </Link>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[85%] bg-transparent border border-[#164A32] text-[#164A32] px-6 py-3.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#F3EFE6] transition-colors flex items-center justify-center gap-2"
                                >
                                    <svg className="w-3.5 h-3.5 text-[#22C55E]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Order on WhatsApp
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
