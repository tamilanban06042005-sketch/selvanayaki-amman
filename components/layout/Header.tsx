"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import CartDrawer from "@/components/cart/CartDrawer";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Oils", href: "/oils" },
    { label: "Powders", href: "/powders" },
    { label: "Personal Care", href: "/personal-care" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { summary, openCart, hydrate } = useCartStore();

    useEffect(() => {
        hydrate();
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [hydrate]);

    return (
        <>
            {/* Announcement bar */}
            <div className="bg-brand-brown text-white text-center py-2 text-xs tracking-widest uppercase">
                Online ordering now available â€” Order via WhatsApp
            </div>

            <header
                className={`sticky top-0 z-40 transition-all duration-300 border-b ${scrolled
                    ? "bg-brand-beige/95 backdrop-blur-md border-brand-beige-dark py-3 shadow-sm"
                    : "bg-brand-beige border-brand-beige-dark py-5"
                    }`}
                role="banner"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown rounded flex items-center h-20 w-auto relative">
                        {/* Mobile Monogram */}
                        <div className="md:hidden relative h-16 w-16 overflow-hidden mix-blend-multiply rounded border border-brand-brown/10">
                            <Image src="/main-logo.jpg" alt="SSA Monogram" fill className="object-cover object-center" sizes="64px" />
                        </div>
                        {/* Desktop Lockup */}
                        <div className="hidden md:block relative h-20 w-[300px] mix-blend-multiply">
                            <Image src="/main-logo.jpg" alt="Sree Selvanayaki Amman" fill className="object-contain object-left" sizes="300px" />
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-brand-ink hover:text-brand-brown transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Cart + Hamburger */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={openCart}
                            className="flex items-center gap-2 text-brand-ink hover:text-brand-brown transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown rounded"
                            aria-label={`Cart â€” ${summary.itemCount} items`}
                        >
                            <div className="relative p-1">
                                <ShoppingCart size={20} strokeWidth={1.5} />
                                {summary.itemCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-brand-brown text-white text-[10px] font-bold w-4.5 h-4.5 min-w-[1.1rem] min-h-[1.1rem] rounded-full flex items-center justify-center leading-none px-1 border border-brand-beige">
                                        {summary.itemCount > 99 ? "99+" : summary.itemCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-sm font-medium hidden lg:block">Cart</span>
                        </button>

                        <button
                            className="md:hidden p-1 text-brand-ink hover:text-brand-brown transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-brown rounded"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        className="md:hidden border-t border-stone-100 bg-white"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-4">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-medium text-stone-700 hover:text-[var(--color-brand-brown)] transition-colors py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/cart"
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-stone-700 hover:text-[var(--color-brand-brown)] transition-colors py-1"
                            >
                                Cart {summary.itemCount > 0 && `(${summary.itemCount})`}
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            <CartDrawer />
        </>
    );
}

