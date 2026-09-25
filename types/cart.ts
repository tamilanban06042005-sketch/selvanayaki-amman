export interface CartItem {
    productId: string;
    variantId: string;
    productName: string;
    variantName: string; // e.g. "500 ml"
    unitPrice: number;
    quantity: number;
    image: string;
    lineTotal: number;
}

export interface CartState {
    items: CartItem[];
    subtotal: number;
    shippingFee: number;
    freeShipping: boolean;
    total: number;
}

export interface CartSummary {
    subtotal: number;
    shippingFee: number;
    freeShipping: boolean;
    total: number;
    itemCount: number;
}
