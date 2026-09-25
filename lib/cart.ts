import { CartItem, CartSummary } from "@/types/cart";
import { shippingConfig } from "@/lib/shipping";
import { clamp } from "@/lib/utils";

const CART_STORAGE_KEY = "ssa_cart_v1";

export function calcLineTotal(unitPrice: number, quantity: number): number {
    if (!isFinite(unitPrice) || !isFinite(quantity) || unitPrice < 0 || quantity < 0) return 0;
    return parseFloat((unitPrice * quantity).toFixed(2));
}

export function calcCartSummary(items: CartItem[]): CartSummary {
    const subtotal = parseFloat(
        items.reduce((sum, item) => sum + item.lineTotal, 0).toFixed(2)
    );
    const freeShipping = subtotal >= shippingConfig.freeShippingThreshold;
    const shippingFee = freeShipping ? 0 : subtotal > 0 ? shippingConfig.standardShippingFee : 0;
    const total = parseFloat((subtotal + shippingFee).toFixed(2));
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { subtotal, shippingFee, freeShipping, total, itemCount };
}

/** Safely reads the cart from localStorage, recovering from corrupt data. */
export function readCartFromStorage(): CartItem[] {
    if (typeof window === "undefined") return [];
    try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        // Validate each item has required fields
        return parsed.filter(
            (item): item is CartItem =>
                typeof item === "object" &&
                item !== null &&
                typeof item.productId === "string" &&
                typeof item.variantId === "string" &&
                typeof item.productName === "string" &&
                typeof item.variantName === "string" &&
                typeof item.unitPrice === "number" &&
                isFinite(item.unitPrice) &&
                item.unitPrice >= 0 &&
                typeof item.quantity === "number" &&
                item.quantity > 0 &&
                typeof item.lineTotal === "number"
        );
    } catch {
        return [];
    }
}

export function writeCartToStorage(items: CartItem[]): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
        // Storage may be full or disabled — fail silently
    }
}

export function clearCartFromStorage(): void {
    if (typeof window === "undefined") return;
    try {
        localStorage.removeItem(CART_STORAGE_KEY);
    } catch {
        // fail silently
    }
}

export function addItemToCart(items: CartItem[], newItem: CartItem): CartItem[] {
    const existingIndex = items.findIndex(
        (i) => i.productId === newItem.productId && i.variantId === newItem.variantId
    );
    if (existingIndex !== -1) {
        return items.map((item, idx) => {
            if (idx !== existingIndex) return item;
            const quantity = clamp(item.quantity + newItem.quantity, 1, 99);
            return { ...item, quantity, lineTotal: calcLineTotal(item.unitPrice, quantity) };
        });
    }
    return [...items, { ...newItem, lineTotal: calcLineTotal(newItem.unitPrice, newItem.quantity) }];
}

export function updateItemQuantity(
    items: CartItem[],
    productId: string,
    variantId: string,
    quantity: number
): CartItem[] {
    const safeQty = clamp(Math.floor(quantity), 1, 99);
    return items.map((item) => {
        if (item.productId !== productId || item.variantId !== variantId) return item;
        return { ...item, quantity: safeQty, lineTotal: calcLineTotal(item.unitPrice, safeQty) };
    });
}

export function removeItem(
    items: CartItem[],
    productId: string,
    variantId: string
): CartItem[] {
    return items.filter(
        (item) => !(item.productId === productId && item.variantId === variantId)
    );
}
