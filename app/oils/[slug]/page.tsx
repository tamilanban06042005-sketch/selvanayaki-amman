import { notFound } from "next/navigation";
import { getProductBySlug, getProductsByCategory } from "@/lib/data/products";
import ProductPageClient from "@/components/product/ProductPageClient";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    const products = getProductsByCategory("oils");
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return {};
    return buildMetadata({
        title: product.name,
        description: product.shortDescription,
        path: `/oils/${slug}`,
    });
}

export default async function OilProductPage({ params }: { params: Params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product || product.category !== "oils") notFound();
    return <ProductPageClient product={product} />;
}
