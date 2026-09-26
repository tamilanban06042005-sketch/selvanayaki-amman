import { Product, Variant } from "./product";

export interface CartItem {
    productId: string;
    variantId: string;
    productName: string;
    variantName: string;
    unitPrice: number;
    quantity: number;
    image?: string;
    lineTotal: number;
}

export interface CartSummary {
    subtotal: number;
    shippingFee: number;
    total: number;
    freeShipping: boolean;
    itemCount: number;
}
