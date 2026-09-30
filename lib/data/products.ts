import { Product } from "@/types/product";

/** ──────────────────────────────────────────────────────────────────────────
 *  SREE SELVANAYAKI AMMAN OIL & FLOUR MILL — PRODUCT CATALOG
 *  EXACTLY 7 PRODUCTS — DO NOT ADD MORE.
 * ─────────────────────────────────────────────────────────────────────────── */

const APPROVED_SLUGS = [
    "groundnut-oil",
    "gingelly-oil",
    "coconut-oil",
    "health-mix-powder",
    "turmeric-powder",
    "green-gram-powder",
    "shikakai-powder",
] as const;

export type ApprovedSlug = (typeof APPROVED_SLUGS)[number];

function assertApproved(slug: string): void {
    if (!(APPROVED_SLUGS as readonly string[]).includes(slug)) {
        throw new Error(
            `[products] Unapproved product slug "${slug}" detected. ` +
            `Only these 7 slugs are permitted: ${APPROVED_SLUGS.join(", ")}`
        );
    }
}

// ─── 1. TRADITIONAL OILS ──────────────────────────────────────────────────

const groundnutOil: Product = {
    id: "groundnut-oil",
    slug: "groundnut-oil",
    name: "Groundnut Oil",
    category: "oils",
    shortDescription: "Traditional groundnut oil from our mill in Pidariyur, Erode.",
    description: "Groundnut oil from Sree Selvanayaki Amman Oil & Flour Mill is prepared from carefully selected groundnuts, ensuring a deep flavour and traditional quality for your everyday cooking.",
    ingredients: ["Groundnuts (100%)"],
    processingMethod: "Stone mill pressed and naturally settled — no chemicals, no heat treatment.",
    shippingInfo: "Ships within 1–2 working days. Free shipping for orders ₹1,000 and above.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    storageInstructions: "Store in a cool, dry place away from direct sunlight.",
    featured: true,
    bestSeller: true,
    active: true,
    images: ["/groundnut oil.jpeg"],
    variants: [
        { id: "groundnut-500ml", size: "500 ml", unit: "ml", quantityValue: 500, quantityUnit: "ml", mrp: 160, sellingPrice: 150, stockStatus: "IN_STOCK", available: true },
        { id: "groundnut-1l", size: "1 L", unit: "L", quantityValue: 1, quantityUnit: "L", mrp: 319, sellingPrice: 299, stockStatus: "IN_STOCK", available: true },
        { id: "groundnut-5l", size: "5 L", unit: "L", quantityValue: 5, quantityUnit: "L", mrp: 1595, sellingPrice: 1495, stockStatus: "IN_STOCK", available: true },
    ],
};

const gingellyOil: Product = {
    id: "gingelly-oil",
    slug: "gingelly-oil",
    name: "Gingelly Oil",
    category: "oils",
    shortDescription: "Traditional sesame oil with rich, warm amber notes.",
    description: "Gingelly oil (sesame oil) from Sree Selvanayaki Amman Oil & Flour Mill is made from carefully selected sesame seeds. Rich in natural antioxidants with a warm, aromatic flavour.",
    ingredients: ["Sesame Seeds (100%)"],
    processingMethod: "Traditional stone mill cold press — sesame seeds are cleaned, pressed and settled naturally.",
    shippingInfo: "Ships within 1–2 working days. Free shipping for orders ₹1,000 and above.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    storageInstructions: "Keep tightly sealed in a cool place.",
    featured: true,
    bestSeller: true,
    active: true,
    images: ["/gingelly oil.jpeg"],
    variants: [
        { id: "gingelly-500ml", size: "500 ml", unit: "ml", quantityValue: 500, quantityUnit: "ml", mrp: 250, sellingPrice: 230, stockStatus: "IN_STOCK", available: true },
        { id: "gingelly-1l", size: "1 L", unit: "L", quantityValue: 1, quantityUnit: "L", mrp: 499, sellingPrice: 459, stockStatus: "IN_STOCK", available: true },
        { id: "gingelly-5l", size: "5 L", unit: "L", quantityValue: 5, quantityUnit: "L", mrp: 2495, sellingPrice: 2295, stockStatus: "IN_STOCK", available: true },
    ],
};

const coconutOil: Product = {
    id: "coconut-oil",
    slug: "coconut-oil",
    name: "Coconut Oil",
    category: "oils",
    shortDescription: "Traditional coconut oil extracted for pure, natural freshness.",
    description: "Coconut oil from Sree Selvanayaki Amman Oil & Flour Mill brings the natural quality of selected coconuts straight to your home.",
    ingredients: ["Coconut (100%)"],
    processingMethod: "Extracted from fresh coconuts using traditional mill methods. Naturally settled.",
    shippingInfo: "Ships within 1–2 working days. Free shipping for orders ₹1,000 and above.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: false,
    active: true,
    images: ["/coconut oil.jpeg"],
    variants: [
        { id: "coconut-500ml", size: "500 ml", unit: "ml", quantityValue: 500, quantityUnit: "ml", mrp: 215, sellingPrice: 200, stockStatus: "IN_STOCK", available: true },
        { id: "coconut-1l", size: "1 L", unit: "L", quantityValue: 1, quantityUnit: "L", mrp: 429, sellingPrice: 399, stockStatus: "IN_STOCK", available: true },
    ],
};

// ─── 2. POWDERS ──────────────────────────────────────────────────────────

