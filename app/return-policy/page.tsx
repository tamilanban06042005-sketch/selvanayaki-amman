// /return-policy â€” placeholder requiring owner confirmation
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = buildMetadata({
    title: "Return & Refund Policy",
    description: "Return and refund policy for Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/return-policy",
});

export default function ReturnPolicyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50 pt-20">
                <div className="max-w-3xl mx-auto px-6 py-16 prose prose-stone">
                    <h1>Return &amp; Refund Policy</h1>
                    <div className="bg-[var(--color-brand-beige)] border border-[var(--color-brand-brass)] rounded p-4 not-prose mb-6">
                        <p className="text-[var(--color-brand-ink)] text-sm font-medium">
                            âš ï¸ This policy is pending owner confirmation. Please update with your actual return
                            and refund rules before publishing.
                        </p>
                    </div>
                    <p>
                        If you have received a damaged or incorrect item, please contact us within 48 hours
                        of delivery by calling or messaging us on WhatsApp at{" "}
                        <a href="tel:+917708039583">+91 7708039583</a>.
                    </p>
                    <p>
                        <strong>[Owner: Please specify your return / refund / exchange policy here.]</strong>
                    </p>
                    <h2>Contact</h2>
                    <p>
                        For return or refund queries: <a href="tel:+917708039583">+91 7708039583</a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

