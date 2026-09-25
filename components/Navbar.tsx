"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "py-3 bg-[var(--color-brand-beige-dark)] backdrop-blur-md border-b border-[var(--color-brand-brown-light)] shadow-sm"
                    : "py-6 bg-transparent"
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="text-left flex items-center gap-2 focus:outline-none rounded group"
                        aria-label="Go to home"
                    >
                        <Image
                            src="/images/logo-monogram.jpg"
                            alt="SSA Monogram"
                            width={40}
                            height={40}
                            className="object-contain md:hidden mix-blend-multiply transition-transform group-hover:scale-105"
                        />
                        <Image
                            src="/images/logo-monogram.jpg"
                            alt="SSA Full Logo"
                            width={160}
                            height={50}
                            className="object-contain hidden md:block mix-blend-multiply transition-transform group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[var(--color-brand-emerald)] opacity-80 hover:opacity-100 hover:text-[var(--color-brand-brown)] transition-all duration-300 focus:outline-none rounded"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/shop"
                            className="hidden md:block text-[10px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 bg-[var(--color-brand-emerald)] text-[var(--color-brand-beige)] hover:bg-[var(--color-brand-brown)] hover:shadow-lg transition-all duration-300 rounded-sm"
                        >
                            Explore Our Store
                        </Link>

                        {/* Hamburger */}
                        <button
                            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none rounded"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            <span
                                className={`block w-6 h-px bg-[var(--color-brand-emerald)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block w-6 h-px bg-[var(--color-brand-emerald)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block w-6 h-px bg-[var(--color-brand-emerald)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-40 bg-[var(--color-brand-beige)] flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
            >
                {NAV_LINKS.map((link, i) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl tracking-[0.15em] uppercase text-[var(--color-brand-emerald)] hover:text-[var(--color-brand-brown)] transition-all duration-300 rounded"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            transitionDelay: `${i * 50}ms`,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/shop"
                    onClick={() => setMenuOpen(false)}
                    className="mt-4 text-[11px] tracking-[0.25em] uppercase px-8 py-3 bg-[var(--color-brand-emerald)] text-[var(--color-brand-beige)] transition-all duration-300 rounded-sm"
                >
                    Explore Our Store
                </Link>
            </div>
        </>
    );
}
