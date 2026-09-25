import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://selvanayaki-amman.vercel.app";
    return [
        { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
        { url: `${base}/shop`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
        { url: `${base}/oils`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/oils/groundnut-oil`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/oils/gingelly-oil`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/oils/coconut-oil`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/powders`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${base}/powders/health-mix`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${base}/powders/turmeric`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${base}/personal-care`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${base}/personal-care/shikakai`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${base}/personal-care/green-gram`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
        { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
        { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
        { url: `${base}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
        { url: `${base}/shipping-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${base}/return-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
        { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ];
}
