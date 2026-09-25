"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Auto-discover and numerically sort frame filenames
function buildFrameList(count: number): string[] {
    return Array.from({ length: count }, (_, i) => {
        const n = String(i + 1).padStart(3, "0");
        return `/frames/ezgif-frame-${n}.jpg`;
    });
}

const FRAME_COUNT = 300;
const SCROLL_DISTANCE = "350vh";

type Message = {
    title: string;
    subtitle: string;
    startPct: number;
    endPct: number;
    direction: "top" | "right" | "bottom";
};

const MESSAGES: Message[] = [
    {
        title: "Pure Tradition.",
        subtitle: "Time-tested methods and carefully selected ingredients.",
        startPct: 0.22,
        endPct: 0.45,
        direction: "top",
    },
    {
        title: "Three Oils.\nOne Promise.",
        subtitle:
            "Gingelly Oil, Groundnut Oil and Coconut Oil made for everyday goodness.",
        startPct: 0.47,
        endPct: 0.68,
        direction: "right",
    },
    {
        title: "From Nature\nto Your Kitchen.",
        subtitle:
            "Wholesome ingredients, trusted quality and the taste of tradition.",
        startPct: 0.7,
        endPct: 0.92,
        direction: "bottom",
    },
];

export default function HeroSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const stickyRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const msgRefs = useRef<(HTMLDivElement | null)[]>([]);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

    const [loading, setLoading] = useState(true);
    const [loadPct, setLoadPct] = useState(0);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const frameIndexRef = useRef(0);
    const rafRef = useRef<number>(0);

    // Draw current frame onto canvas
    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        // Use cached context â€” avoid re-fetching every frame
        if (!ctxRef.current) {
            ctxRef.current = canvas.getContext("2d");
        }
        const ctx = ctxRef.current;
        if (!ctx) return;
        const imgs = imagesRef.current;
        const img = imgs[index];
        if (!img || !img.complete || img.naturalWidth === 0) return;

        const dpr = window.devicePixelRatio || 1;
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;

        // Cinematic cover â€” maintain aspect, cover the canvas
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const scale = Math.max(w / iw, h / ih);
        const sw = iw * scale;
        const sh = ih * scale;
        const sx = (w - sw) / 2;
        const sy = (h - sh) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, sx * dpr, sy * dpr, sw * dpr, sh * dpr);
    }, []);

    // Resize canvas to match window, preserve DPR
    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        // Reset cached ctx after resize (canvas resize clears the context)
        ctxRef.current = canvas.getContext("2d");
        drawFrame(frameIndexRef.current);
    }, [drawFrame]);

    // Preload frames
    useEffect(() => {
        const frameList = buildFrameList(FRAME_COUNT);
        const imgs: HTMLImageElement[] = [];
        let loaded = 0;

        frameList.forEach((src, i) => {
            const img = new Image();
            img.onload = () => {
                loaded++;
                setLoadPct(Math.round((loaded / FRAME_COUNT) * 100));
                if (loaded === 1) {
                    // Show first frame immediately
                    imagesRef.current = imgs;
                    resizeCanvas();
                    drawFrame(0);
                }
                if (loaded === FRAME_COUNT) {
                    imagesRef.current = imgs;
                    setLoading(false);
                }
            };
            img.onerror = () => {
                loaded++;
                setLoadPct(Math.round((loaded / FRAME_COUNT) * 100));
                if (loaded === FRAME_COUNT) setLoading(false);
            };
            imgs[i] = img;
            img.src = src;
        });

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        return () => window.removeEventListener("resize", resizeCanvas);
    }, [resizeCanvas, drawFrame]);

    // GSAP ScrollTrigger â€” pin sticky, scrub frames, animate overlay and messages
    useEffect(() => {
        if (loading) return;

        const ctx = gsap.context(() => {
            // Frame scrubbing â€” scrub: 0.5 keeps canvas close to scroll position
            const obj = { frame: 0 };
            gsap.to(obj, {
                frame: FRAME_COUNT - 1,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.5,
                    onUpdate: () => {
                        const newFrame = Math.round(obj.frame);
                        if (newFrame !== frameIndexRef.current) {
                            frameIndexRef.current = newFrame;
                            cancelAnimationFrame(rafRef.current);
                            rafRef.current = requestAnimationFrame(() =>
                                drawFrame(frameIndexRef.current)
                            );
                        }
                    },
                },
            });

            // Overlay text fades out as scroll begins
            gsap.to(overlayRef.current, {
                opacity: 0,
                y: -60,
                ease: "power2.in",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "15% top",
                    scrub: 1.5,
                },
            });

            // Cinematic messages
            MESSAGES.forEach((msg, i) => {
                const el = msgRefs.current[i];
                if (!el) return;
                const totalLen = sectionRef.current
                    ? parseFloat(getComputedStyle(sectionRef.current).height)
                    : window.innerHeight * 3.5;

                const startY = msg.startPct * totalLen;
                const endY = msg.endPct * totalLen;
                const midY = (startY + endY) / 2;
                const fadeRange = (endY - startY) * 0.2;

                // Entrance
                let fromVars: gsap.TweenVars = { opacity: 0, scale: 0.96 };
                if (msg.direction === "top") fromVars = { ...fromVars, y: -50 };
                else if (msg.direction === "right") fromVars = { ...fromVars, x: 60 };
                else if (msg.direction === "bottom") fromVars = { ...fromVars, y: 50 };

                gsap.fromTo(
                    el,
                    fromVars,
                    {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: `${startY}px top`,
                            end: `${startY + fadeRange}px top`,
                            scrub: 1.5,
                        },
                    }
                );

                // Exit
                gsap.to(el, {
                    opacity: 0,
                    y: msg.direction === "top" ? 40 : msg.direction === "right" ? -30 : -40,
                    x: 0,
                    scale: 0.97,
                    ease: "power2.in",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: `${endY - fadeRange}px top`,
                        end: `${endY}px top`,
                        scrub: 1.5,
                    },
                });
            });
        });

        return () => {
            ctx.revert();
            cancelAnimationFrame(rafRef.current);
        };
    }, [loading, drawFrame]);

    const scrollToOils = () => {
        document.querySelector("#our-oils")?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            id="hero-section"
            ref={sectionRef}
            style={{ height: SCROLL_DISTANCE }}
            className="relative"
        >
            {/* Sticky container â€” hosts the pinned cinematic experience */}
            <div
                ref={stickyRef}
                className="sticky top-0 w-full h-screen overflow-hidden"
                style={{ background: "#0e0e0c" }}
            >
                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    aria-label="Cinematic product film sequence"
                    role="img"
                    style={{ willChange: "transform" }}
                />

                {/* Vignette */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,8,0.65) 100%)",
                    }}
                />

                {/* Loading overlay */}
                {loading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0e0e0c] z-30">
                        <div className="w-1 h-1 mb-8">
                            <div
                                className="width-48 text-center text-xs tracking-[0.35em] uppercase mb-4"
                                style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                            >
                                Film Sequence Loading
                            </div>
                            <div className="w-48 h-px bg-[#2a2a28] relative -ml-24">
                                <div
                                    className="absolute left-0 top-0 h-full bg-[var(--color-brand-brown)] transition-all duration-200"
                                    style={{ width: `${loadPct}%`, background: "#c8922a" }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Brand overlay â€” fades out on scroll */}
                <div
                    ref={overlayRef}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
                >
                    <div
                        className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-4 pointer-events-none select-none"
                        style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                    >
                        Sree Selvanayaki Amman
                    </div>
                    <h1
                        className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2"
                        style={{
                            fontFamily: "var(--font-playfair)",
                            color: "#f0e8d5",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.08,
                            textShadow: "0 4px 32px rgba(0,0,0,0.6)",
                        }}
                    >
                        Pure Tradition.
                        <br />
                        <em>Naturally Yours.</em>
                    </h1>
                    <div
                        className="w-16 mx-auto my-5 h-px"
                        style={{
                            background:
                                "linear-gradient(90deg, transparent, #c8922a, transparent)",
                        }}
                    />
                    <p
                        className="text-sm md:text-base max-w-md mx-auto opacity-70 mb-2"
                        style={{ fontFamily: "var(--font-inter)", color: "#f0e8d5" }}
                    >
                        Traditional oils crafted with care for every South Indian kitchen.
                    </p>
                    <p
                        className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-8"
                        style={{ color: "#d9c9a8", fontFamily: "var(--font-inter)" }}
                    >
                        Oil & Flour Mill
                    </p>

                    {/* CTAs â€” pointer-events-auto so they are clickable */}
                    <div className="flex gap-4 flex-wrap justify-center pointer-events-auto">
                        <button
                            onClick={scrollToOils}
                            aria-label="Explore our oils"
                            className="px-7 py-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-brown)]"
                            style={{
                                background: "#c8922a",
                                color: "#111110",
                                fontFamily: "var(--font-inter)",
                                borderRadius: "2px",
                            }}
                        >
                            Explore Our Oils
                        </button>
                        <button
                            onClick={scrollToContact}
                            aria-label="Contact us"
                            className="px-7 py-3 text-[11px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[rgba(200,146,42,0.1)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-brown)]"
                            style={{
                                border: "1px solid rgba(200,146,42,0.5)",
                                color: "#f0e8d5",
                                fontFamily: "var(--font-inter)",
                                borderRadius: "2px",
                            }}
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Cinematic storytelling messages */}
                {MESSAGES.map((msg, i) => (
                    <div
                        key={i}
                        ref={(el) => { msgRefs.current[i] = el; }}
                        className="absolute inset-0 flex flex-col justify-center pointer-events-none px-8 md:px-16 lg:px-24"
                        style={{ opacity: 0 }}
                    >
                        <div
                            className={`max-w-xl ${i === 1 ? "ml-auto text-right" : i === 2 ? "mx-auto text-center" : ""
                                }`}
                        >
                            <p
                                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    color: "#f0e8d5",
                                    lineHeight: 1.1,
                                    textShadow: "0 2px 24px rgba(0,0,0,0.7)",
                                    whiteSpace: "pre-line",
                                }}
                            >
                                {msg.title}
                            </p>
                            <div
                                className={`w-12 h-px mb-4 ${i === 1 ? "ml-auto" : i === 2 ? "mx-auto" : ""}`}
                                style={{ background: "#c8922a" }}
                            />
                            <p
                                className="text-sm md:text-base opacity-70"
                                style={{
                                    fontFamily: "var(--font-inter)",
                                    color: "#f0e8d5",
                                    lineHeight: 1.7,
                                    textShadow: "0 1px 12px rgba(0,0,0,0.8)",
                                }}
                            >
                                {msg.subtitle}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Scroll indicator */}
                <div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 pointer-events-none"
                    aria-hidden="true"
                >
                    <span
                        className="text-[9px] tracking-[0.4em] uppercase"
                        style={{ color: "#c8922a", fontFamily: "var(--font-inter)" }}
                    >
                        Scroll
                    </span>
                    <div
                        className="w-px h-8 relative overflow-hidden"
                        style={{ background: "rgba(200,146,42,0.3)" }}
                    >
                        <div
                            className="absolute top-0 w-full bg-[var(--color-brand-brown)]"
                            style={{
                                height: "50%",
                                background: "#c8922a",
                                animation: "floatUp 1.8s ease-in-out infinite",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

