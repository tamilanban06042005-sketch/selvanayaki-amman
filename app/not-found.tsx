import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Page Not Found",
    description: "The page you are looking for could not be found.",
    noIndex: true,
});

export default function NotFound() {
    return (
        <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-5xl font-bold text-stone-800 mb-4">404</h1>
            <p className="text-xl text-stone-600 mb-8">Page not found.</p>
            <div className="flex gap-4 flex-wrap justify-center">
                <Link
                    href="/"
                    className="px-6 py-3 bg-stone-800 text-white rounded-md hover:bg-stone-700 transition-colors"
                >
                    Back to Home
                </Link>
                <Link
                    href="/shop"
                    className="px-6 py-3 border border-[var(--color-brand-brown)] text-[var(--color-brand-brown)] rounded-md hover:bg-[var(--color-brand-beige)] transition-colors"
                >
                    Shop Products
                </Link>
            </div>
        </main>
    );
}

