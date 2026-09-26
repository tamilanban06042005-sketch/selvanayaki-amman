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
            <main className="bg-[#FFFDF7] min-h-screen pt-28 lg:pt-36 pb-24">
                <div className="container-narrow prose prose-lg prose-stone text-[#2B1812]/80 marker:text-[#2B1812]/40 prose-h1:font-cormorant prose-h1:text-5xl prose-h1:text-[#2B1812] prose-h2:font-cormorant prose-h2:text-3xl prose-h2:text-[#2B1812] prose-a:text-[#164A32] prose-a:font-semibold">
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
