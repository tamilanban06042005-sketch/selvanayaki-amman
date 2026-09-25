// /faq page
import { buildMetadata } from "@/lib/seo";
import { faqs } from "@/lib/data/faqs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = buildMetadata({
    title: "Frequently Asked Questions",
    description:
        "Answers to common questions about ordering, delivery and products from Sree Selvanayaki Amman Oil & Flour Mill.",
    path: "/faq",
});

export default function FAQPage() {
    const grouped = faqs.reduce<Record<string, typeof faqs>>((acc, faq) => {
        if (!acc[faq.category]) acc[faq.category] = [];
        acc[faq.category].push(faq);
        return acc;
    }, {});

    return (
        <>
            <Header />
            <main className="min-h-screen bg-stone-50 pt-20">
                <div className="max-w-3xl mx-auto px-6 py-16">
                    <h1 className="text-3xl font-bold text-stone-800 mb-10">Frequently Asked Questions</h1>
                    {Object.entries(grouped).map(([category, items]) => (
                        <section key={category} className="mb-10">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-amber-700 mb-4">{category}</h2>
                            <div className="space-y-6">
                                {items.map((faq) => (
                                    <div key={faq.id}>
                                        <h3 className="font-semibold text-stone-800 mb-1">{faq.question}</h3>
                                        <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
