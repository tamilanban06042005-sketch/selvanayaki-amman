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
                charcoal: {
                    DEFAULT: "#1a1a18",
                    deep: "#111110",
                    soft: "#252521",
                },
                gold: {
                    DEFAULT: "#c8922a", // Minimal highlight
                },
                beige: {
                    DEFAULT: "#f5f2eb",
                    paper: "#eae6dc",
                    cream: "#f9f7f1",
                },
                brown: {
                    DEFAULT: "#4a3018", // espresso
                    light: "#6b4c2a",   // walnut
                    dark: "#2c1c0e",    // rich
                },
                green: {
                    DEFAULT: "#1b4d3e", // forest green
                    light: "#2a705a",
                    dark: "#113327",
                },
            },
            fontFamily: {
                playfair: ["var(--font-playfair)", "Georgia", "serif"],
                inter: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            animation: {
                "grain": "grain 8s steps(10) infinite",
                "shine": "shine 3s ease-in-out infinite",
                "float-dust": "floatDust 6s ease-in-out infinite",
                "fade-in": "fadeIn 1s ease forwards",
                "slide-up": "slideUp 0.8s ease forwards",
            },
            keyframes: {
                grain: {
                    "0%, 100%": { transform: "translate(0, 0)" },
                    "10%": { transform: "translate(-2%, -3%)" },
                    "20%": { transform: "translate(3%, 2%)" },
                    "30%": { transform: "translate(-1%, 3%)" },
                    "40%": { transform: "translate(2%, -1%)" },
                    "50%": { transform: "translate(-3%, 2%)" },
                    "60%": { transform: "translate(2%, 3%)" },
                    "70%": { transform: "translate(-2%, -2%)" },
                    "80%": { transform: "translate(3%, -1%)" },
                    "90%": { transform: "translate(-1%, 2%)" },
                },
                shine: {
                    "0%": { backgroundPosition: "-200% center" },
                    "100%": { backgroundPosition: "200% center" },
                },
                floatDust: {
                    "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
                    "10%": { opacity: "1" },
                    "90%": { opacity: "0.6" },
                    "100%": { transform: "translateY(-120px) translateX(30px)", opacity: "0" },
                },
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                slideUp: {
                    from: { opacity: "0", transform: "translateY(40px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
            backgroundImage: {
                "radial-gold": "radial-gradient(ellipse at center, rgba(200,146,42,0.15) 0%, transparent 70%)",
                "gold-line": "linear-gradient(90deg, transparent, #c8922a, transparent)",
                "wood-texture": "url('/textures/wood.jpg')",
            },
        },
    },
    plugins: [],
};

export default config;
