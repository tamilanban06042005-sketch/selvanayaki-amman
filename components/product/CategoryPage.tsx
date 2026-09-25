import Link from "next/link";
import { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface Props {
    categoryName: string;
    categorySlug: string;
    products: Product[];
}

export default function CategoryPage({ categoryName, categorySlug, products }: Props) {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50 pt-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex items-center gap-2 text-xs text-stone-400">
                            <li><Link href="/" className="hover:text-amber-700">Home</Link></li>
                            <li aria-hidden="true">/</li>
                            <li><Link href="/shop" className="hover:text-amber-700">Shop</Link></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-stone-600 font-medium" aria-current="page">{categoryName}</li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl font-bold text-stone-800 mb-2">{categoryName}</h1>
                    <p className="text-stone-500 mb-8 text-sm">{products.length} product{products.length !== 1 ? "s" : ""}</p>

                    {products.length === 0 ? (
                        <div className="text-center py-20 text-stone-400">
                            <p className="mb-4">No products found in this category.</p>
                            <Link href="/shop" className="text-amber-700 underline">View all products</Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}
