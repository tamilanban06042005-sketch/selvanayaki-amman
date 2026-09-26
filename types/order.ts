import { CartItem } from "./cart";

export interface Order {
    id: string;
    items: CartItem[];
    subtotal: number;
    shippingFee: number;
    total: number;
    status: "PENDING" | "CONFIRMED" | "FULFILLED";
    createdAt: string;
    customerPhone?: string;
    customerName?: string;
}
