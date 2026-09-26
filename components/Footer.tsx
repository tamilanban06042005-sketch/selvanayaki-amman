import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/lib/config";

const footerProducts = [
    { name: "Groundnut Oil", href: "/shop/groundnut-oil" },
    { name: "Gingelly Oil", href: "/shop/gingelly-oil" },
    { name: "Coconut Oil", href: "/shop/coconut-oil" },
    { name: "Health Mix Powder", href: "/shop/health-mix-powder" },
    { name: "Turmeric Powder", href: "/shop/turmeric-powder" },
    { name: "Shikakai Powder", href: "/shop/shikakai-powder" },
    { name: "Green Gram Powder", href: "/shop/green-gram-powder" },
];

const footerNav = [
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/#process" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

const footerLegal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping-policy" },
    { name: "Return Policy", href: "/return-policy" },
];

const whatsappUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello Sree Selvanayaki Amman, I would like to enquire about your products."
)}`;

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#164A32] text-[#F7F1E5]" role="contentinfo">

            {/* ── Main Footer Grid ───────────────────────────────────────────────── */}
            <div className="container-wide py-16 lg:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                    {/* Col 1: Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-3 mb-5" aria-label="Home">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#F7F1E5]/20 flex-shrink-0">
                                <Image
                                    src="/logo.jpeg"
                                    alt="SSAOFM Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <p className="font-cormorant font-semibold text-[#F7F1E5] text-base leading-tight">
                                    Sree Selvanayaki Amman
                                </p>
                                <p className="font-inter text-[9px] uppercase tracking-[0.25em] text-[#F7F1E5]/50 leading-tight mt-0.5">
                                    Oil &amp; Flour Mill
                                </p>
                            </div>
                        </Link>

                        <p className="text-[#F7F1E5]/65 font-inter text-sm leading-relaxed mb-6 max-w-xs">
                            Traditional quality, honest produce. Our mill in Pidariyur, Erode district,
                            has been pressing oils and grinding flours for families across the region.
                        </p>

                        {/* Contact quick links */}
                        <div className="flex flex-col gap-2 text-sm">
                            <a
                                href={`tel:${businessConfig.phone}`}
                                className="text-[#F7F1E5]/70 hover:text-[#B88745] transition-colors inline-flex items-center gap-2"
                            >
                                <span className="text-[#B88745]">☎</span>
                                {businessConfig.phone}
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#F7F1E5]/70 hover:text-[#22C55E] transition-colors inline-flex items-center gap-2"
                            >
                                <span className="text-[#22C55E]">●</span>
                                WhatsApp Order
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Products */}
                    <div>
                        <h3 className="label-caps text-[#B88745] mb-5">Products</h3>
                        <ul className="flex flex-col gap-2.5">
                            {footerProducts.map((p) => (
                                <li key={p.href}>
                                    <Link
                                        href={p.href}
                                        className="text-[#F7F1E5]/65 hover:text-[#F7F1E5] text-sm transition-colors"
                                    >
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Navigate */}
                    <div>
                        <h3 className="label-caps text-[#B88745] mb-5">Navigate</h3>
                        <ul className="flex flex-col gap-2.5 mb-8">
                            {footerNav.map((p) => (
                                <li key={p.href}>
                                    <Link
                                        href={p.href}
                                        className="text-[#F7F1E5]/65 hover:text-[#F7F1E5] text-sm transition-colors"
                                    >
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <h3 className="label-caps text-[#B88745] mb-5">Legal</h3>
                        <ul className="flex flex-col gap-2.5">
                            {footerLegal.map((p) => (
                                <li key={p.href}>
                                    <Link
                                        href={p.href}
                                        className="text-[#F7F1E5]/65 hover:text-[#F7F1E5] text-sm transition-colors"
                                    >
                                        {p.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Address + FSSAI */}
                    <div>
                        <h3 className="label-caps text-[#B88745] mb-5">Visit Our Mill</h3>
                        <address className="not-italic text-[#F7F1E5]/65 text-sm leading-relaxed mb-6">
                            9, Pirivu, 1010 Colony,<br />
                            Pidariyur, Mukasipidariyur,<br />
                            Tamil Nadu – 638 051, India
                        </address>

                        <div className="bg-[#245C40]/60 border border-[#F7F1E5]/10 rounded-lg p-4">
                            <p className="label-caps text-[#B88745] mb-1.5">FSSAI License</p>
                            <p className="font-inter text-[#F7F1E5]/75 text-sm font-mono tracking-wider">
                                {businessConfig.fssaiLicense}
                            </p>
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-5 py-3 rounded-full transition-colors"
                        >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Order on WhatsApp
                        </a>
                    </div>

                </div>
            </div>

            {/* ── Bottom Bar ─────────────────────────────────────────────────────── */}
            <div className="border-t border-[#F7F1E5]/10">
                <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[#F7F1E5]/40 text-xs font-inter text-center sm:text-left">
                        © {year} Sree Selvanayaki Amman Oil &amp; Flour Mill. All rights reserved.
                    </p>
                    <p className="text-[#F7F1E5]/30 text-xs font-inter">
                        Traditional quality from Pidariyur, Erode, Tamil Nadu
                    </p>
                </div>
            </div>

        </footer>
    );
}
