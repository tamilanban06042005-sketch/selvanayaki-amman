import { buildMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessConfig } from "@/lib/config";

export const metadata = buildMetadata({
    title: "Shipping Policy - Sree Selvanayaki Amman",
    description: "Delivery and shipping information for Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="bg-[#F9F7F2] font-inter pt-32 pb-24 min-h-screen border-t-[8px] border-[#183921]">
                <div className="max-w-[800px] mx-auto px-6 lg:px-12 prose prose-lg mt-12 text-[#4A3930]/80 marker:text-[#4A3930]/40 prose-h1:text-4xl prose-h1:font-playfair prose-h1:text-[#4A3930] prose-h2:font-playfair prose-h2:text-[#4A3930] prose-a:text-[#183921]">
                    <h1>Shipping Policy</h1>
                    <h2>Delivery Charges</h2>
                    <p>Standard shipping fee: <strong className="text-[#4A3930]">₹50</strong> per order.</p>
                    <p>Free delivery on orders above <strong className="text-[#4A3930]">₹1,000</strong>.</p>
                    <h2>Estimated Delivery Time</h2>
                    <p>Orders are typically delivered within <strong className="text-[#4A3930]">2–4 working days</strong> from dispatch.</p>
                    <h2>Delivery Areas</h2>
                    <p>
                        We cannot automatically confirm delivery for all PIN codes. If you are unsure whether
                        we deliver to your area, please contact us on WhatsApp at{" "}
                        <a href={`https://wa.me/${businessConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                            {businessConfig.phone}
                        </a>{" "}
                        and our team will confirm.
                    </p>
                    <h2>Courier Partners</h2>
                    <p>Courier details will be confirmed by our team at the time of order processing.</p>
                    <h2>Contact</h2>
                    <p>For shipping queries, call or WhatsApp: <a href={`tel:${businessConfig.phone}`}>{businessConfig.phone}</a></p>
                </div>
            </main>
            <Footer />
        </>
    );
}
