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
            <main className="bg-[#F3EFE6] min-h-screen pt-28 lg:pt-36 pb-24">
                <div className="container-narrow prose prose-lg prose-stone text-[#2B1812]/80 marker:text-[#2B1812]/40 prose-h1:font-cormorant prose-h1:text-5xl prose-h1:text-[#2B1812] prose-h2:font-cormorant prose-h2:text-3xl prose-h2:text-[#2B1812] prose-a:text-[#164A32] prose-a:font-semibold">
                    <h1>Terms &amp; Conditions</h1>
                    <div className="bg-white border border-[#4A281B]/10 rounded-xl p-6 not-prose mb-8 shadow-sm">
                        <p className="text-[#2B1812] text-sm font-inter">
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

