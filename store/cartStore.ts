"use client";
import { create } from "zustand";
import { CartItem } from "@/types/cart";
import { CartSummary } from "@/types/cart";
import {
    addItemToCart,
    updateItemQuantity,
    removeItem,
    calcCartSummary,
    readCartFromStorage,
    writeCartToStorage,
    clearCartFromStorage,
} from "@/lib/cart";

interface CartStore {
    items: CartItem[];
    summary: CartSummary;
    hydrated: boolean;
    isOpen: boolean;
    addItem: (item: CartItem) => void;
    updateQuantity: (productId: string, variantId: string, qty: number) => void;
    removeItem: (productId: string, variantId: string) => void;
    clearCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    hydrate: () => void;
}

const emptySummary: CartSummary = {
    subtotal: 0,
    shippingFee: 0,
    freeShipping: false,
    total: 0,
    itemCount: 0,
};

export const useCartStore = create<CartStore>((set, get) => ({
    items: [],
    summary: emptySummary,
    hydrated: false,
    isOpen: false,

    hydrate: () => {
        if (get().hydrated) return;
        const items = readCartFromStorage();
        set({ items, summary: calcCartSummary(items), hydrated: true });
    },

    addItem: (newItem) => {
        const items = addItemToCart(get().items, newItem);
        writeCartToStorage(items);
        set({ items, summary: calcCartSummary(items), isOpen: true });
    },

    updateQuantity: (productId, variantId, qty) => {
        const items = updateItemQuantity(get().items, productId, variantId, qty);
        writeCartToStorage(items);
        set({ items, summary: calcCartSummary(items) });
    },

    removeItem: (productId, variantId) => {
        const items = removeItem(get().items, productId, variantId);
        writeCartToStorage(items);
        set({ items, summary: calcCartSummary(items) });
    },

    clearCart: () => {
        clearCartFromStorage();
        set({ items: [], summary: emptySummary });
    },

    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
}));
