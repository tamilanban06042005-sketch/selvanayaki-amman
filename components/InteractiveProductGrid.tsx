"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/lib/data/products";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function InteractiveProductGrid() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const productGridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                }
            });

            if (productGridRef.current) {
                gsap.from(productGridRef.current.children, {
                    y: 60,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: productGridRef.current,
                        start: "top 80%",
                    }
                });
            }
        });
        return () => ctx.revert();
    }, []);

    const whatsAppNumber = "919965005891";

    const getWhatsAppLink = (productName: string) => {
        return `https://wa.me/${whatsAppNumber}?text=Hello, I would like to order ${encodeURIComponent(productName)}. Please let me know the available sizes and pricing.`;
    };

    return (
        <section ref={containerRef} id="products" className="py-24 bg-brand-cream-soft px-6 lg:px-12 border-y border-brand-charcoal/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div ref={titleRef}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-brand-charcoal mb-2">
                            OUR PRODUCTS
                        </h2>
                        <span className="block text-sm md:text-base font-inter text-brand-charcoal/70">
                            Traditional oils and natural powders for your everyday needs.
                        </span>
                    </div>
                    <Link href="/shop" className="text-xs uppercase tracking-[0.2em] font-semibold text-brand-charcoal/70 hover:text-brand-green-primary transition-colors pb-1 border-b border-brand-charcoal/20 hover:border-brand-green-primary">
                        View All Products →
                    </Link>
                </div>

                <div
                    ref={productGridRef}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6"
                >
                    {products.map((product) => (
                        <div key={product.id} className="group flex flex-col bg-[#F9F7F2] rounded-sm hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-brand-charcoal/5 overflow-hidden">
                            {/* Product Image */}
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#ECE8E1] p-4 flex items-center justify-center">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-charcoal/10 to-transparent"></div>
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover p-2 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-4 flex-1 flex flex-col justify-between text-center bg-white">
                                <div className="mb-4">
                                    <h3 className="text-sm md:text-base font-playfair text-brand-charcoal font-bold mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-[10px] text-brand-charcoal/60 font-inter">
                                        Contact for details
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2 w-full mt-auto">
                                    <Link
                                        href={`/product/${product.slug}`}
                                        className="w-full text-center bg-[#4A3930] hover:bg-[#3A2B23] text-white text-[9px] md:text-[10px] uppercase tracking-widest font-semibold py-2.5 rounded-[2px] transition-colors"
                                    >
                                        View Product
                                    </Link>
                                    <a
                                        href={getWhatsAppLink(product.name)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-1.5 bg-[#183921] hover:bg-[#112918] text-white text-[9px] md:text-[10px] uppercase tracking-widest font-semibold py-2.5 rounded-[2px] transition-colors"
                                    >
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                        Order on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
