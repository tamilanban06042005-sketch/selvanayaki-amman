"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { businessConfig } from "@/lib/config";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Account", href: "/account" },
];

const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello Sree Selvanayaki Amman, I would like to enquire about your products."
)}`;

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { summary, hydrate, isOpen, openCart, closeCart } = useCartStore();
    const headerRef = useRef<HTMLElement>(null);

    /* Hydrate cart from localStorage on mount */
    useEffect(() => { hydrate(); }, [hydrate]);

    /* Shrink header on scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* Lock body scroll when mobile menu open */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            {/* ── Announcement Bar ────────────────────────────────────────────────── */}
            <div
                className="announcement-bar"
                role="banner"
                aria-label="Site announcement"
            >
                ONLINE ORDERING AVAILABLE — ORDER DIRECTLY ON WHATSAPP
            </div>

            {/* ── Sticky Header ───────────────────────────────────────────────────── */}
            <header
                ref={headerRef}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#F3EFE6]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(74,40,27,0.08)] py-3"
                    : "bg-[#F3EFE6] py-5"
                    }`}
            >
                <div className="container-wide flex items-center justify-between gap-6">

                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-3" aria-label="Sree Selvanayaki Amman — Home">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/logo.jpeg"
                                alt="Sree Selvanayaki Amman Oil & Flour Mill logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-[#164A32] font-cormorant font-semibold text-base leading-tight">
                                Sree Selvanayaki Amman
                            </p>
                            <p className="text-[#2B1812]/60 font-inter text-[9px] uppercase tracking-[0.25em] leading-tight">
                                Oil & Flour Mill
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex flex-col items-end gap-2">
                        <div className="flex items-center gap-6">
                            <nav aria-label="Primary navigation" className="flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-[#2B1812] hover:text-[#164A32] font-inter text-sm font-medium transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="w-[1px] h-4 bg-[#4A281B]/20"></div>
                            <button
                                aria-label={`Cart — ${summary.itemCount} items`}
                                onClick={() => isOpen ? closeCart() : openCart()}
                                className="text-[#2B1812] hover:text-[#164A32] font-inter text-sm font-medium transition-colors flex items-center gap-1.5"
                            >
                                Cart {summary.itemCount > 0 ? `[${summary.itemCount} items]` : `[0 items]`}
                            </button>
                        </div>
                        <div className="flex items-center rounded-sm overflow-hidden border border-[#4A281B]/20 w-64 bg-white">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent px-3 py-1.5 text-sm focus:outline-none flex-1 text-[#2B1812]"
                            />
                            <button className="bg-[#164A32] text-[#F7F1E5] px-3 py-2 flex items-center justify-center hover:bg-[#245C40] transition-colors">
                                <Search size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Actions */}
                    <div className="flex lg:hidden items-center gap-4">
                        <button
                            onClick={() => isOpen ? closeCart() : openCart()}
                            aria-label={`Cart — ${summary.itemCount} items`}
                            className="relative text-[#2B1812]/70"
                        >
                            <ShoppingCart size={20} strokeWidth={1.5} />
                            {summary.itemCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#B88745] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                                    {summary.itemCount > 9 ? "9+" : summary.itemCount}
                                </span>
                            )}
                        </button>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            className="text-[#2B1812]"
                        >
                            {menuOpen ? <X size={22} /> : <Menu size={22} strokeWidth={1.5} />}
                        </button>
                    </div>

                </div>
            </header>

            {/* ── Mobile Full-Screen Menu ─────────────────────────────────────────── */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-40 bg-[#F3EFE6] flex flex-col overflow-y-auto"
                    aria-modal="true"
                    role="dialog"
                    aria-label="Navigation menu"
                >
                    {/* Close button row */}
                    <div className="flex justify-end px-6 pt-6">
                        <button
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                            className="text-[#2B1812]/70"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Logo centered */}
                    <div className="flex flex-col items-center pt-8 pb-10">
                        <div className="relative w-16 h-16 mb-3">
                            <Image src="/logo.jpeg" alt="SSAOFM Logo" fill className="object-contain" />
                        </div>
                        <p className="font-cormorant font-semibold text-[#164A32] text-lg tracking-wide">Sree Selvanayaki Amman</p>
                        <p className="font-inter text-[9px] uppercase tracking-widest text-[#2B1812]/50">Oil & Flour Mill</p>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-col items-center gap-2 px-6 flex-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="w-full text-center py-4 border-b border-[#4A281B]/8 font-cormorant text-3xl text-[#164A32] font-medium hover:text-[#245C40] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Bottom CTA */}
                    <div className="px-6 pb-12 pt-8 flex flex-col gap-4">
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="btn-primary w-full justify-center py-4 text-[10px]"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Order on WhatsApp
                        </a>
                        <Link
                            href="/shop"
                            onClick={() => setMenuOpen(false)}
                            className="btn-outline w-full justify-center py-4 text-[10px]"
                        >
                            Shop Products
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
