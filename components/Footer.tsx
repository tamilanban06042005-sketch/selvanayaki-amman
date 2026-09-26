import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/lib/config";

const footerProducts = [
    { name: "Groundnut Oil", href: "/shop/groundnut-oil" },
    { name: "Gingelly Oil", href: "/shop/gingelly-oil" },
    { name: "Coconut Oil", href: "/shop/coconut-oil" },
    { name: "Health Mix Powder", href: "/shop/health-mix-powder" },
    { name: "Turmeric Powder", href: "/shop/turmeric-powder" },
    { name: "Shikakai Powder", href: "/shop/shikakai-powder" },
    { name: "Green Gram Powder", href: "/shop/green-gram-powder" },
];

const footerQuickLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/shop" },
    { name: "Our Story", href: "/about" },
    { name: "Our Process", href: "/#process" },
    { name: "Contact", href: "/contact" },
];

const footerPolicies = [
    { name: "Shipping Policy", href: "/shipping-policy" },
    { name: "Return Policy", href: "/return-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#1C1613] text-[#F3EFE6] relative overflow-hidden" role="contentinfo">
            {/* Background Texture/Wash */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen bg-floral-pattern"></div>

            <div className="container-wide py-20 lg:py-28 flex flex-col items-center relative z-10">
                {/* Center Brand Block */}
                <Link href="/" className="flex flex-col items-center mb-20" aria-label="Home">
                    <div className="relative w-32 h-20 mb-4">
                        <Image
                            src="/main-logo.jpg"
                            alt="SSA Logo"
                            fill
                            className="object-cover rounded-md opacity-90 shadow-md"
                        />
                    </div>
                    <div className="text-center mt-2">
                        <p className="font-cormorant font-bold text-[#D6AD7A] text-2xl uppercase tracking-widest leading-tight">
                            Sree Selvanayaki Amman
                        </p>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <div className="h-[1px] w-12 bg-[#D6AD7A]/40"></div>
                            <p className="font-inter text-[9px] uppercase tracking-[0.3em] text-[#D6AD7A] font-semibold">
                                Oil &amp; Flour Mill
                            </p>
                            <div className="h-[1px] w-12 bg-[#D6AD7A]/40"></div>
                        </div>
                    </div>
                </Link>

                {/* 3-Column Links Block */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-24 text-center sm:text-left w-full max-w-4xl mx-auto border-t border-[#D6AD7A]/20 pt-16">

                    {/* Col 1: Quick Links */}
                    <div className="flex flex-col items-center sm:items-end">
                        <h3 className="font-inter font-bold text-[#F3EFE6] text-xs uppercase tracking-widest mb-6">Quick Links</h3>
                        <ul className="flex flex-col gap-3 items-center sm:items-end">
                            {footerQuickLinks.map((p) => (
                                <li key={p.href}>
                                    <Link href={p.href} className="text-[#F3EFE6]/60 hover:text-[#D6AD7A] text-sm transition-colors font-light">
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2: Products */}
                    <div className="flex flex-col items-center">
                        <h3 className="font-inter font-bold text-[#F3EFE6] text-xs uppercase tracking-widest mb-6">Products</h3>
                        <ul className="flex flex-col gap-3 items-center">
                            {footerProducts.map((p) => (
                                <li key={p.href}>
                                    <Link href={p.href} className="text-[#F3EFE6]/60 hover:text-[#D6AD7A] text-sm transition-colors font-light">
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Policies */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="font-inter font-bold text-[#F3EFE6] text-xs uppercase tracking-widest mb-6">Policies</h3>
                        <ul className="flex flex-col gap-3 items-center sm:items-start">
                            {footerPolicies.map((p) => (
                                <li key={p.href}>
                                    <Link href={p.href} className="text-[#F3EFE6]/60 hover:text-[#D6AD7A] text-sm transition-colors font-light">
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* ── Bottom Bar ─────────────────────────────────────────────────────── */}
            <div className="border-t border-[#F3EFE6]/5 bg-[#17110F]">
                <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[#F3EFE6]/40 text-[10px] font-inter uppercase tracking-wide">
                        © {year} Sree Selvanayaki Amman Oil &amp; Flour Mill. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 text-[#F3EFE6]/40 text-[10px] font-inter uppercase tracking-wide">
                        <Link href="/privacy-policy" className="hover:text-[#D6AD7A]">Privacy</Link>
                        <span>|</span>
                        <Link href="/terms" className="hover:text-[#D6AD7A]">Terms</Link>
                        <span>|</span>
                        <Link href="/shipping-policy" className="hover:text-[#D6AD7A]">Shipping</Link>
                        <span>|</span>
                        <Link href="/return-policy" className="hover:text-[#D6AD7A]">Returns</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
