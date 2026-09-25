import type { Config } from "tailwindcss";

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
                    green: {
                        primary: "#164A32",
                        deep: "#245C40",
                    },
                    brown: {
                        heritage: "#4A281B",
                        dark: "#2B1812",
                    },
                    gold: {
                        antique: "#B88745",
                    },
                    cream: {
                        ivory: "#F7F1E5",
                        soft: "#FFFDF7",
                        beige: "#E9DDCA",
                    },
                },
                charcoal: {
                    DEFAULT: "#1a1a18",
                    deep: "#111110",
                },
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "Georgia", "serif"],
                cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
                inter: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            animation: {
                "fade-up": "fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "reveal-soft": "revealSoft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            },
            keyframes: {
                fadeUp: {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                revealSoft: {
                    from: { opacity: "0", filter: "blur(4px)" },
                    to: { opacity: "1", filter: "blur(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
