import Link from "next/link";
import Image from "next/image";

export default function BrandStory() {
    return (
        <section className="py-24 overflow-hidden relative">
            <div className="container-wide">
                <div className="bg-[#123A25] rounded-l-[120px] rounded-r-3xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center min-h-[450px]">

                    {/* Background texture for the block */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen bg-floral-pattern"></div>
                    <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-10 flex justify-end items-end pointer-events-none">
                        <div className="relative w-full h-[150%] translate-x-1/4 translate-y-1/4">
                            <Image src="/main-logo.jpg" alt="Watermark" fill className="object-cover mix-blend-screen" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-12 md:p-20 lg:p-24 w-full md:w-3/5 text-[#F3EFE6]">
                        <h2 className="font-cormorant font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8">
                            From Our Mill<br />To Your Home
                        </h2>

                        <p className="font-inter font-light text-base md:text-lg leading-relaxed mb-10 max-w-lg opacity-80">
                            Sree Selvanayaki Amman Oil &amp; Flour Mill is based in Pidariyur, Erode, Tamil Nadu. We offer everyday essentials with a focus on quality and customer trust.
                        </p>

                        <Link href="/about" className="inline-flex border border-[#F3EFE6] text-[#F3EFE6] hover:bg-[#F3EFE6] hover:text-[#123A25] transition-colors rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                            Our Story →
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
