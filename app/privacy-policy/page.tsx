import { buildMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
    title: "Privacy Policy - Sree Selvanayaki Amman",
    description: "Privacy policy for Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#F3EFE6] min-h-screen pt-28 lg:pt-36 pb-24">
                <div className="container-narrow prose prose-lg prose-stone text-[#2B1812]/80 marker:text-[#2B1812]/40 prose-h1:font-cormorant prose-h1:text-5xl prose-h1:text-[#2B1812] prose-h2:font-cormorant prose-h2:text-3xl prose-h2:text-[#2B1812] prose-a:text-[#164A32] prose-a:font-semibold">
                    <h1>Privacy Policy</h1>
                    <div className="bg-white border border-[#4A281B]/10 rounded-xl p-6 not-prose mb-8 shadow-sm">
                        <p className="text-[#2B1812] text-sm font-inter">
                            <span>⚠️</span> This policy is a placeholder. Please have it reviewed by a legal professional before publishing.
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
                        <a href="tel:+919965005891">+91 99650 05891</a>.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

