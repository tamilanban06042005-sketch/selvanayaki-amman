// /shop page stub
import { buildMetadata } from "@/lib/seo";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import ShopClient from "./ShopClient";

export const metadata = buildMetadata({
    title: "Shop All Products",
    description:
        "Browse all products from Sree Selvanayaki Amman Oil & Flour Mill — oils, powders and personal care products.",
    path: "/shop",
});

export default function ShopPage() {
    return <ShopClient products={products} categories={categories} />;
}
