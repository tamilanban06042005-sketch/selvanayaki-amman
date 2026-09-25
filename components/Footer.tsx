"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const PRODUCTS = ["Gingelly Oil", "Groundnut Oil", "Coconut Oil"];

const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-[var(--color-brand-emerald)] text-[var(--color-brand-beige)] border-t-4 border-[var(--color-brand-brown)]"
            aria-label="Site footer"
        >
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                {/* Top row */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
                    {/* Brand */}
                    <div className="lg:w-1/3">
                        <Link href="/" className="mb-6 block transition-transform hover:scale-105 origin-left">
                            <Image
                                src="/images/logo-monogram.jpg"
                                alt="Sree Selvanayaki Amman Logo"
                                width={180}
                                height={60}
                                className="object-contain mix-blend-screen"
                            />
                        </Link>
                        <p
                            className="text-sm leading-relaxed max-w-xs text-[var(--color-brand-beige-dark)]/80"
                            style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
                        >
                            Traditional goodness, made for today. Pure natural oils for every
                            South Indian kitchen.
                        </p>
                    </div>

                    {/* Links columns */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Navigation */}
                        <div>
                            <h3
                                className="text-[9px] font-semibold tracking-[0.35em] uppercase mb-5 text-[var(--color-brand-brass)]"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                Navigate
                            </h3>
                            <ul className="space-y-3">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-xs hover:text-[var(--color-brand-brass)] transition-all duration-300 focus:outline-none rounded text-left text-[var(--color-brand-beige-dark)]/80 hover:text-[var(--color-brand-beige)]"
                                            style={{ fontFamily: "var(--font-inter)" }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h3
                                className="text-[9px] font-semibold tracking-[0.35em] uppercase mb-5 text-[var(--color-brand-brass)]"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                Products
                            </h3>
                            <ul className="space-y-3">
                                {PRODUCTS.map((p) => (
                                    <li key={p}>
                                        <span
                                            className="text-xs text-[var(--color-brand-beige-dark)]/80"
                                            style={{ fontFamily: "var(--font-inter)" }}
                                        >
                                            {p}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact / Location */}
                        <div>
                            <h3
                                className="text-[9px] font-semibold tracking-[0.35em] uppercase mb-5 text-[var(--color-brand-brass)]"
                                style={{ fontFamily: "var(--font-inter)" }}
                            >
                                Contact
                            </h3>
                            <div className="space-y-4">
                                {/* Address */}
                                <p
                                    className="text-xs leading-relaxed text-[var(--color-brand-beige-dark)]/80"
                                    style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
                                >
                                    9, Pirivu, 1010 Colony,<br />
                                    Pidariyur, Mukasipidariyur,<br />
                                    Tamil Nadu 638051
                                </p>
                                {/* Phone */}
                                <a
                                    href="tel:+917708039583"
                                    className="flex items-center gap-2 text-xs text-[var(--color-brand-beige-dark)] hover:text-white transition-opacity duration-300"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    <span>📞</span>
                                    +91 77080 39583
                                </a>
                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/917708039583"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs text-[var(--color-brand-beige-dark)] hover:text-white transition-opacity duration-300"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    <span>💬</span>
                                    WhatsApp Order
                                </a>
                                {/* Instagram */}
                                <a
                                    href="https://instagram.com/kughan_oils"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-xs text-[var(--color-brand-beige-dark)] hover:text-white transition-opacity duration-300"
                                    style={{ fontFamily: "var(--font-inter)" }}
                                >
                                    <span>📷</span>
                                    @kughan_oils
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[var(--color-brand-brown)]/50 mb-8" />

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p
                        className="text-[10px] italic text-[var(--color-brand-beige-dark)]/70"
                        style={{ fontFamily: "var(--font-playfair)" }}
                    >
                        &ldquo;Traditional goodness, made for today.&rdquo;
                    </p>
                    <p
                        className="text-[9px] tracking-widest text-[var(--color-brand-beige-dark)]/60"
                        style={{ fontFamily: "var(--font-inter)" }}
                    >
                        © 2026 Sree Selvanayaki Amman Oil & Flour Mill
                    </p>
                </div>
            </div>
        </footer>
    );
}
