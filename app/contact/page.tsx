// /contact page
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = buildMetadata({
    title: "Contact Us",
    description:
        "Contact Sree Selvanayaki Amman Oil & Flour Mill by phone or WhatsApp.",
    path: "/contact",
});

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50 pt-20">
                <div className="max-w-2xl mx-auto px-6 py-16">
                    <h1 className="text-3xl font-bold text-stone-800 mb-8">Contact Us</h1>
                    <dl className="space-y-6">
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Business</dt>
                            <dd className="text-stone-700">{businessConfig.businessName}</dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Address</dt>
                            <dd className="text-stone-700 leading-relaxed">{businessConfig.businessAddress}</dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">Phone / WhatsApp</dt>
                            <dd>
                                <a href={`tel:${businessConfig.phone}`} className="text-[var(--color-brand-brown)] underline">
                                    {businessConfig.phone}
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">WhatsApp Order</dt>
                            <dd>
                                <a
                                    href={`https://wa.me/${businessConfig.whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-700 underline"
                                >
                                    Chat on WhatsApp
                                </a>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">FSSAI License</dt>
                            <dd className="text-stone-700">{businessConfig.fssaiLicense}</dd>
                        </div>
                    </dl>
                </div>
            </main>
            <Footer />
        </>
    );
}

