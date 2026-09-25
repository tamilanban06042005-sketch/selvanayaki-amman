import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/lib/data/products";

export default function ShopPage() {
    const oils = products.filter((p) => p.category === "oils");
    const powders = products.filter((p) => p.category === "powders");
    const personalCare = products.filter((p) => p.category === "personal-care");

    return (
        <>
            <Header />
            <main className="bg-brand-soft-cream pt-32 pb-24 px-6 lg:px-12 min-h-screen">
                <div className="max-w-[1600px] mx-auto">
                    <SectionHeading eyebrow="Our Collection" title="DISCOVER OUR ESSENTIALS" />

                    {/* TRADITIONAL OILS */}
                    <div className="mb-24">
                        <h3 className="text-xl md:text-2xl font-playfair font-bold text-brand-heritage mb-8 border-b border-brand-heritage/20 pb-4">
                            Traditional Oils
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
                            {oils.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* FOOD & HEALTH POWDERS */}
                    <div className="mb-24">
                        <h3 className="text-xl md:text-2xl font-playfair font-bold text-brand-heritage mb-8 border-b border-brand-heritage/20 pb-4">
                            Food & Health Powders
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
                            {powders.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* NATURAL CARE */}
                    <div className="mb-12">
                        <h3 className="text-xl md:text-2xl font-playfair font-bold text-brand-heritage mb-8 border-b border-brand-heritage/20 pb-4">
                            Natural Care
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-12">
                            {personalCare.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
