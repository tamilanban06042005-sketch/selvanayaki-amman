import { Product } from "@/types/product";

/** ──────────────────────────────────────────────────────────────────────────
 *  SREE SELVANAYAKI AMMAN OIL & FLOUR MILL — PRODUCT CATALOG
 *
 *  EXACTLY 7 PRODUCTS — DO NOT ADD MORE.
 *  Approved products:
 *    1. Groundnut Oil        (oils)
 *    2. Gingelly Oil         (oils)
 *    3. Coconut Oil          (oils)
 *    4. Health Mix Powder    (powders)
 *    5. Turmeric Powder      (powders)
 *    6. Green Gram Powder    (powders)  ← intendedUse UNRESOLVED — do not categorise as food or personal care
 *    7. Shikakai Powder      (powders)
 *
 *  PRICE NOTE: Groundnut Oil, Gingelly Oil and Coconut Oil 500 ml variants
 *  carry half-rupee (.50) prices directly from the supplied price list.
 *  These are flagged below and require owner confirmation before rounding.
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

/** Runtime guard — throws in development if an unapproved product enters the list */
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
    category: "products",
    shortDescription: "Traditional groundnut oil from our mill in Pidariyur, Erode.",
    description:
        "Groundnut oil from Sree Selvanayaki Amman Oil & Flour Mill is prepared from carefully selected groundnuts, ensuring a deep flavour and traditional quality for your everyday cooking.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    storageInstructions: "Store in a cool, dry place away from direct sunlight.",
    featured: true,
    bestSeller: true,
    active: true,
    images: ["/groundnut oil.jpeg"],
    variants: [
        // ⚠️ 500 ml price carries .50 — owner confirmation required before rounding
        { id: "groundnut-500ml", size: "500 ml", unit: "ml", quantityValue: 500, quantityUnit: "ml", mrp: 159.5, sellingPrice: 149.5, stockStatus: "IN_STOCK", available: true },
        { id: "groundnut-1l", size: "1 L", unit: "L", quantityValue: 1, quantityUnit: "L", mrp: 319, sellingPrice: 299, stockStatus: "IN_STOCK", available: true },
        { id: "groundnut-5l", size: "5 L", unit: "L", quantityValue: 5, quantityUnit: "L", mrp: 1595, sellingPrice: 1495, stockStatus: "IN_STOCK", available: true },
    ],
};

const gingellyOil: Product = {
    id: "gingelly-oil",
    slug: "gingelly-oil",
    name: "Gingelly Oil",
    category: "products",
    shortDescription: "Traditional sesame oil with rich, warm amber notes.",
    description:
        "Gingelly oil (sesame oil) from Sree Selvanayaki Amman Oil & Flour Mill is made from carefully selected sesame seeds.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    storageInstructions: "Keep tightly sealed in a cool place.",
    featured: true,
    bestSeller: true,
    active: true,
    images: ["/gingelly oil.jpeg"],
    variants: [
        // ⚠️ 500 ml price carries .50 — owner confirmation required before rounding
        { id: "gingelly-500ml", size: "500 ml", unit: "ml", quantityValue: 500, quantityUnit: "ml", mrp: 249.5, sellingPrice: 229.5, stockStatus: "IN_STOCK", available: true },
        { id: "gingelly-1l", size: "1 L", unit: "L", quantityValue: 1, quantityUnit: "L", mrp: 499, sellingPrice: 459, stockStatus: "IN_STOCK", available: true },
        { id: "gingelly-5l", size: "5 L", unit: "L", quantityValue: 5, quantityUnit: "L", mrp: 2495, sellingPrice: 2295, stockStatus: "IN_STOCK", available: true },
    ],
};

const coconutOil: Product = {
    id: "coconut-oil",
    slug: "coconut-oil",
    name: "Coconut Oil",
    category: "products",
    shortDescription: "Traditional coconut oil extracted for pure, natural freshness.",
    description:
        "Coconut oil from Sree Selvanayaki Amman Oil & Flour Mill brings the natural quality of selected coconuts straight to your home. NOTE: No 5 L variant — do not add one without owner confirmation.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: false,
    active: true,
    images: ["/coconut oil.jpeg"],
    variants: [
        // ⚠️ 500 ml price carries .50 — owner confirmation required before rounding
        { id: "coconut-500ml", size: "500 ml", unit: "ml", quantityValue: 500, quantityUnit: "ml", mrp: 214.5, sellingPrice: 199.5, stockStatus: "IN_STOCK", available: true },
        { id: "coconut-1l", size: "1 L", unit: "L", quantityValue: 1, quantityUnit: "L", mrp: 429, sellingPrice: 399, stockStatus: "IN_STOCK", available: true },
        // No 5 L variant for Coconut Oil — do not create one.
    ],
};

// ─── 2. POWDERS ──────────────────────────────────────────────────────────

