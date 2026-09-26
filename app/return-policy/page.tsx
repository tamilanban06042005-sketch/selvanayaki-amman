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
            <main className="bg-[#FFFDF7] min-h-screen pt-28 lg:pt-36 pb-24">
                <div className="container-narrow prose prose-lg prose-stone text-[#2B1812]/80 marker:text-[#2B1812]/40 prose-h1:font-cormorant prose-h1:text-5xl prose-h1:text-[#2B1812] prose-h2:font-cormorant prose-h2:text-3xl prose-h2:text-[#2B1812] prose-a:text-[#164A32] prose-a:font-semibold">
                    <h1>Return &amp; Refund Policy</h1>
                    <div className="bg-white border border-[#4A281B]/10 rounded-xl p-6 not-prose mb-8 shadow-sm">
                        <p className="text-[#2B1812] text-sm font-inter">
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

