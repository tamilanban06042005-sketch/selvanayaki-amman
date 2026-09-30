import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

export default function OurStorySection() {
    return (
        <section className="bg-[#FFFDF7] py-20 px-4 border-t border-[#B88745]/15" aria-label="Our story">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeading eyebrow="Our Story" title={"From Our Mill\nto Your Home."} align="left" />
                        <div className="mt-8 space-y-4 font-cormorant text-xl text-[#2B1812]/75 leading-relaxed">
                            <p>Sree Selvanayaki Amman Oil &amp; Flour Mill is based in Pidariyur, Erode, Tamil Nadu. We offer traditional oils and natural powders for everyday needs.</p>
                            <p>Our mill produces Groundnut Oil, Gingelly Oil, and Coconut Oil alongside a range of everyday powders — bringing traditional processing goodness to homes across the region.</p>
                            <p>We are FSSAI licensed (22419058000081) and committed to hygienic, consistent quality in everything we produce.</p>
                        </div>
                        <div className="mt-8">
                            <Link href="/our-story" className="inline-flex items-center gap-2 font-inter text-[11px] font-bold tracking-[0.18em] uppercase text-[#164A32] border-b border-[#164A32]/30 pb-1 hover:border-[#164A32] transition-colors group">
                                Discover Our Story
                                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* SVG Mill Illustration */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-[350px] aspect-square border-2 border-[#B88745]/25 rounded-3xl p-8 bg-[#F7F1E5]">
                            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#B88745]/40 rounded-tl" aria-hidden="true" />
                            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#B88745]/40 rounded-tr" aria-hidden="true" />
                            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#B88745]/40 rounded-bl" aria-hidden="true" />
                            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#B88745]/40 rounded-br" aria-hidden="true" />
                            <svg viewBox="0 0 240 240" className="w-full h-full" fill="none" aria-hidden="true" role="img" aria-label="Traditional oil mill illustration">
                                <ellipse cx="120" cy="215" rx="90" ry="12" fill="#B88745" opacity="0.2" />
                                <rect x="75" y="155" width="90" height="60" rx="4" fill="#4A281B" opacity="0.1" />
                                <circle cx="120" cy="110" r="65" stroke="#064B36" strokeWidth="6" fill="none" />
                                <circle cx="120" cy="110" r="45" stroke="#064B36" strokeWidth="3.5" fill="none" />
                                <circle cx="120" cy="110" r="15" fill="#064B36" opacity="0.35" />
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                                    <line key={deg}
                                        x1={120 + 15 * Math.cos((deg * Math.PI) / 180)} y1={110 + 15 * Math.sin((deg * Math.PI) / 180)}
                                        x2={120 + 65 * Math.cos((deg * Math.PI) / 180)} y2={110 + 65 * Math.sin((deg * Math.PI) / 180)}
                                        stroke="#064B36" strokeWidth="2.5" />
                                ))}
                                <circle cx="120" cy="110" r="65" stroke="#B88745" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