const healthMixPowder: Product = {
    id: "health-mix-powder",
    slug: "health-mix-powder",
    name: "Health Mix Powder",
    category: "products",
    shortDescription: "A blend of essential grains, hygienically processed at our mill.",
    description:
        "Our Health Mix is prepared from a blend of grains at Sree Selvanayaki Amman Oil & Flour Mill, hygienically packed for daily use.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: true,
    active: true,
    images: ["/groundnut oil.jpeg"], // placeholder — replace with actual health-mix image
    variants: [
        { id: "health-mix-250g", size: "250 g", unit: "g", quantityValue: 250, quantityUnit: "g", mrp: 150, sellingPrice: 125, stockStatus: "IN_STOCK", available: true },
        { id: "health-mix-500g", size: "500 g", unit: "g", quantityValue: 500, quantityUnit: "g", mrp: 300, sellingPrice: 250, stockStatus: "IN_STOCK", available: true },
    ],
};

const turmericPowder: Product = {
    id: "turmeric-powder",
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    category: "products",
    shortDescription: "Earthy, vibrant turmeric powder sourced carefully.",
    description:
        "Turmeric Powder uniformly processed and packed at Sree Selvanayaki Amman Oil & Flour Mill. Essential for any kitchen.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: false,
    active: true,
    images: ["/groundnut oil.jpeg"], // placeholder — replace with actual turmeric image
    variants: [
        { id: "turmeric-100g", size: "100 g", unit: "g", quantityValue: 100, quantityUnit: "g", mrp: 80, sellingPrice: 75, stockStatus: "IN_STOCK", available: true },
        { id: "turmeric-250g", size: "250 g", unit: "g", quantityValue: 250, quantityUnit: "g", mrp: 200, sellingPrice: 175, stockStatus: "IN_STOCK", available: true },
    ],
};

const greenGramPowder: Product = {
    id: "green-gram-powder",
    slug: "green-gram-powder",
    name: "Green Gram Powder",
    category: "products",
    // ⚠️ UNRESOLVED: intendedUse is unclear — owner must confirm Food OR Personal Care
    // DO NOT describe as food. DO NOT describe as personal care. DO NOT make any claims.
    intendedUse: undefined, // PENDING OWNER DECISION
    shortDescription: "Finely ground green gram powder from our mill.",
    description:
        "Green Gram Powder prepared from selected green grams, properly cleaned and milled at Sree Selvanayaki Amman Oil & Flour Mill. Intended use to be confirmed by owner.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: false,
    active: true,
    images: ["/groundnut oil.jpeg"], // placeholder — replace with actual green-gram image
    variants: [
        { id: "green-gram-100g", size: "100 g", unit: "g", quantityValue: 100, quantityUnit: "g", mrp: 60, sellingPrice: 50, stockStatus: "IN_STOCK", available: true },
        { id: "green-gram-250g", size: "250 g", unit: "g", quantityValue: 250, quantityUnit: "g", mrp: 150, sellingPrice: 125, stockStatus: "IN_STOCK", available: true },
    ],
};

const shikakaiPowder: Product = {
    id: "shikakai-powder",
    slug: "shikakai-powder",
    name: "Shikakai Powder",
    category: "products",
    shortDescription: "Traditional shikakai powder carefully sourced and processed.",
    description:
        "Shikakai Powder gently processed and packed at Sree Selvanayaki Amman Oil & Flour Mill.",
    brand: "Sree Selvanayaki Amman",
    manufacturer: "Sree Selvanayaki Amman Oil & Flour Mill",
    fssai: "22419058000081",
    featured: true,
    bestSeller: false,
    active: true,
    images: ["/groundnut oil.jpeg"], // placeholder — replace with actual shikakai image
    variants: [
        { id: "shikakai-100g", size: "100 g", unit: "g", quantityValue: 100, quantityUnit: "g", mrp: 60, sellingPrice: 50, stockStatus: "IN_STOCK", available: true },
        { id: "shikakai-250g", size: "250 g", unit: "g", quantityValue: 250, quantityUnit: "g", mrp: 150, sellingPrice: 125, stockStatus: "IN_STOCK", available: true },
        { id: "shikakai-500g", size: "500 g", unit: "g", quantityValue: 500, quantityUnit: "g", mrp: 300, sellingPrice: 250, stockStatus: "IN_STOCK", available: true },
    ],
};

// ─── MASTER CATALOG ────────────────────────────────────────────────────────
// Exactly 7 products — no more, no less.

export const products: Product[] = [
    groundnutOil,
    gingellyOil,
    coconutOil,
    healthMixPowder,
    turmericPowder,
    greenGramPowder,
    shikakaiPowder,
];

// Runtime validation — runs once at module load during development
if (process.env.NODE_ENV === "development") {
    products.forEach((p) => assertApproved(p.slug));
    if (products.length !== 7) {
        console.error(
            `[products] Expected exactly 7 products but found ${products.length}.`
        );
    }
}

// ─── QUERY HELPERS ────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((p) => p.slug === slug && p.active);
}

export function getProductsByCategory(category: Product["category"]): Product[] {
    return products.filter((p) => p.category === category && p.active);
}

export function getFeaturedProducts(): Product[] {
    return products.filter((p) => p.featured && p.active);
}

export function getOils(): Product[] {
    return products.filter((p) => ["groundnut-oil", "gingelly-oil", "coconut-oil"].includes(p.slug) && p.active);
}

export function getPowders(): Product[] {
    return products.filter((p) => ["health-mix-powder", "turmeric-powder", "green-gram-powder", "shikakai-powder"].includes(p.slug) && p.active);
}
