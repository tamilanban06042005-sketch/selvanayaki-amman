import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://selvanayaki-amman.vercel.app";
    return [
        { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
        { url: `${base}/shop`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
        // Category pages
        { url: `${base}/oils`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/powders`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        // Product pages — exactly 7 approved products
        { url: `${base}/products/groundnut-oil`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${base}/products/gingelly-oil`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${base}/products/coconut-oil`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
        { url: `${base}/products/health-mix-powder`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/products/turmeric-powder`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/products/green-gram-powder`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${base}/products/shikakai-powder`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        // Business pages
        { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
        { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
        { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
        // Policy pages — excluded from main nav, low priority
        { url: `${base}/shipping-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${base}/return-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
        { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ];
}
