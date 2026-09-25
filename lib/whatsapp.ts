import { CartItem } from "@/types/cart";
import { ShippingResult } from "@/types/shipping";
import { businessConfig } from "@/lib/config";
import { formatPrice } from "@/lib/utils";

export interface WhatsAppOrderPayload {
    items: CartItem[];
    shipping: ShippingResult;
    subtotal: number;
    total: number;
}

export function buildWhatsAppOrderMessage(payload: WhatsAppOrderPayload): string {
    const { items, shipping, subtotal, total } = payload;

    const itemLines = items
        .map((item, i) => {
            const name = item.productName.replace(/[<>&"]/g, "");
            const variant = item.variantName.replace(/[<>&"]/g, "");
            return `${i + 1}. ${name} — ${variant} × ${item.quantity} = ${formatPrice(item.lineTotal)}`;
        })
        .join("\n");

    const freeShippingLine = shipping.freeShipping
        ? "Free delivery (order above ₹1,000)"
        : `₹${shipping.shippingFee}`;

    const message = [
        `Hello ${businessConfig.businessName},`,
        ``,
        `I would like to place an order:`,
        ``,
        itemLines,
        ``,
        `Subtotal: ${formatPrice(subtotal)}`,
        `Delivery: ${freeShippingLine}`,
        `Estimated total: ${formatPrice(total)}`,
        ``,
        `Please confirm availability, delivery and payment details.`,
    ].join("\n");

    return message;
}

export function buildWhatsAppUrl(message: string): string {
    return `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(payload: WhatsAppOrderPayload): {
    success: boolean;
    message: string;
    url: string;
} {
    const message = buildWhatsAppOrderMessage(payload);
    const url = buildWhatsAppUrl(message);

    try {
        window.open(url, "_blank", "noopener,noreferrer");
        return { success: true, message, url };
    } catch {
        return { success: false, message, url };
    }
}

export function buildSingleProductWhatsAppMessage(
    productName: string,
    variantName: string
): string {
    const name = productName.replace(/[<>&"]/g, "");
    const variant = variantName.replace(/[<>&"]/g, "");
    const message = [
        `Hello ${businessConfig.businessName},`,
        ``,
        `I'm interested in ordering: ${name} — ${variant}`,
        ``,
        `Please confirm availability, pricing and delivery details.`,
    ].join("\n");
    return message;
}
