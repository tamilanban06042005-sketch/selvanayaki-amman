"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAV_LINKS = [
    { label: "Home", href: "#hero-section" },
    { label: "Our Oils", href: "#our-oils" },
    { label: "Our Story", href: "#our-story" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
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
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "py-3 bg-[rgba(17,17,16,0.88)] backdrop-blur-md border-b border-[rgba(200,146,42,0.1)]"
                        : "py-6 bg-transparent"
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Brand */}
                    <button
                        onClick={() => scrollTo("#hero-section")}
                        className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                        aria-label="Go to home"
                    >
                        <span
                            className="block text-[11px] font-inter font-500 tracking-[0.25em] uppercase"
                            style={{ color: "#c8922a" }}
                        >
                            Sree Selvanayaki Amman
                        </span>
                        <span className="block text-[9px] tracking-[0.3em] uppercase text-cream-dark opacity-70">
                            Oil & Flour Mill
                        </span>
                    </button>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.href)}
                                className="text-[11px] tracking-[0.2em] uppercase text-cream opacity-70 hover:opacity-100 hover:text-amber-400 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                                style={{ fontFamily: "var(--font-inter)", color: "inherit" }}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* CTA + Hamburger */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => scrollTo("#our-oils")}
                            className="hidden md:block text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 border border-amber-gold text-amber-gold hover:bg-amber-gold hover:text-charcoal-deep transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                        >
                            Explore Our Oils
                        </button>

                        {/* Hamburger */}
                        <button
                            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            <span
                                className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-40 bg-[rgba(17,17,16,0.97)] backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
            >
                {NAV_LINKS.map((link, i) => (
                    <button
                        key={link.label}
                        onClick={() => scrollTo(link.href)}
                        className="text-2xl tracking-[0.15em] uppercase text-cream opacity-80 hover:opacity-100 hover:text-amber-gold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            transitionDelay: `${i * 50}ms`,
                        }}
                    >
                        {link.label}
                    </button>
                ))}
                <button
                    onClick={() => scrollTo("#our-oils")}
                    className="mt-4 text-[11px] tracking-[0.25em] uppercase px-8 py-3 border border-amber-gold text-amber-gold hover:bg-amber-gold hover:text-charcoal-deep transition-all duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                    Explore Our Oils
                </button>
            </div>
        </>
    );
}
