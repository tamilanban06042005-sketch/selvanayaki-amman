// /thank-you-whatsapp
import { buildMetadata } from "@/lib/seo";
import ThankYouClient from "@/components/whatsapp/ThankYouClient";

export const metadata = buildMetadata({
    title: "Order Sent via WhatsApp",
    description: "Your WhatsApp order has been prepared. Please confirm it was sent.",
    path: "/thank-you-whatsapp",
    noIndex: true,
});

export default function ThankYouWhatsAppPage() {
    return <ThankYouClient />;
}
