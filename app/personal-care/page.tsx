// /personal-care category page
import { buildMetadata } from "@/lib/seo";
import { getProductsByCategory } from "@/lib/data/products";
import CategoryPage from "@/components/product/CategoryPage";

export const metadata = buildMetadata({
    title: "Personal Care — Shikakai Powder",
    description:
        "Shop Shikakai Powder and personal care products from Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/personal-care",
});

export default function PersonalCarePage() {
    const products = getProductsByCategory("personal-care");
    return (
        <CategoryPage
            categoryName="Personal Care"
            categorySlug="personal-care"
            products={products}
        />
    );
}
