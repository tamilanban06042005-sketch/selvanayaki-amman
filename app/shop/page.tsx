import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: 'Shop - Sree Selvanayaki Amman',
    description: 'Explore our premium selection of traditional oils and powders.',
}

export default function ShopPage() {
    const oils = products.filter((p) => p.category === "oils");
    const powders = products.filter((p) => p.category === "powders");

    return (
        <>
            <Navbar />
            <main className="bg-[#F9F7F2] pt-32 pb-24 px-6 lg:px-12 min-h-screen border-t-[8px] border-[#183921]">
                <div className="max-w-[1600px] mx-auto">

                    {/* Header */}
                    <div className="text-center mb-24 max-w-2xl mx-auto">
                        <span className="block text-[10px] tracking-[0.3em] font-semibold uppercase text-brand-green-primary mb-4">
                            Sree Selvanayaki Amman
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-[#4A3930] mb-6 uppercase tracking-wide">
                            OUR COLLECTION
                        </h1>
                        <p className="text-sm md:text-base font-inter text-[#4A3930]/70 font-light">
                            Seven everyday essentials carefully prepared using traditional methods and the finest ingredients from Pidariyur.
                        </p>
                    </div>

                    {/* TRADITIONAL OILS */}
                    <div className="mb-24" id="oils">
                        <div className="flex items-end justify-between border-b border-[#4A3930]/20 pb-4 mb-12">
                            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#4A3930] uppercase tracking-wide">
                                TRADITIONAL OILS
                            </h2>
                            <span className="text-[10px] uppercase font-inter tracking-[0.2em] text-[#4A3930]/50 hidden sm:block">Wood pressed & Sun dried</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {oils.map((product) => (
                                <Link href={`/shop/${product.id}`} key={product.id} className="group flex flex-col bg-white border border-[#4A3930]/5 hover:border-[#183921]/30 transition-all duration-300 shadow-sm hover:shadow-md rounded overflow-hidden">
                                    <div className="relative aspect-[4/5] bg-[#F2F0E9] overflow-hidden p-6 flex flex-col items-center justify-center">
                                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white text-center">
                                        <div>
                                            <h3 className="text-xl font-playfair font-semibold text-[#4A3930] mb-2">{product.name}</h3>
                                            <p className="text-xs text-[#4A3930]/60 font-inter line-clamp-2 leading-relaxed mb-6">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-3 mt-auto">
                                            <span className="text-sm font-semibold font-inter text-[#183921]">From ₹{product.variants[0].sellingPrice}</span>
                                            <span className="inline-block border border-[#4A3930]/20 text-[#4A3930] hover:bg-[#183921] hover:text-white hover:border-[#183921] transition-colors text-[10px] uppercase tracking-[0.2em] font-semibold py-3 px-4 w-full">
                                                View Details
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* POWDERS */}
                    <div className="mb-12" id="powders">
                        <div className="flex items-end justify-between border-b border-[#4A3930]/20 pb-4 mb-12">
                            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#4A3930] uppercase tracking-wide">
                                POWDERS
                            </h2>
                            <span className="text-[10px] uppercase font-inter tracking-[0.2em] text-[#4A3930]/50 hidden sm:block">Pure & Natural</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {powders.map((product) => (
                                <Link href={`/shop/${product.id}`} key={product.id} className="group flex flex-col bg-white border border-[#4A3930]/5 hover:border-[#183921]/30 transition-all duration-300 shadow-sm hover:shadow-md rounded overflow-hidden">
                                    <div className="relative aspect-square bg-[#F2F0E9] overflow-hidden p-6 flex flex-col items-center justify-center">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col items-center bg-white text-center h-full">
                                        <h3 className="text-lg font-playfair font-semibold text-[#4A3930] mb-2">{product.name}</h3>
                                        <span className="text-xs font-semibold font-inter text-[#183921] mb-6 mt-auto">From ₹{product.variants[0].sellingPrice}</span>
                                        <span className="w-full inline-block border border-[#4A3930]/20 text-[#4A3930] hover:bg-[#183921] hover:text-white hover:border-[#183921] transition-colors text-[9px] uppercase tracking-[0.1em] font-semibold py-2">
                                            View Details
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
