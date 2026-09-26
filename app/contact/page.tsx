import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
    title: "Contact Us - Sree Selvanayaki Amman",
    description: "Contact Sree Selvanayaki Amman Oil & Flour Mill by phone or WhatsApp.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#FFFDF7] font-inter pt-28 lg:pt-36 pb-24 min-h-screen">
                <div className="container-wide">

                    {/* Header */}
                    <div className="text-center mb-16 md:mb-24">
                        <span className="label-caps text-[#B88745] mb-4">
                            Visit or write to us
                        </span>
                        <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl">
                            Connect With Us
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">

                        {/* Info Column */}
                        <div className="flex flex-col gap-12">
                            <p className="text-[#2B1812]/70 font-inter text-lg leading-relaxed pt-2">
                                Whether you have a question about our traditional products, need assistance with your order, or just want to know more about our heritage methods, we're always here for you. We operate out of our mill in Pidariyur and love speaking directly to our customers.
                            </p>

                            <dl className="grid grid-cols-1 gap-12 border-t border-[#4A281B]/10 pt-12">
                                <div>
                                    <dt className="label-caps text-[#2B1812]/50 mb-3 hover:text-[#164A32] transition-colors cursor-pointer">Call or WhatsApp</dt>
                                    <dd>
                                        <a href={`https://wa.me/${businessConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="font-cormorant text-2xl md:text-3xl font-bold text-[#2B1812] hover:text-[#164A32] transition-colors inline-flex items-center gap-4">
                                            {businessConfig.phone}
                                            <span className="label-caps text-[9px] bg-[#F7F1E5] border border-[#164A32]/20 text-[#164A32] px-3 py-1 rounded">WhatsApp Only</span>
                                        </a>
                                    </dd>
                                </div>

                                <div>
                                    <dt className="label-caps text-[#2B1812]/50 mb-3 hover:text-[#164A32] transition-colors cursor-pointer">Location</dt>
                                    <dd className="font-inter text-lg text-[#2B1812]/80 leading-relaxed max-w-sm">
                                        <strong>{businessConfig.businessName}</strong><br />
                                        {businessConfig.businessAddress}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="label-caps text-[#2B1812]/50 mb-3 hover:text-[#164A32] transition-colors cursor-pointer">FSSAI License</dt>
                                    <dd className="font-inter text-lg text-[#2B1812]/80">
                                        {businessConfig.fssaiLicense}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Map Placeholder Column */}
                        <div className="h-[400px] lg:h-auto bg-[#F7F1E5] border border-[#4A281B]/10 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group">
                            <span className="text-5xl mb-4">📍</span>
                            <span className="label-caps bg-white text-[#2B1812] px-4 py-2 rounded-lg border border-[#4A281B]/10 shadow-sm">Map Available Soon</span>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="mt-4 label-caps text-[9px] text-[#164A32] hover:text-[#B88745] transition-colors">
                                Get Directions on Google Maps →
                            </a>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
