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
            <main className="bg-[#F9F7F2] font-inter pt-32 pb-24 min-h-screen border-t-[8px] border-[#183921]">
                <div className="max-w-[800px] mx-auto px-6 lg:px-12 prose prose-lg mt-12 text-[#4A3930]/80 marker:text-[#4A3930]/40 prose-h1:text-4xl prose-h1:font-playfair prose-h1:text-[#4A3930] prose-h2:font-playfair prose-h2:text-[#4A3930] prose-a:text-[#183921]">
                    <h1>Privacy Policy</h1>
                    <div className="bg-white border border-[#4A3930]/10 rounded p-6 not-prose mb-8 shadow-sm">
                        <p className="text-[#4A3930] text-sm font-medium flex items-center gap-2">
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

