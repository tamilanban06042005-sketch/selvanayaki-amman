import { CartItem } from "./cart";
import { ShippingResult } from "./shipping";

export type OrderStatus =
    | "pending_whatsapp"
    | "sent_whatsapp"
    | "confirmed"
    | "cancelled";

export interface PendingOrder {
    id: string;
    items: CartItem[];
    shipping: ShippingResult;
    subtotal: number;
    total: number;
    createdAt: string;
    status: OrderStatus;
    pincode?: string;
}
