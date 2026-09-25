"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Our Story", href: "/#our-story" },
    { label: "Our Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
];

const PRODUCTS = [
    "Groundnut Oil",
    "Gingelly Oil",
    "Coconut Oil",
    "Turmeric Powder",
    "Shikakai Powder",
    "Green Gram Powder",
    "Health Mix Powder"
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return Policy", href: "/return-policy" },
];

export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-[#3A2F22] text-[#E8E4D9] font-inter overflow-hidden border-t-8 border-[#183921]"
            aria-label="Site footer"
        >
            <div className="max-w-[1600px] mx-auto px-6 py-16 lg:py-20 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">

                {/* 1. Brand & Description */}
                <div className="lg:w-[25%]">
                    <Link href="/" className="mb-4 block w-fit">
                        <Image
                            src="/logo.jpeg"
                            alt="Sree Selvanayaki Amman Logo"
                            width={100}
                            height={100}
                            className="object-contain mix-blend-screen"
                        />
                    </Link>
                    <h2 className="text-xl font-bold tracking-widest font-playfair uppercase mb-4 leading-tight">
                        SREE SELVANAYAKI AMMAN<br />
                        <span className="text-[10px] font-inter tracking-[0.3em] font-normal text-[#D2C8B5]">OIL & FLOUR MILL</span>
                    </h2>
                    <p className="text-[11px] leading-relaxed text-[#D2C8B5]/80 mb-8 max-w-[280px]">
                        Traditional oils, natural powders and everyday essentials from Pidariyur, Erode.
                    </p>
                    <div className="flex items-center gap-4 text-[#D2C8B5]">
                        <a href="https://wa.me/919965005891" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        </a>
                        <a href="https://instagram.com/kughan_oils" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 00-2.122 2.136C0 8.096 0 12 0 12s0 3.903.499 5.814a3.016 3.016 0 002.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 002.122-2.136C24 15.903 24 12 24 12s0-3.904-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.08h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.626h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" /></svg>
                        </a>
                    </div>
                </div>

                {/* 2. Quick Links */}
                <div className="lg:w-[15%]">
                    <h3 className="text-[11px] font-bold tracking-widest uppercase mb-6 text-[#D2C8B5]">
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-[11px] hover:text-white transition-colors duration-300 text-[#D2C8B5]/80"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Our Products */}
                <div className="lg:w-[15%]">
                    <h3 className="text-[11px] font-bold tracking-widest uppercase mb-6 text-[#D2C8B5]">
                        Our Products
                    </h3>
                    <ul className="space-y-3">
                        {PRODUCTS.map((p) => (
                            <li key={p}>
                                <span className="text-[11px] text-[#D2C8B5]/80">
                                    {p}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. Contact Us */}
                <div className="lg:w-[20%]">
                    <h3 className="text-[11px] font-bold tracking-widest uppercase mb-6 text-[#D2C8B5]">
                        Contact Us
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-green-primary text-sm mt-0.5">📍</span>
                            <span className="text-[11px] text-[#D2C8B5]/80 leading-relaxed">
                                Pidariyur, Erode,<br />
                                Tamil Nadu, India
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-green-primary text-sm mt-0.5">📞</span>
                            <span className="text-[11px] text-[#D2C8B5]/80 leading-relaxed">
                                Phone / WhatsApp<br />
                                (Use your actual number)
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-green-primary text-sm mt-0.5">✉️</span>
                            <span className="text-[11px] text-[#D2C8B5]/80 leading-relaxed">
                                Email<br />
                                (Use your actual email)
                            </span>
                        </li>
                    </ul>
                </div>

                {/* 5. Map Embed Placeholder */}
                <div className="lg:w-[25%] relative min-h-[160px] bg-[#E8E4D9]/10 rounded overflow-hidden flex items-center justify-center p-4">
                    {/* Placeholder for actual map widget or Image */}
                    <div className="absolute inset-0 bg-[#352A1E] border border-white/5 flex flex-col items-center justify-center items-center justify-center">
                        <span className="text-xl">🗺️</span>
                    </div>
                    <a href="https://maps.google.com/?q=Pidariyur,Erode,Tamil+Nadu" target="_blank" rel="noopener noreferrer" className="relative z-10 bg-[#183921] hover:bg-[#112918] text-white text-[9px] uppercase tracking-widest px-6 py-3 rounded-full transition-colors flex items-center gap-2 mt-16 font-semibold">
                        View on Google Maps →
                    </a>
                </div>

            </div>

            {/* Bottom row (Legal & Copyright) */}
            <div className="border-t border-white/10 mt-4">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-[9px] tracking-wider text-[#D2C8B5]/60">
                    <p>
                        © 2026 Sree Selvanayaki Amman Oil & Flour Mill. All rights reserved.
                    </p>

                    <ul className="flex flex-wrap items-center gap-4 justify-center divide-x divide-[#D2C8B5]/20">
                        {LEGAL_LINKS.map((link, idx) => (
                            <li key={link.label} className={idx !== 0 ? "pl-4" : ""}>
                                <Link
                                    href={link.href}
                                    className="hover:text-white transition-colors duration-300"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <p className="flex items-center gap-1 font-semibold text-[#D2C8B5]">
                        <span className="text-brand-gold text-[10px]">❤️</span> Made with care in Pidariyur, Erode
                    </p>
                </div>
            </div>
        </footer>
    );
}
