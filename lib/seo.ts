import { Metadata } from "next";
import { businessConfig } from "@/lib/config";

const siteName = "Sree Selvanayaki Amman Oil & Flour Mill";
const baseUrl = businessConfig.website;

export function buildMetadata({
    title,
    description,
    path = "/",
    noIndex = false,
}: {
    title: string;
    description: string;
    path?: string;
    noIndex?: boolean;
}): Metadata {
    const fullTitle = `${title} | ${siteName}`;
    const canonical = `${baseUrl}${path}`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL(baseUrl),
        alternates: { canonical },
        openGraph: {
            title: fullTitle,
            description,
            url: canonical,
            siteName,
            type: "website",
            locale: "en_IN",
        },
        robots: noIndex
            ? { index: false, follow: false }
            : { index: true, follow: true },
    };
}

export function buildProductMetadata({
    name,
    description,
    slug,
    category,
}: {
    name: string;
    description: string;
    slug: string;
    category: string;
}): Metadata {
    return buildMetadata({
        title: name,
        description,
        path: `/${category}/${slug}`,
    });
}

/** JSON-LD for LocalBusiness */
export function localBusinessJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: businessConfig.businessName,
        address: {
            "@type": "PostalAddress",
            streetAddress: "9, Pirivu, 1010 Colony, Pidariyur",
            addressLocality: "Mukasipidariyur",
            addressRegion: "Tamil Nadu",
            postalCode: "638051",
            addressCountry: "IN",
        },
        telephone: businessConfig.phone,
        url: businessConfig.website,
    };
}

/** JSON-LD for Product */
export function productJsonLd({
    name,
    description,
    image,
    slug,
    category,
    sellingPrice,
    mrp,
    available,
}: {
    name: string;
    description: string;
    image?: string;
    slug: string;
    category: string;
    sellingPrice: number;
    mrp: number;
    available: boolean;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        image: image ? `${baseUrl}${image}` : undefined,
        brand: { "@type": "Brand", name: "Sree Selvanayaki Amman" },
        url: `${baseUrl}/${category}/${slug}`,
        offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: sellingPrice,
            highPrice: mrp,
            availability: available
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock",
            url: `${baseUrl}/${category}/${slug}`,
        },
    };
}

/** JSON-LD for BreadcrumbList */
export function breadcrumbJsonLd(
    items: { name: string; url: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
