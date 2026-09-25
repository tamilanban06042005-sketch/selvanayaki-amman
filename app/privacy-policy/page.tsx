// /privacy-policy â€” editable placeholder
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = buildMetadata({
    title: "Privacy Policy",
    description: "Privacy policy for Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50 pt-20">
                <div className="max-w-3xl mx-auto px-6 py-16 prose prose-stone">
                    <h1>Privacy Policy</h1>
                    <div className="bg-[var(--color-brand-beige)] border border-[var(--color-brand-brass)] rounded p-4 not-prose mb-6">
                        <p className="text-[var(--color-brand-ink)] text-sm font-medium">
                            âš ï¸ This policy is a placeholder. Please have it reviewed by a legal professional
                            before publishing.
                        </p>
                    </div>
                    <p>
                        We collect only the information necessary to process your order. This includes your
                        name, delivery address, and contact number, which you provide when ordering via
                        WhatsApp.
                    </p>
                    <p>We do not store payment card details.</p>
                    <p>We do not share your personal information with third parties except as required
                        to fulfill your order (e.g. courier service).</p>
                    <h2>Contact</h2>
                    <p>
                        For privacy queries, contact us at{" "}
                        <a href="tel:+917708039583">+91 7708039583</a>.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

