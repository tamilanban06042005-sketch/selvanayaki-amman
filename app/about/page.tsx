// /about page
import { buildMetadata } from "@/lib/seo";
import { businessConfig } from "@/lib/config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = buildMetadata({
    title: "About Us",
    description:
        "Learn about Sree Selvanayaki Amman Oil & Flour Mill — traditional oils and everyday essentials from Pidariyur, Tamil Nadu.",
    path: "/about",
});

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50 pt-20">
                <div className="max-w-3xl mx-auto px-6 py-16">
                    <h1 className="text-3xl font-bold text-stone-800 mb-4">About Us</h1>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Sree Selvanayaki Amman Oil &amp; Flour Mill is a traditional oil mill located at{" "}
                        {businessConfig.businessAddress}. We produce oils and everyday food products using
                        careful processing and hygienic packing methods.
                    </p>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        Our products include Groundnut Oil, Gingelly Oil, Coconut Oil, Health Mix Powder,
                        Turmeric Powder, Green Gram Powder and Shikakai Powder — all processed and packed at
                        our mill.
                    </p>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        We are FSSAI licensed (License No: {businessConfig.fssaiLicense}).
                    </p>
                    <p className="text-stone-600 leading-relaxed">
                        To order or inquire, call or WhatsApp us at{" "}
                        <a href={`tel:${businessConfig.phone}`} className="text-amber-700 underline">
                            {businessConfig.phone}
                        </a>
                        .
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
