// /oils category page
import { buildMetadata } from "@/lib/seo";
import { getProductsByCategory } from "@/lib/data/products";
import CategoryPage from "@/components/product/CategoryPage";

export const metadata = buildMetadata({
    title: "Oils — Groundnut, Gingelly & Coconut",
    description:
        "Shop Groundnut Oil, Gingelly Oil and Coconut Oil from Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/oils",
});

export default function OilsPage() {
    const products = getProductsByCategory("oils");
    return (
        <CategoryPage
            categoryName="Oils"
            categorySlug="oils"
            products={products}
        />
    );
}
