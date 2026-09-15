"use client";

const NAV_LINKS = [
    { label: "Our Oils", href: "#our-oils" },
    { label: "Our Story", href: "#our-story" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
];

const PRODUCTS = ["Gingelly Oil", "Groundnut Oil", "Coconut Oil"];

const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
    return (
        <footer
            id="contact"
            style={{ background: "#0a0a09", borderTop: "1px solid rgba(200,146,42,0.12)" }}
            aria-label="Site footer"
        >
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
                {/* Top row */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-16">
                    {/* Brand */}
                    <div className="lg:w-1/3">
                        <div
                            className="text-[11px] tracking-[0.35em] uppercase mb-1"
                            style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                        >
                            Sree Selvanayaki Amman
                        </div>
                        <div
                            className="text-[9px] tracking-[0.3em] uppercase opacity-50 mb-6"
                            style={{ color: "#d9c9a8", fontFamily: "var(--font-inter)" }}
                        >
                            Oil & Flour Mill
                        </div>
                        <p
                            className="text-sm leading-relaxed opacity-50 max-w-xs"
                            style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8", lineHeight: 1.7 }}
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
                                className="text-[9px] tracking-[0.35em] uppercase mb-5 opacity-50"
                                style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                            >
                                Navigate
                            </h3>
                            <ul className="space-y-3">
                                {NAV_LINKS.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            onClick={() => scrollTo(link.href)}
                                            className="text-xs opacity-50 hover:opacity-100 hover:text-amber-gold transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded text-left"
                                            style={{ color: "#d9c9a8", fontFamily: "var(--font-inter)" }}
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h3
                                className="text-[9px] tracking-[0.35em] uppercase mb-5 opacity-50"
                                style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                            >
                                Products
                            </h3>
                            <ul className="space-y-3">
                                {PRODUCTS.map((p) => (
                                    <li key={p}>
                                        <span
                                            className="text-xs opacity-50"
                                            style={{ color: "#d9c9a8", fontFamily: "var(--font-inter)" }}
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
                                className="text-[9px] tracking-[0.35em] uppercase mb-5 opacity-50"
                                style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                            >
                                Contact
                            </h3>
                            <div className="space-y-3">
                                <p
                                    className="text-xs opacity-50 leading-relaxed"
                                    style={{ color: "#d9c9a8", fontFamily: "var(--font-inter)", lineHeight: 1.6 }}
                                >
                                    Tamil Nadu, India
                                </p>
                                <p
                                    className="text-xs opacity-50"
                                    style={{ color: "#d9c9a8", fontFamily: "var(--font-inter)" }}
                                >
                                    Traditional Oil Mill
                                </p>
                                <div className="flex gap-3 pt-1">
                                    {/* Social placeholders */}
                                    {["Facebook", "Instagram", "WhatsApp"].map((s) => (
                                        <span
                                            key={s}
                                            className="text-[8px] tracking-[0.2em] uppercase opacity-30 px-2 py-1"
                                            style={{
                                                border: "1px solid rgba(200,146,42,0.2)",
                                                color: "#c8922a",
                                                fontFamily: "var(--font-inter)",
                                            }}
                                        >
                                            {s[0]}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gold divider */}
                <div className="gold-divider mb-8" />

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p
                        className="text-[10px] opacity-40 italic"
                        style={{ fontFamily: "var(--font-playfair)", color: "#d9c9a8" }}
                    >
                        &ldquo;Traditional goodness, made for today.&rdquo;
                    </p>
                    <p
                        className="text-[9px] opacity-30 tracking-widest"
                        style={{ fontFamily: "var(--font-inter)", color: "#d9c9a8" }}
                    >
                        © 2026 Sree Selvanayaki Amman Oil & Flour Mill
                    </p>
                </div>
            </div>
        </footer>
    );
}
