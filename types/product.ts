export interface Product {
    id: string;
    slug: string;
    name: string;
    category: string;
    subcategory?: string;
    shortDescription: string;
    description: string;
    ingredients?: string;
    processingMethod?: string;
    intendedUse?: string;
    variants: Variant[];
    images: string[];
    storageInstructions?: string;
    shelfLife?: string;
    nutrition?: string;
    allergens?: string;
    origin?: string;
    sku?: string;
    brand?: string;
    manufacturer?: string;
    fssai?: string;
    featured?: boolean;
    bestSeller?: boolean;
    active: boolean;
}

export interface Variant {
    id: string;
    size: string;
    unit: string;
    sku?: string;
    mrp?: number;
    sellingPrice: number;
    stockStatus: "IN_STOCK" | "OUT_OF_STOCK";
    image?: string;
    quantityValue: number;
    quantityUnit: string;
    available: boolean;
}
