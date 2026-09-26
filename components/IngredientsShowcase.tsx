"use client";
import Image from "next/image";

const INGREDIENTS = [
    { name: "Groundnuts", icon: "/groundnut oil.jpeg" }, // using placeholders for now
    { name: "Sesame", icon: "/gingelly oil.jpeg" },
    { name: "Coconut", icon: "/coconut oil.jpeg" },
    { name: "Turmeric", icon: "/groundnut oil.jpeg" },
    { name: "Shikakai", icon: "/groundnut oil.jpeg" },
    { name: "Green Gram", icon: "/groundnut oil.jpeg" },
    { name: "Grains", icon: "/groundnut oil.jpeg" },
];

export default function IngredientsShowcase() {
    return (
        <section className="bg-[#183921] py-16 px-6 lg:px-12 text-[#F9F7F2] overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col xl:flex-row items-center gap-8 xl:gap-16">

                <div className="xl:w-1/4 flex-shrink-0 text-left">
                    <h2 className="text-xl md:text-2xl font-playfair font-bold uppercase tracking-widest leading-snug text-[#F9F7F2]">
                        THE INGREDIENTS<br />BEHIND OUR PRODUCTS
                    </h2>
                </div>

                <div className="xl:w-3/4 flex justify-between gap-6 w-full overflow-x-auto hide-scrollbar pb-4 xl:pb-0 px-4 xl:px-0">
                    {INGREDIENTS.map((ing) => (
                        <div key={ing.name} className="flex flex-col items-center min-w-[80px] md:min-w-[100px] group cursor-default">
                            {/* Instead of a container, we will simulate the raw ingredient cutout */}
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 relative flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300">
                                <Image
                                    src={ing.icon}
                                    alt={ing.name}
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-300 mix-blend-screen"
                                // mix-blend-screen will help if images have black background, but we'll stick to a normal display for placeholders. Let's use opacity.
                                />
                            </div>
                            <span className="text-[11px] md:text-xs font-inter text-[#F9F7F2]/80 font-medium">{ing.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
