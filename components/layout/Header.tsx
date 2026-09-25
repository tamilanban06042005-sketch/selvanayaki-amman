"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import CartDrawer from "@/components/cart/CartDrawer";
import { businessConfig } from "@/lib/config";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/shop" },
    { label: "Our Story", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { summary, openCart, hydrate } = useCartStore();

    useEffect(() => {
        hydrate();
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [hydrate]);

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                    ? "bg-brand-soft-cream/95 backdrop-blur-md border-brand-beige py-2 shadow-sm"
                    : "bg-brand-soft-cream border-transparent py-4"
                    }`}
                role="banner"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-heritage rounded flex items-center transition-all">
                        {/* Mobile Logo */}
                        <div className={`md:hidden relative transition-all duration-300 ${scrolled ? 'h-12 w-28' : 'h-16 w-36'} mix-blend-multiply`}>
                            <Image src="/main-logo.jpg" alt="SSAOFM" fill className="object-contain object-left" sizes="120px" priority />
                        </div>
                        {/* Desktop Logo */}
                        <div className={`hidden md:block relative transition-all duration-300 ${scrolled ? 'h-16 w-[200px]' : 'h-24 w-[280px]'} mix-blend-multiply`}>
                            <Image src="/main-logo.jpg" alt="Sree Selvanayaki Amman Oil & Flour Mill" fill className="object-contain object-left" sizes="300px" priority />
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-12" aria-label="Main navigation">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[13px] uppercase tracking-widest font-medium text-brand-dark hover:text-brand-gold transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Right (WhatsApp + Cart) */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href={`https://wa.me/${businessConfig.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-heritage hover:bg-brand-dark text-white text-[11px] uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all"
                        >
                            Order on WhatsApp
                        </a>

                        <button
                            onClick={openCart}
                            className="flex items-center text-brand-dark hover:text-brand-heritage transition-colors focus:outline-none"
                            aria-label={`Cart — ${summary.itemCount} items`}
                        >
                            <div className="relative p-1">
                                <ShoppingCart size={20} strokeWidth={1.5} />
                                {summary.itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                                        {summary.itemCount}
                                    </span>
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Mobile Cart + Hamburger */}
                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={openCart}
                            className="text-brand-dark"
                            aria-label={`Cart — ${summary.itemCount} items`}
                        >
                            <div className="relative">
                                <ShoppingCart size={20} strokeWidth={1.5} />
                                {summary.itemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-brand-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        {summary.itemCount}
                                    </span>
                                )}
                            </div>
                        </button>

                        <button
                            className="p-1 text-brand-dark"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden absolute top-full left-0 w-full bg-brand-soft-cream border-b border-brand-beige transition-all overflow-hidden ${menuOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                        }`}
                >
                    <nav className="flex flex-col px-6 gap-6 pt-4 pb-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm uppercase tracking-wide font-medium text-brand-dark hover:text-brand-gold"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href={`https://wa.me/${businessConfig.whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-primary text-white text-center text-xs uppercase tracking-widest font-semibold px-5 py-4 rounded-md transition-all mt-4"
                        >
                            Order on WhatsApp
                        </a>
                    </nav>
                </div>
            </header>

            <CartDrawer />
        </>
    );
}
