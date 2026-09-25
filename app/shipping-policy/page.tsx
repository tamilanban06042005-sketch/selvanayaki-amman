// /shipping-policy
import { buildMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = buildMetadata({
    title: "Shipping Policy",
    description: "Delivery and shipping information for Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50 pt-20">
                <div className="max-w-3xl mx-auto px-6 py-16 prose prose-stone">
                    <h1>Shipping Policy</h1>
                    <h2>Delivery Charges</h2>
                    <p>Standard shipping fee: <strong>₹50</strong> per order.</p>
                    <p>Free delivery on orders above <strong>₹1,000</strong>.</p>
                    <h2>Estimated Delivery Time</h2>
                    <p>Orders are typically delivered within <strong>2–4 working days</strong> from dispatch.</p>
                    <h2>Delivery Areas</h2>
                    <p>
                        We cannot automatically confirm delivery for all PIN codes. If you are unsure whether
                        we deliver to your area, please contact us on WhatsApp at{" "}
                        <a href="https://wa.me/917708039583" target="_blank" rel="noopener noreferrer">
                            +91 7708039583
                        </a>{" "}
                        and our team will confirm.
                    </p>
                    <h2>Courier Partners</h2>
                    <p>Courier details will be confirmed by our team at the time of order processing.</p>
                    <h2>Contact</h2>
                    <p>For shipping queries, call or WhatsApp: <a href="tel:+917708039583">+91 7708039583</a></p>
                </div>
            </main>
            <Footer />
        </>
    );
}