const healthMixPowder: Product = {
    id: "health-mix-powder",
    slug: "health-mix-powder",
    name: "Health Mix Powder",
    category: "powders",
    shortDescription: "A blend of essential grains, hygienically processed at our mill.",
    description: "Our Health Mix is prepared from a blend of grains at Sree Selvanayaki Amman Oil & Flour Mill, hygienically packed for daily use.",
    ingredients: ["Roasted Grains Blend"],
    processingMethod: "Grains are cleaned, roasted and milled hygienically at our flour mill.",
    shippingInfo: "Ships within 1–2 working days. Powders are packed in sealed food-grade bags.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: true,
    active: true,
    images: ["/health-mix-powder.jpeg"],
    variants: [
        { id: "health-mix-250g", size: "250 g", unit: "g", quantityValue: 250, quantityUnit: "g", mrp: 150, sellingPrice: 125, stockStatus: "IN_STOCK", available: true },
        { id: "health-mix-500g", size: "500 g", unit: "g", quantityValue: 500, quantityUnit: "g", mrp: 300, sellingPrice: 250, stockStatus: "IN_STOCK", available: true },
    ],
};

const turmericPowder: Product = {
    id: "turmeric-powder",
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "powders",
    shortDescription: "Earthy, vibrant turmeric powder sourced carefully.",
    description: "Turmeric Powder uniformly processed and packed at Sree Selvanayaki Amman Oil & Flour Mill. Essential for any kitchen.",
    ingredients: ["Turmeric (100%)"],
    processingMethod: "Sun-dried turmeric roots cleaned and milled at our mill to a fine, uniform powder.",
    shippingInfo: "Ships within 1–2 working days. Packed in sealed food-grade bags.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: false,
    active: true,
    images: ["/turmeric-powder.jpeg"],
    variants: [
        { id: "turmeric-100g", size: "100 g", unit: "g", quantityValue: 100, quantityUnit: "g", mrp: 80, sellingPrice: 75, stockStatus: "IN_STOCK", available: true },
        { id: "turmeric-250g", size: "250 g", unit: "g", quantityValue: 250, quantityUnit: "g", mrp: 200, sellingPrice: 175, stockStatus: "IN_STOCK", available: true },
    ],
};

const greenGramPowder: Product = {
    id: "green-gram-powder",
    slug: "green-gram-powder",
    name: "Green Gram Powder",
    category: "powders",
    shortDescription: "Finely ground green gram powder from our mill.",
    description: "Green Gram Powder prepared from selected green grams, properly cleaned and milled at Sree Selvanayaki Amman Oil & Flour Mill.",
    ingredients: ["Green Gram (100%)"],
    processingMethod: "Green grams are cleaned and milled to a fine powder under hygienic conditions.",
    shippingInfo: "Ships within 1–2 working days. Packed in sealed food-grade bags.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: false,
    active: true,
    images: ["/green-gram-powder.jpeg"],
    variants: [
        { id: "green-gram-100g", size: "100 g", unit: "g", quantityValue: 100, quantityUnit: "g", mrp: 60, sellingPrice: 50, stockStatus: "IN_STOCK", available: true },
        { id: "green-gram-250g", size: "250 g", unit: "g", quantityValue: 250, quantityUnit: "g", mrp: 150, sellingPrice: 125, stockStatus: "IN_STOCK", available: true },
    ],
};

const shikakaiPowder: Product = {
    id: "shikakai-powder",
    slug: "shikakai-powder",
    name: "Shikakai Powder",
    category: "powders",
    shortDescription: "Traditional shikakai powder carefully sourced and processed.",
    description: "Shikakai Powder gently processed and packed at Sree Selvanayaki Amman Oil & Flour Mill.",
    ingredients: ["Shikakai (100%)"],
    processingMethod: "Shikakai pods are dried and finely milled to a smooth powder.",
    shippingInfo: "Ships within 1–2 working days. Packed in sealed food-grade bags.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: false,
    active: true,
    images: ["/shikakai-powder.jpeg"],
    variants: [
        { id: "shikakai-100g", size: "100 g", unit: "g", quantityValue: 100, quantityUnit: "g", mrp: 60, sellingPrice: 50, stockStatus: "IN_STOCK", available: true },
        { id: "shikakai-250g", size: "250 g", unit: "g", quantityValue: 250, quantityUnit: "g", mrp: 150, sellingPrice: 125, stockStatus: "IN_STOCK", available: true },
        { id: "shikakai-500g", size: "500 g", unit: "g", quantityValue: 500, quantityUnit: "g", mrp: 300, sellingPrice: 250, stockStatus: "IN_STOCK", available: true },
    ],
};

// ─── MASTER CATALOG ────────────────────────────────────────────────────────

export const products: Product[] = [
    groundnutOil,
    gingellyOil,
    coconutOil,
    healthMixPowder,
    turmericPowder,
    greenGramPowder,
    shikakaiPowder,
];

if (process.env.NODE_ENV === "development") {
    products.forEach((p) => assertApproved(p.slug));
    if (products.length !== 7) {
        console.error(`[products] Expected exactly 7 products but found ${products.length}.`);
    }
}

// ─── QUERY HELPERS ────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug && p.active);
}

export function getProductsByCategory(category: string): Product[] {
    return products.filter((p) => p.category === category && p.active);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((p) => p.featured && p.active);
}

export function getOils(): Product[] {
    return products.filter((p) => p.category === "oils" && p.active);
}

export function getPowders(): Product[] {
    return products.filter((p) => p.category === "powders" && p.active);
}
