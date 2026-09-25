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
            <main className="bg-[#F9F7F2] font-inter pt-32 pb-24 min-h-screen border-t-[8px] border-[#183921]">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

                    {/* Header */}
                    <div className="text-center mb-16 md:mb-24">
                        <span className="block text-[10px] tracking-[0.3em] font-semibold uppercase text-brand-green-primary mb-6">
                            Visit or write to us
                        </span>
                        <h1 className="text-5xl md:text-6xl font-playfair font-bold text-[#4A3930] uppercase tracking-wide">
                            CONNECT WITH US
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                        {/* Info Column */}
                        <div className="flex flex-col gap-12">
                            <div className="prose prose-lg text-[#4A3930]/80 font-light prose-p:leading-loose">
                                <p>
                                    Whether you have a question about our traditional products, need assistance with your order, or just want to know more about our heritage methods, we're always here for you. We operate out of our mill in Pidariyur and love speaking directly to our customers.
                                </p>
                            </div>

                            <dl className="grid grid-cols-1 gap-12 border-t border-[#4A3930]/10 pt-12">
                                <div>
                                    <dt className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930]/50 mb-3 hover:text-[#183921] transition-colors cursor-pointer">Call or WhatsApp</dt>
                                    <dd>
                                        <a href={`https://wa.me/${businessConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-2xl md:text-3xl font-playfair font-semibold text-[#4A3930] hover:text-[#183921] transition-colors inline-flex items-center gap-4">
                                            {businessConfig.phone}
                                            <span className="text-sm border border-[#183921]/20 rounded-full px-3 py-1 bg-white">Chat</span>
                                        </a>
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930]/50 mb-3 hover:text-[#183921] transition-colors cursor-pointer">Location</dt>
                                    <dd className="text-lg md:text-xl text-[#4A3930]/90 leading-relaxed font-light max-w-sm">
                                        {businessConfig.businessName}<br />
                                        {businessConfig.businessAddress}
                                    </dd>
                                </div>

                                <div>
                                    <dt className="text-[10px] font-bold uppercase tracking-widest text-[#4A3930]/50 mb-3 hover:text-[#183921] transition-colors cursor-pointer">FSSAI License</dt>
                                    <dd className="text-lg font-inter text-[#4A3930]/80 tracking-widest">
                                        {businessConfig.fssaiLicense}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Map Column */}
                        <div className="h-full min-h-[400px] lg:min-h-0 bg-[#E7E2D5] border border-[#4A3930]/10 p-2 flex items-center justify-center relative overflow-hidden group">
                            {/* Ideally replace with actual iframe embed later */}
                            <div className="absolute inset-2 border-2 border-[#4A3930]/10 z-10 pointer-events-none"></div>

                            {/* Stylized background representing a map */}
                            <div className="absolute inset-0 bg-white opacity-40 mix-blend-overlay"></div>
                            <div className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(#4a3930 1px, transparent 1px)`,
                                    backgroundSize: `24px 24px`,
                                    opacity: 0.1
                                }}
                            ></div>

                            <div className="relative z-20 flex flex-col items-center gap-4 text-center">
                                <span className="text-4xl">📍</span>
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#4A3930] bg-white px-4 py-2 border border-[#4A3930]/20 shadow-sm">
                                    Google Maps Load Point
                                </span>
                                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-xs text-[#183921] hover:underline uppercase tracking-widest font-semibold mt-2">
                                    Get Directions →
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

