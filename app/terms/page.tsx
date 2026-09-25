import { buildMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
    title: "Terms & Conditions - Sree Selvanayaki Amman",
    description: "Terms and conditions for Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/terms",
});

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#F9F7F2] font-inter pt-32 pb-24 min-h-screen border-t-[8px] border-[#183921]">
                <div className="max-w-[800px] mx-auto px-6 lg:px-12 prose prose-lg mt-12 text-[#4A3930]/80 marker:text-[#4A3930]/40 prose-h1:text-4xl prose-h1:font-playfair prose-h1:text-[#4A3930] prose-h2:font-playfair prose-h2:text-[#4A3930] prose-a:text-[#183921]">
                    <h1>Terms &amp; Conditions</h1>
                    <div className="bg-white border border-[#4A3930]/10 rounded p-6 not-prose mb-8 shadow-sm">
                        <p className="text-[#4A3930] text-sm font-medium flex items-center gap-2">
                            <span>⚠️</span> This is a placeholder. Please update with your actual terms before publishing.
                        </p>
                    </div>
                    <p>
                        By placing an order with Sree Selvanayaki Amman Oil &amp; Flour Mill, you agree to
                        these terms.
                    </p>
                    <h2>Orders</h2>
                    <p>
                        Orders are placed via WhatsApp and are subject to product availability. Our team will
                        confirm your order and payment details.
                    </p>
                    <h2>Prices</h2>
                    <p>Prices shown on this website are in Indian Rupees (₹) and include applicable taxes.</p>
                    <h2>Contact</h2>
                    <p>
                        For any queries: <a href="tel:+919965005891">+91 99650 05891</a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

