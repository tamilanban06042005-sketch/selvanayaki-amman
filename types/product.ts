export type StockStatus = "in_stock" | "out_of_stock" | "low_stock";
export type Category = "oils" | "powders" | "personal-care";

export interface ProductVariant {
    id: string;
    size: string; // e.g. "500 ml", "1 L", "250 g"
    unit: "ml" | "L" | "g" | "kg";
    quantityValue: number;
    quantityUnit: "ml" | "L" | "g" | "kg";
    sku?: string;
    mrp: number;
    sellingPrice: number;
    stockStatus: StockStatus;
    image?: string;
    available: boolean;
}

export interface ProductNutrition {
    energy?: string;
    fat?: string;
    saturatedFat?: string;
    protein?: string;
    carbohydrates?: string;
    sodium?: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    category: Category;
    subcategory?: string;
    shortDescription: string;
    description: string;
    ingredients?: string;
    processingMethod?: string;
    intendedUse?: string;
    variants: ProductVariant[];
    images: string[]; // paths relative to /public
    storageInstructions?: string;
    shelfLife?: string;
    nutrition?: ProductNutrition;
    allergens?: string;
    origin?: string;
    brand: string;
    manufacturer: string;
    fssai: string;
    featured: boolean;
    bestSeller: boolean;
    active: boolean;
}
