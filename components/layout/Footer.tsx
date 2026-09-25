import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/lib/config";
import { MapPin, Phone, Mail } from "lucide-react";
import { getProductsByCategory } from "@/lib/data/products";

const POLICY_LINKS = [
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return & Refund", href: "/return-policy" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "FAQ", href: "/faq" },
];

function WhatsAppIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
    );
}

export default function Footer() {
    const oils = getProductsByCategory("oils");
    const powders = getProductsByCategory("powders");

    return (
        <footer className="bg-brand-dark text-brand-beige border-t border-brand-heritage">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="block mb-6 relative h-28 w-64 bg-brand-soft-cream rounded-sm p-4 border border-brand-heritage/30">
                            <Image src="/main-logo.jpg" alt="Sree Selvanayaki Amman" fill className="object-contain" sizes="256px" />
                        </Link>
                        <p className="text-brand-beige/80 text-sm leading-relaxed mb-8">
                            Premium traditional oils and natural food essentials, carefully processed and packed for your family in Pidariyur.
                        </p>
                        <div className="flex flex-col space-y-4">
                            <a
                                href={`https://wa.me/${businessConfig.whatsappNumber}?text=Hello, I would like to enquire about your products.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5A] text-white text-[13px] uppercase tracking-wider font-semibold py-3 px-5 rounded-sm transition-colors w-full shadow-sm"
                            >
                                <WhatsAppIcon />
                                INQUIRE ON WHATSAPP
                            </a>
                            {businessConfig.instagramUrl && (
                                <a
                                    href={businessConfig.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-brand-beige/60 hover:text-brand-gold text-sm transition-colors w-fit"
                                >
                                    <InstagramIcon />
                                    Follow our journey
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Products Column 1 */}
                    <div className="lg:pl-8">
                        <h4 className="heading-editorial text-lg mb-6 text-brand-ivory text-xl">Traditional Oils</h4>
                        <ul className="space-y-4 text-sm">
                            {oils.map((product) => (
                                <li key={product.id}>
                                    <Link href={`/shop/${product.slug}`} className="text-brand-beige/70 hover:text-brand-gold transition-colors block">
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products Column 2 */}
                    <div>
                        <h4 className="heading-editorial text-lg mb-6 text-brand-ivory text-xl">Everyday Essentials</h4>
                        <ul className="space-y-4 text-sm">
                            {powders.map((product) => (
                                <li key={product.id}>
                                    <Link href={`/shop/${product.slug}`} className="text-brand-beige/70 hover:text-brand-gold transition-colors block">
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Legal */}
                    <div>
                        <h4 className="heading-editorial text-lg mb-6 text-brand-ivory text-xl">Contact Us</h4>
                        <div className="space-y-4 text-sm text-brand-beige/70 mb-10">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 shrink-0 text-brand-gold opacity-80" />
                                <p className="leading-relaxed">{businessConfig.businessAddress}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 shrink-0 text-brand-gold opacity-80" />
                                <p>{businessConfig.phone}</p>
                            </div>
                        </div>

                        <h4 className="heading-editorial text-sm mb-4 text-brand-ivory uppercase tracking-widest">Information</h4>
                        <ul className="space-y-3 text-sm grid grid-cols-2 gap-x-4">
                            {POLICY_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-brand-beige/50 hover:text-brand-beige transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-brand-heritage/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-beige/40">
                    <p>© {new Date().getFullYear()} {businessConfig.businessName}. All rights reserved.</p>
                    <p className="tracking-widest">FSSAI: {businessConfig.fssaiLicense}</p>
                </div>
            </div>
        </footer>
    );
}
