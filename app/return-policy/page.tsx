import { buildMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessConfig } from "@/lib/config";

export const metadata = buildMetadata({
    title: "Return & Refund Policy - Sree Selvanayaki Amman",
    description: "Return and refund policy for Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/return-policy",
});

export default function ReturnPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#F9F7F2] font-inter pt-32 pb-24 min-h-screen border-t-[8px] border-[#183921]">
                <div className="max-w-[800px] mx-auto px-6 lg:px-12 prose prose-lg mt-12 text-[#4A3930]/80 marker:text-[#4A3930]/40 prose-h1:text-4xl prose-h1:font-playfair prose-h1:text-[#4A3930] prose-h2:font-playfair prose-h2:text-[#4A3930] prose-a:text-[#183921]">
                    <h1>Return &amp; Refund Policy</h1>
                    <div className="bg-white border border-[#4A3930]/10 rounded p-6 not-prose mb-8 shadow-sm">
                        <p className="text-[#4A3930] text-sm font-medium flex items-center gap-2">
                            <span>⚠️</span> This policy is pending owner confirmation. Please update with your actual return and refund rules before publishing.
                        </p>
                    </div>
                    <p>
                        If you have received a damaged or incorrect item, please contact us within 48 hours
                        of delivery by calling or messaging us on WhatsApp at{" "}
                        <a href={`tel:${businessConfig.phone}`}>{businessConfig.phone}</a>.
                    </p>
                    <p>
                        <strong className="text-[#4A3930]">[Owner: Please specify your return / refund / exchange policy here.]</strong>
                    </p>
                    <h2>Contact</h2>
                    <p>
                        For return or refund queries: <a href={`tel:${businessConfig.phone}`}>{businessConfig.phone}</a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}

