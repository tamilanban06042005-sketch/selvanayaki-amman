import { buildMetadata } from "@/lib/seo";
import { faqs } from "@/lib/data/faqs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = buildMetadata({
    title: "Frequently Asked Questions - Sree Selvanayaki Amman",
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
            <main className="bg-[#F3EFE6] font-inter pt-28 lg:pt-36 pb-24 min-h-screen">
                <div className="container-narrow mt-12">

                    <div className="text-center mb-16">
                        <span className="label-caps text-[#B88745] mb-4">Support & Information</span>
                        <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-[#2B1812]">
                            Frequently Asked Questions
                        </h1>
                    </div>

                    <div className="space-y-16">
                        {Object.entries(grouped).map(([category, items]) => (
                            <section key={category}>
                                <h2 className="label-caps text-[#164A32] mb-8 pb-4 border-b border-[#4A281B]/10">
                                    {category}
                                </h2>
                                <div className="space-y-8">
                                    {items.map((faq) => (
                                        <div key={faq.id}>
                                            <h3 className="font-cormorant font-bold text-2xl text-[#2B1812] mb-3">
                                                {faq.question}
                                            </h3>
                                            <p className="text-[#2B1812]/70 font-inter leading-relaxed">
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
