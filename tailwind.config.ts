import type { Config } from "tailwindcss";

/** ──────────────────────────────────────────────────────────────────────────
 *  SREE SELVANAYAKI AMMAN — TAILWIND CONFIG
 *  Note: Using Tailwind v4 with CSS-first approach. Most design tokens live in
 *  globals.css @theme. This file extends Tailwind for component-level usage.
 * ─────────────────────────────────────────────────────────────────────────── */
const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    // ── Greens
                    primary: "#164A32",
                    forest: "#245C40",
                    // ── Browns
                    heritage: "#4A281B",
                    dark: "#2B1812",
                    // ── Gold
                    gold: "#B88745",
                    // ── Backgrounds
                    ivory: "#F7F1E5",
                    cream: "#FFFDF7",
                    beige: "#E9DDCA",

                    // Legacy flat aliases (used by older components)
                    "deep-green": "#245C40",
                    "soft-cream": "#FFFDF7",
                    "green": "#164A32",
                    "brown": "#4A281B",
                    "emerald": "#164A32",
                    "ink": "#2B1812",
                    "brass": "#B88745",
                },
            },
            fontFamily: {
                // Heading — Cormorant Garamond (serifed, editorial)
                cormorant: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
                playfair: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
                // Body — Inter (clean, readable)
                inter: ["Inter", "system-ui", "-apple-system", "sans-serif"],
                sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
            },
            fontSize: {
                // Display sizes for hero headlines
                "display-2xl": ["5rem", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
                "display-xl": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
                "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
                "display-md": ["2.25rem", { lineHeight: "1.15" }],
                // Label / eyebrow
                "label": ["0.625rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
            },
            maxWidth: {
                "8xl": "1400px",
                "7xl": "1280px",
            },
            animation: {
                "fade-up": "fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "fade-in": "fadeIn 0.8s ease forwards",
                "reveal": "revealMask 1s cubic-bezier(0.77, 0, 0.175, 1) forwards",
            },
            keyframes: {
                fadeUp: {
                    from: { opacity: "0", transform: "translateY(24px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                revealMask: {
                    from: { clipPath: "inset(0 100% 0 0)" },
                    to: { clipPath: "inset(0 0% 0 0)" },
                },
            },
            transitionTimingFunction: {
                "heritage": "cubic-bezier(0.16, 1, 0.3, 1)",
            },
        },
    },
    plugins: [],
};

export default config;
