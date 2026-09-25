import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="bg-brand-soft-cream">

                {/* HERO */}
                <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 lg:px-12 text-center bg-brand-ivory border-b border-brand-heritage/10">
                    <div className="max-w-4xl mx-auto animate-fade-up">
                        <span className="block w-px h-16 bg-brand-gold mx-auto mb-8"></span>
                        <h1 className="heading-editorial text-5xl md:text-7xl text-brand-deep-green mb-8">
                            OUR STORY
                        </h1>
                        <p className="text-xl md:text-2xl text-brand-dark/70 font-light leading-relaxed">
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
                                <SectionHeading title="Who We Are" />
                                <div className="prose prose-lg text-brand-dark/80 font-light prose-p:leading-loose">
                                    <p>
                                        Sree Selvanayaki Amman Oil & Flour Mill is a family-oriented local business operating proudly in Pidariyur, Tamil Nadu. Our foundation is built upon direct trust with our local community, ensuring that every product reaching our customers' homes is met with familiarity and authenticity.
                                    </p>
                                    <p>
                                        We never compromise on the purity of our goods. This is not about mass manufacturing; it is about providing genuine household staples that families can rely on every single day.
                                    </p>
                                </div>
                            </div>
                            <div className="relative aspect-[4/5] bg-brand-ivory p-4 hidden md:block">
                                <div className="absolute inset-4 border border-brand-heritage/20"></div>
                                <div className="absolute inset-0 flex items-center justify-center -rotate-90 origin-center translate-x-[40%] text-brand-gold/10 font-playfair text-8xl font-bold uppercase tracking-widest whitespace-nowrap">
                                    Traditional Heritage
                                </div>
                            </div>
                        </div>

                        {/* WHAT WE MAKE */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="relative aspect-[4/5] bg-brand-ivory overflow-hidden hidden md:block">
                                <Image src="/groundnut-oil.jpeg" alt="Groundnut Oil" fill className="object-cover opacity-80 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-brand-primary mix-blend-color opacity-20"></div>
                            </div>
                            <div>
                                <SectionHeading title="What We Make" />
                                <div className="prose prose-lg text-brand-dark/80 font-light prose-p:leading-loose">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-brand-heritage/10 pt-24">
                            <div>
                                <h3 className="heading-editorial text-3xl text-brand-primary mb-6">Our Approach</h3>
                                <p className="text-brand-dark/80 font-light leading-loose text-lg">
                                    Every step of our process—from selecting raw ingredients to milling, quality checking, and packing—is handled manually and methodically at our facility. We prioritize hygiene, maintaining strict standards required by our FSSAI license (22419058000081).
                                </p>
                            </div>
                            <div>
                                <h3 className="heading-editorial text-3xl text-brand-primary mb-6">Our Values</h3>
                                <ul className="space-y-4 text-brand-dark/80 font-light text-lg">
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5"></span>
                                        <span><strong>Authenticity:</strong> Providing ingredients as nature intended.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5"></span>
                                        <span><strong>Community Trust:</strong> Serving real families with reliable products.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2.5"></span>
                                        <span><strong>Simplicity:</strong> Focusing on everyday household needs locally.</span>
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
