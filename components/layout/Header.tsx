"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import CartDrawer from "@/components/cart/CartDrawer";

const NAV_LINKS = [
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
            <div className="bg-amber-700 text-white text-center py-2 text-xs tracking-widest uppercase">
                Online ordering now available — Order via WhatsApp
            </div>

            <header
                className={`sticky top-0 z-40 transition-all duration-300 ${scrolled
                        ? "bg-white/95 backdrop-blur shadow-sm border-b border-stone-100"
                        : "bg-white border-b border-stone-100"
                    }`}
                role="banner"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col leading-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded">
                        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-700">
                            Sree Selvanayaki Amman
                        </span>
                        <span className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
                            Oil &amp; Flour Mill
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[11px] uppercase tracking-widest text-stone-600 hover:text-amber-700 transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Cart + Hamburger */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={openCart}
                            className="relative p-2 text-stone-700 hover:text-amber-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
                            aria-label={`Cart — ${summary.itemCount} items`}
                        >
                            <ShoppingCart size={20} />
                            {summary.itemCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-amber-700 text-white text-[10px] font-bold w-4.5 h-4.5 min-w-[1.1rem] min-h-[1.1rem] rounded-full flex items-center justify-center leading-none px-1">
                                    {summary.itemCount > 99 ? "99+" : summary.itemCount}
                                </span>
                            )}
                        </button>

                        <button
                            className="md:hidden p-2 text-stone-700 hover:text-amber-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 rounded"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
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
                                    className="text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors py-1"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/cart"
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors py-1"
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
