// /terms â€” editable placeholder
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = buildMetadata({
    title: "Terms & Conditions",
    description: "Terms and conditions for Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/terms",
});

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50 pt-20">
                <div className="max-w-3xl mx-auto px-6 py-16 prose prose-stone">
                    <h1>Terms &amp; Conditions</h1>
                    <div className="bg-[var(--color-brand-beige)] border border-[var(--color-brand-brass)] rounded p-4 not-prose mb-6">
                        <p className="text-[var(--color-brand-ink)] text-sm font-medium">
                            âš ï¸ This is a placeholder. Please update with your actual terms before publishing.
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
                    <p>Prices shown on this website are in Indian Rupees (â‚¹) and include applicable taxes.</p>
                    <h2>Contact</h2>
                    <p>
                        For any queries: <a href="tel:+917708039583">+91 7708039583</a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

