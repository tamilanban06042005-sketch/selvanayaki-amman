import { Product } from "@/types/product";

// NOTE (owner confirmation required):
// 1. Green Gram Powder intended use: Food OR Personal Care — currently placed in "powders" pending confirmation.
// 2. Oil prices with .50 values are kept exactly as supplied. Owner should confirm rounding preference.

export const products: Product[] = [
    // ─── OILS ───────────────────────────────────────────────────────────────────
    {
        id: "groundnut-oil",
        slug: "groundnut-oil",
        name: "Groundnut Oil",
        category: "oils",
        shortDescription:
            "Traditional groundnut oil, carefully processed and hygienically packed.",
        description:
            "Groundnut oil from Sree Selvanayaki Amman Oil & Flour Mill is made from carefully selected groundnuts, processed and hygienically packed at our mill.",
        brand: "Sree Selvanayaki Amman",
        manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
        fssai: "22419058000081",
        featured: true,
        bestSeller: false,
        active: true,
        images: ["/groundnut-oil.jpeg"],
        variants: [
            {
                id: "groundnut-500ml",
                size: "500 ml",
                unit: "ml",
                quantityValue: 500,
                quantityUnit: "ml",
                mrp: 159.5,
                sellingPrice: 149.5,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "groundnut-1l",
                size: "1 L",
                unit: "L",
                quantityValue: 1,
                quantityUnit: "L",
                mrp: 319,
                sellingPrice: 299,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "groundnut-5l",
                size: "5 L",
                unit: "L",
                quantityValue: 5,
                quantityUnit: "L",
                mrp: 1595,
                sellingPrice: 1495,
                stockStatus: "in_stock",
                available: true,
            },
        ],
    },
    {
        id: "gingelly-oil",
        slug: "gingelly-oil",
        name: "Gingelly Oil",
        category: "oils",
        shortDescription:
            "Traditional gingelly (sesame) oil, carefully processed and hygienically packed.",
        description:
            "Gingelly oil (sesame oil) from Sree Selvanayaki Amman Oil & Flour Mill is made from carefully selected sesame seeds, processed and hygienically packed at our mill.",
        brand: "Sree Selvanayaki Amman",
        manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
        fssai: "22419058000081",
        featured: true,
        bestSeller: false,
        active: true,
        images: ["/gingelly-oil.jpeg"],
        variants: [
            {
                id: "gingelly-500ml",
                size: "500 ml",
                unit: "ml",
                quantityValue: 500,
                quantityUnit: "ml",
                mrp: 249.5,
                sellingPrice: 229.5,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "gingelly-1l",
                size: "1 L",
                unit: "L",
                quantityValue: 1,
                quantityUnit: "L",
                mrp: 499,
                sellingPrice: 459,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "gingelly-5l",
                size: "5 L",
                unit: "L",
                quantityValue: 5,
                quantityUnit: "L",
                mrp: 2495,
                sellingPrice: 2295,
                stockStatus: "in_stock",
                available: true,
            },
        ],
    },
    {
        id: "coconut-oil",
        slug: "coconut-oil",
        name: "Coconut Oil",
        category: "oils",
        shortDescription:
            "Traditional coconut oil, carefully processed and hygienically packed.",
        description:
            "Coconut oil from Sree Selvanayaki Amman Oil & Flour Mill is made from carefully selected coconuts, processed and hygienically packed at our mill.",
        brand: "Sree Selvanayaki Amman",
        manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
        fssai: "22419058000081",
        featured: true,
        bestSeller: false,
        active: true,
        images: ["/coconut-oil.jpeg"],
        variants: [
            {
                id: "coconut-500ml",
                size: "500 ml",
                unit: "ml",
                quantityValue: 500,
                quantityUnit: "ml",
                mrp: 214.5,
                sellingPrice: 199.5,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "coconut-1l",
                size: "1 L",
                unit: "L",
                quantityValue: 1,
                quantityUnit: "L",
                mrp: 429,
                sellingPrice: 399,
                stockStatus: "in_stock",
                available: true,
            },
            // NOTE: No 5 L variant for Coconut Oil — do NOT add one.
        ],
    },

    // ─── FOOD / POWDERS ───────────────────────────────────────────────────────
    {
        id: "health-mix",
        slug: "health-mix",
        name: "Health Mix Powder",
        category: "powders",
        shortDescription:
            "Nutritious health mix powder, hygienically processed and packed.",
        description:
            "Health Mix Powder from Sree Selvanayaki Amman Oil & Flour Mill is hygienically processed and packed at our mill.",
        brand: "Sree Selvanayaki Amman",
        manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
        fssai: "22419058000081",
        featured: true,
        bestSeller: false,
        active: true,
        images: ["/health-mix.png"],
        variants: [
            {
                id: "health-mix-250g",
                size: "250 g",
                unit: "g",
                quantityValue: 250,
                quantityUnit: "g",
                mrp: 150,
                sellingPrice: 125,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "health-mix-500g",
                size: "500 g",
                unit: "g",
                quantityValue: 500,
                quantityUnit: "g",
                mrp: 300,
                sellingPrice: 250,
                stockStatus: "in_stock",
                available: true,
            },
        ],
    },
    {
        id: "turmeric",
        slug: "turmeric",
        name: "Turmeric Powder",
        category: "powders",
        shortDescription: "Pure turmeric powder, hygienically processed and packed.",
        description:
            "Turmeric Powder from Sree Selvanayaki Amman Oil & Flour Mill is hygienically processed and packed at our mill.",
        brand: "Sree Selvanayaki Amman",
        manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
        fssai: "22419058000081",
        featured: false,
        bestSeller: false,
        active: true,
        images: ["/turmeric.png"],
        variants: [
            {
                id: "turmeric-100g",
                size: "100 g",
                unit: "g",
                quantityValue: 100,
                quantityUnit: "g",
                mrp: 80,
                sellingPrice: 75,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "turmeric-250g",
                size: "250 g",
                unit: "g",
                quantityValue: 250,
                quantityUnit: "g",
                mrp: 200,
                sellingPrice: 175,
                stockStatus: "in_stock",
                available: true,
            },
        ],
    },
    {
        id: "green-gram",
        slug: "green-gram",
        name: "Green Gram Powder",
        category: "personal-care",
        intendedUse: "Personal care",
        shortDescription:
            "Traditional green gram powder for personal care, hygienically processed and packed.",
        description:
            "Green Gram Powder from Sree Selvanayaki Amman Oil & Flour Mill is a traditional personal care powder, hygienically processed and packed at our mill.",
        brand: "Sree Selvanayaki Amman",
        manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
        fssai: "22419058000081",
        featured: false,
        bestSeller: false,
        active: true,
        images: ["/green-gram.png"],
        variants: [
            {
                id: "green-gram-100g",
                size: "100 g",
                unit: "g",
                quantityValue: 100,
                quantityUnit: "g",
                mrp: 60,
                sellingPrice: 50,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "green-gram-250g",
                size: "250 g",
                unit: "g",
                quantityValue: 250,
                quantityUnit: "g",
                mrp: 150,
                sellingPrice: 125,
                stockStatus: "in_stock",
                available: true,
            },
        ],
    },

    // ─── PERSONAL CARE ───────────────────────────────────────────────────────
    {
        id: "shikakai",
        slug: "shikakai",
        name: "Shikakai Powder",
        category: "personal-care",
        shortDescription:
            "Traditional shikakai powder for hair care, hygienically processed and packed.",
        description:
            "Shikakai Powder from Sree Selvanayaki Amman Oil & Flour Mill is a traditional hair care powder, hygienically processed and packed at our mill.",
        intendedUse: "Personal care — hair care",
        brand: "Sree Selvanayaki Amman",
        manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
        fssai: "22419058000081",
        featured: false,
        bestSeller: false,
        active: true,
        images: ["/shikakai.png"],
        variants: [
            {
                id: "shikakai-100g",
                size: "100 g",
                unit: "g",
                quantityValue: 100,
                quantityUnit: "g",
                mrp: 60,
                sellingPrice: 50,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "shikakai-250g",
                size: "250 g",
                unit: "g",
                quantityValue: 250,
                quantityUnit: "g",
                mrp: 150,
                sellingPrice: 125,
                stockStatus: "in_stock",
                available: true,
            },
            {
                id: "shikakai-500g",
                size: "500 g",
                unit: "g",
                quantityValue: 500,
                quantityUnit: "g",
                mrp: 300,
                sellingPrice: 250,
                stockStatus: "in_stock",
                available: true,
            },
        ],
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug && p.active);
}

export function getProductsByCategory(
    category: Product["category"]
): Product[] {
    return products.filter((p) => p.category === category && p.active);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((p) => p.featured && p.active);
}
