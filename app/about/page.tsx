import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
    title: 'About - Sree Selvanayaki Amman',
    description: 'Learn about our traditional Pidariyur mill and heritage processing methods.',
}

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#F9F7F2] font-inter border-t-[8px] border-[#183921]">

                {/* HERO */}
                <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 lg:px-12 text-center bg-white border-b border-[#4A3930]/10">
                    <div className="max-w-4xl mx-auto animate-fade-up">
                        <span className="block text-[10px] tracking-[0.3em] font-semibold uppercase text-brand-green-primary mb-8">
                            Sree Selvanayaki Amman
                        </span>
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#4A3930] mb-8 uppercase tracking-wide">
                            OUR STORY
                        </h1>
                        <p className="text-xl md:text-2xl text-[#4A3930]/70 font-light leading-relaxed max-w-3xl mx-auto">
                            Rooted in Pidariyur, Erode, we are committed to sharing authentic South Indian traditions through our carefully processed everyday essentials.
                        </p>
                    </div>
                </section>

                {/* CONTENT SECTIONS */}
                <section className="py-24 md:py-32 px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto space-y-32">

                        {/* WHO WE ARE */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-playfair font-bold text-[#4A3930] mb-8 uppercase tracking-wide border-b border-[#4A3930]/20 pb-4">Who We Are</h2>
                                <div className="space-y-6 text-[#4A3930]/80 font-light text-lg leading-relaxed">
                                    <p>
                                        Sree Selvanayaki Amman Oil & Flour Mill is a family-oriented local business operating proudly in Pidariyur, Tamil Nadu. Our foundation is built upon direct trust with our local community, ensuring that every product reaching our customers' homes is met with familiarity and authenticity.
                                    </p>
                                    <p>
                                        We never compromise on the purity of our goods. This is not about mass manufacturing; it is about providing genuine household staples that families can rely on every single day.
                                    </p>
                                </div>
                            </div>
                            <div className="relative aspect-[4/5] bg-white p-4 hidden md:block border border-[#4A3930]/10 shadow-sm">
                                <div className="absolute inset-6 border border-[#4A3930]/20"></div>
                                <div className="absolute inset-0 flex items-center justify-center -rotate-90 origin-center translate-x-[40%] text-[#4A3930]/5 font-playfair text-8xl font-bold uppercase tracking-widest whitespace-nowrap">
                                    Heritage
                                </div>
                            </div>
                        </div>

                        {/* WHAT WE MAKE */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="relative aspect-[4/5] bg-[#F2F0E9] overflow-hidden hidden md:block rounded-sm">
                                <Image src="/groundnut-oil.jpeg" alt="Groundnut Oil" fill className="object-cover opacity-90 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3930]/20 to-transparent"></div>
                            </div>
                            <div>
                                <h2 className="text-3xl font-playfair font-bold text-[#4A3930] mb-8 uppercase tracking-wide border-b border-[#4A3930]/20 pb-4">What We Make</h2>
                                <div className="space-y-6 text-[#4A3930]/80 font-light text-lg leading-relaxed">
                                    <p>
                                        We specialize in extracting traditional oils—such as Groundnut, Gingelly, and Coconut—and milling essential food powders. Our offerings are simple, practical, and deeply embedded in our regional culinary habits.
                                    </p>
                                    <p>
                                        Whether it is a comforting cup of our Health Mix or using our Turmeric Powder for everyday cooking, our products are crafted without embellishments or synthetic additives.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* OUR APPROACH & VALUES */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#4A3930]/10 pt-24">
                            <div>
                                <h3 className="text-2xl font-playfair font-semibold text-[#4A3930] mb-6 uppercase tracking-wider">Our Approach</h3>
                                <p className="text-[#4A3930]/80 font-light leading-loose text-lg">
                                    Every step of our process—from selecting raw ingredients to milling, quality checking, and packing—is handled manually and methodically at our facility. We prioritize hygiene, maintaining strict standards required by our FSSAI license (22419058000081).
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-playfair font-semibold text-[#4A3930] mb-6 uppercase tracking-wider">Our Values</h3>
                                <ul className="space-y-6 text-[#4A3930]/80 font-light text-lg">
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#183921] mt-3"></span>
                                        <span><strong className="text-[#4A3930] font-semibold">Authenticity:</strong> Providing ingredients as nature intended.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#183921] mt-3"></span>
                                        <span><strong className="text-[#4A3930] font-semibold">Community Trust:</strong> Serving real families with reliable products.</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#183921] mt-3"></span>
                                        <span><strong className="text-[#4A3930] font-semibold">Simplicity:</strong> Focusing on everyday household needs locally.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
