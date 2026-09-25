export interface Category {
    id: string;
    slug: string;
    name: string;
    description: string;
    productCount?: number;
}

export const categories: Category[] = [
    {
        id: "oils",
        slug: "oils",
        name: "Oils",
        description:
            "Groundnut Oil, Gingelly Oil and Coconut Oil — carefully processed and hygienically packed.",
    },
    {
        id: "powders",
        slug: "powders",
        name: "Food & Powders",
        description:
            "Health Mix Powder, Turmeric Powder and Green Gram Powder — hygienically processed and packed.",
    },
    {
        id: "personal-care",
        slug: "personal-care",
        name: "Personal Care",
        description:
            "Shikakai Powder — traditional personal care products from our mill.",
    },
];

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug);
}
