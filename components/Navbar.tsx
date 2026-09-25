"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Our Story", href: "/#our-story" },
    { label: "Our Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
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

    // WhatsApp Base Number (replace with actual if env missing)
    const whatsappLink = `https://wa.me/919965005891?text=${encodeURIComponent("Hello, I would like to inquire about Sree Selvanayaki Amman Oil & Flour Mill products.")}`;

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
                    ? "py-4 bg-brand-cream-soft/90 backdrop-blur-md border-b border-brand-brown-heritage/10 shadow-sm"
                    : "py-8 bg-transparent"
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Brand */}
                    <Link
                        href="/"
                        className="text-left flex items-center gap-2 focus:outline-none group z-50"
                        aria-label="Sree Selvanayaki Amman Home"
                    >
                        <Image
                            src="/logo.jpeg"
                            alt="SSAOFM Logo"
                            width={50}
                            height={50}
                            className="object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </Link>

                    {/* Desktop Links - CENTER */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[12px] font-semibold tracking-[0.2em] uppercase text-brand-charcoal opacity-70 hover:opacity-100 hover:text-brand-green-primary transition-all duration-300 focus:outline-none"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA - RIGHT */}
                    <div className="hidden md:flex items-center">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold tracking-[0.25em] uppercase px-6 py-3 bg-brand-green-primary text-brand-cream-ivory hover:bg-brand-brown-dark transition-all duration-500"
                            style={{ fontFamily: "var(--font-inter)" }}
                        >
                            Order on WhatsApp
                        </a>
                    </div>

                    {/* Mobile Hamburger - RIGHT */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none z-50 mix-blend-difference"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <span
                            className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2 bg-brand-green-primary" : "bg-brand-charcoal-deep"
                                }`}
                        />
                        <span
                            className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : "bg-brand-charcoal-deep"
                                }`}
                        />
                        <span
                            className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px] bg-brand-green-primary" : "bg-brand-charcoal-deep"
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-40 bg-brand-cream-soft flex flex-col justify-center items-center gap-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                role="dialog"
                aria-modal="true"
            >
                {NAV_LINKS.map((link, i) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="text-2xl tracking-[0.1em] uppercase text-brand-green-primary hover:text-brand-brown-heritage transition-colors duration-300"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                            opacity: menuOpen ? 1 : 0,
                            transition: `all 0.5s ease ${i * 0.1}s`,
                        }}
                    >
                        {link.label}
                    </Link>
                ))}

                <div
                    className="mt-8"
                    style={{
                        transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                        opacity: menuOpen ? 1 : 0,
                        transition: `all 0.5s ease ${NAV_LINKS.length * 0.1}s`,
                    }}
                >
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] tracking-[0.25em] font-semibold uppercase px-8 py-4 bg-brand-green-primary text-brand-cream-ivory transition-colors duration-300 hover:bg-brand-brown-dark block text-center"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        Order on WhatsApp
                    </a>
                </div>
            </div>
        </>
    );
}

