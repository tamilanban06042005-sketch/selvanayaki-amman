import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

const IMAGE_MAP: Record<string, string> = {
    "groundnut-oil": "/groundnut oil.jpeg",
    "gingelly-oil": "/gingelly oil.jpeg",
    "coconut-oil": "/coconut-oil.jpeg", // Wait, coconut oil is .jpeg in public
    "health-mix-powder": "/health-mix.png",
    "turmeric-powder": "/turmeric.png",
    "green-gram-powder": "/green-gram.png",
    "shikakai-powder": "/shikakai.png"
};

export default function ProductCard({ product }: ProductCardProps) {
    const defaultVariant = product.variants[0];
    const imgSrc = IMAGE_MAP[product.slug] || product.images[0];
    // Default mock rating as per mockup
    const rating = "4.8/5";

    return (
        <div className="bg-white rounded-xl shadow-sm border border-[#4A281B]/5 p-3 flex flex-col h-full hover:shadow-md transition-shadow relative group">
            {/* Image Container */}
            <div className="bg-[#F9F7F2] rounded-lg relative aspect-square p-4 mb-4 flex items-center justify-center">
                <button className="absolute top-3 right-3 text-[#2B1812]/40 hover:text-[#B88745] transition-colors z-20">
                    <Heart size={18} strokeWidth={1.5} />
                </button>
                <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />

                {imgSrc ? (
                    <div className="relative w-full h-full">
                        <Image
                            src={imgSrc}
                            alt={product.name}
                            fill
                            className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 50vw, 25vw"
                        />
                    </div>
                ) : (
                    <span className="text-xl opacity-20">No Image</span>
                )}
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 px-1">
                <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-inter font-medium text-[#2B1812] text-sm leading-tight flex-1">
                        <Link href={`/shop/${product.slug}`} className="hover:text-[#164A32] transition-colors">
                            {product.name}
                        </Link>
                    </h3>
                    <div className="flex items-center gap-1 text-[10px] whitespace-nowrap">
                        <span className="text-[#B88745]">★</span>
                        <span className="text-[#2B1812]/70 font-medium">{rating}</span>
                    </div>
                </div>

                <p className="text-[#2B1812]/50 text-xs mb-3">
                    {defaultVariant?.size || "Default Size"}
                </p>

                <div className="mt-auto flex flex-col gap-3">
                    <span className="font-semibold text-[#164A32] text-lg">
                        ₹{defaultVariant?.sellingPrice}
                    </span>

                    <button className="w-full bg-[#164A32] text-[#F7F1E5] py-2.5 rounded hover:bg-[#1a573b] transition-colors text-xs font-semibold uppercase tracking-wider relative z-20">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
