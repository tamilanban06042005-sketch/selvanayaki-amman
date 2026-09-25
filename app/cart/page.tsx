// /cart page
import { buildMetadata } from "@/lib/seo";
import CartPageClient from "@/components/cart/CartPageClient";

export const metadata = buildMetadata({
    title: "Your Cart",
    description: "Review your cart and order via WhatsApp.",
    path: "/cart",
    noIndex: true,
});

export default function CartPage() {
    return <CartPageClient />;
}
