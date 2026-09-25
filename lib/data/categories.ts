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
        name: "Traditional Oils",
        description: "Groundnut Oil, Gingelly Oil, and Coconut Oil — processed with heritage wisdom.",
    },
    {
        id: "powders",
        slug: "powders",
        name: "Powders",
        description: "Turmeric, Shikakai, Green Gram, and Health Mix — essential powders for everyday use.",
    },
];

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug);
}
