"use client";
import { useState, useMemo } from "react";
import { Product } from "@/types/product";
import { Category } from "@/lib/data/categories";
import ProductCard from "@/components/product/ProductCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Search } from "lucide-react";

interface Props {
    products: Product[];
    categories: Category[];
}

type SortOption = "featured" | "price-asc" | "price-desc";

export default function ShopClient({ products, categories }: Props) {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [sort, setSort] = useState<SortOption>("featured");

    const filtered = useMemo(() => {
        let list = products.filter((p) => p.active);

        // Category filter
        if (activeCategory !== "all") {
            list = list.filter((p) => p.category === activeCategory);
        }

        // Search (name + category)
        if (search.trim()) {
            const q = search.trim().toLowerCase();
            list = list.filter(
                (p) =>
                    p.name.toLowerCase().includes(q) ||
                    p.category.toLowerCase().includes(q) ||
                    p.shortDescription.toLowerCase().includes(q)
            );
        }

        // Sort
        if (sort === "price-asc") {
            list = [...list].sort(
                (a, b) => (a.variants[0]?.sellingPrice ?? 0) - (b.variants[0]?.sellingPrice ?? 0)
            );
        } else if (sort === "price-desc") {
            list = [...list].sort(
                (a, b) => (b.variants[0]?.sellingPrice ?? 0) - (a.variants[0]?.sellingPrice ?? 0)
            );
        }

        return list;
    }, [products, search, activeCategory, sort]);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                    <h1 className="text-3xl font-bold text-stone-800 mb-2">Shop All Products</h1>
                    <p className="text-stone-500 text-sm mb-8">
                        Traditional oils and everyday essentials from our mill.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-8">
                        {/* Search */}
                        <div className="relative flex-1 max-w-sm">
                            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                            <input
                                type="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search productsâ€¦"
                                aria-label="Search products"
                                className="w-full pl-9 pr-3 py-2 text-sm border border-stone-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-brown)] bg-white"
                            />
                        </div>

                        {/* Category pills */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveCategory("all")}
                                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${activeCategory === "all" ? "bg-[var(--color-brand-brown)] text-white border-[var(--color-brand-brown)]" : "border-stone-200 text-stone-600 hover:border-[var(--color-brand-brown)]"}`}
                            >
                                All
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${activeCategory === cat.id ? "bg-[var(--color-brand-brown)] text-white border-[var(--color-brand-brown)]" : "border-stone-200 text-stone-600 hover:border-[var(--color-brand-brown)]"}`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>

                        {/* Sort */}
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value as SortOption)}
                            aria-label="Sort products"
                            className="text-xs border border-stone-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-brown)] bg-white text-stone-700"
                        >
                            <option value="featured">Featured</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>

                    {/* Results */}
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 text-stone-400">
                            <p className="mb-4">No products found.</p>
                            <button
                                onClick={() => { setSearch(""); setActiveCategory("all"); }}
                                className="text-[var(--color-brand-brown)] underline text-sm"
                            >
                                View all products
                            </button>
                        </div>
                    ) : (
                        <>
                            <p className="text-xs text-stone-400 mb-4">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                                {filtered.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}

