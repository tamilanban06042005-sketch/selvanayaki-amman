// /powders category page
import { buildMetadata } from "@/lib/seo";
import { getProductsByCategory } from "@/lib/data/products";
import CategoryPage from "@/components/product/CategoryPage";

export const metadata = buildMetadata({
    title: "Food & Powders — Health Mix, Turmeric & More",
    description:
        "Shop Health Mix Powder, Turmeric Powder and Green Gram Powder from Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/powders",
});

export default function PowdersPage() {
    const products = getProductsByCategory("powders");
    return (
        <CategoryPage
            categoryName="Food & Powders"
            categorySlug="powders"
            products={products}
        />
    );
}
