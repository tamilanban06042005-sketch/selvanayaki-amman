import { notFound } from "next/navigation";
import { getProductBySlug, getProductsByCategory } from "@/lib/data/products";
import ProductPageClient from "@/components/product/ProductPageClient";
import { buildMetadata, productJsonLd } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    const products = getProductsByCategory("personal-care");
    return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return {};
    return buildMetadata({
        title: product.name,
        description: product.shortDescription,
        path: `/personal-care/${slug}`,
    });
}

export default async function PersonalCareProductPage({ params }: { params: Params }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product || product.category !== "personal-care") notFound();

    const variant = product.variants.find((v) => v.available) ?? product.variants[0];
    const schema = productJsonLd({
        name: product.name,
        description: product.description || product.shortDescription,
        image: product.images[0],
        slug: product.slug,
        category: product.category,
        sellingPrice: variant?.sellingPrice ?? 0,
        mrp: variant?.mrp ?? 0,
        available: variant?.available ?? false,
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ProductPageClient product={product} />
        </>
    );
}
