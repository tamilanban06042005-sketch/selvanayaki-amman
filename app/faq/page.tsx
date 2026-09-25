import { buildMetadata } from "@/lib/seo";
import { faqs } from "@/lib/data/faqs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
    title: "Frequently Asked Questions",
    description: "Answers to common questions about ordering, delivery and products from Sree Selvanayaki Amman Oil & Flour Mill.",
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
            <Navbar />
            <main className="bg-[#F9F7F2] font-inter pt-32 pb-24 min-h-screen border-t-[8px] border-[#183921]">
                <div className="max-w-[800px] mx-auto px-6 lg:px-12 mt-12">
                    <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#4A3930] mb-16">
                        Frequently Asked Questions
                    </h1>

                    <div className="space-y-16">
                        {Object.entries(grouped).map(([category, items]) => (
                            <section key={category}>
                                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#183921] mb-8 pb-4 border-b border-[#4A3930]/10">
                                    {category}
                                </h2>
                                <div className="space-y-8">
                                    {items.map((faq) => (
                                        <div key={faq.id}>
                                            <h3 className="text-xl font-playfair font-bold text-[#4A3930] mb-3">
                                                {faq.question}
                                            </h3>
                                            <p className="text-[#4A3930]/80 font-light leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

