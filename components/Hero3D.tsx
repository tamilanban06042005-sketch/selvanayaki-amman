"use client";
import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Preload, ContactShadows } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function HeroProduct() {
    const meshRef = useRef<any>(null);

    useEffect(() => {
        // Scroll driven rotation
        const ctx = gsap.context(() => {
            gsap.to(meshRef.current.rotation, {
                y: Math.PI * 2,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero-trigger",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // Shift toward the side gracefully (Stage 4)
            gsap.to(meshRef.current.position, {
                x: 1.5,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: "#hero-trigger",
                    start: "center top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <mesh ref={meshRef} position={[0, -0.5, 0]}>
                {/* Placeholder 3D representation for Groundnut Oil */}
                {/* Actual 3D model would go here. We use a high quality simple representation */}
                <cylinderGeometry args={[0.3, 0.3, 1.8, 32]} />
                <meshPhysicalMaterial
                    color="#cca045"
                    roughness={0.1}
                    metalness={0.1}
                    transmission={0.9}
                    thickness={0.5}
                    clearcoat={1}
                    envMapIntensity={2}
                />
                {/* Cap */}
                <mesh position={[0, 0.95, 0]}>
                    <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
                    <meshStandardMaterial color="#2B1812" />
                </mesh>
            </mesh>
        </Float>
    );
}

function FloatingIngredients() {
    const groupRef = useRef<any>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(groupRef.current.position, {
                y: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero-trigger",
                    start: "top top",
                    end: "bottom top",
                    scrub: 2,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <group ref={groupRef}>
            {/* Groundnuts representation */}
            {[...Array(5)].map((_, i) => (
                <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2} position={[Math.random() * 4 - 2, Math.random() * 2 - 1, Math.random() * 2 - 2]}>
                    <mesh scale={0.05}>
                        <sphereGeometry args={[1, 16, 16]} />
                        <meshStandardMaterial color="#4A281B" roughness={0.8} />
                    </mesh>
                </Float>
            ))}
            <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={5} blur={1.5} far={2} />
        </group>
    );
}

export default function Hero3D() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Parallax background logo
        const ctx = gsap.context(() => {
            gsap.to(".bg-watermark", {
                y: "20%",
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: "#hero-trigger",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });

            // Mouse interaction
            const handleMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;

                gsap.to(".bg-watermark", {
                    x: x,
                    y: y,
                    duration: 1.5,
                    ease: "power2.out"
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="hero-trigger" className="relative h-[200vh] w-full" ref={containerRef}>
            {/* Sticky container holds the viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-brand-cream-soft flex items-center">

                {/* Background Logo Watermark */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen opacity-10 bg-watermark z-0">
                    <div className="relative w-[150vw] h-[150vw] md:w-[90vw] md:h-[90vw] -translate-y-[5%]">
                        <Image
                            src="/logo.jpeg"
                            alt="Background Emblem"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Text Layer (Left Side) */}
                <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col justify-center translate-y-[-5%] pt-20">
                    <div className="max-w-2xl">
                        <span className="block text-[10px] md:text-[11px] font-inter uppercase tracking-[0.3em] font-semibold text-[#4A3930] mb-6 animate-fade-up">
                            SREE SELVANAYAKI AMMAN<br />OIL & FLOUR MILL
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-[#4A3930] leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
                            PURE.<br />
                            TRADITIONAL.<br />
                            MADE WITH CARE.
                        </h1>
                        <p className="text-[#4A3930] text-sm md:text-base font-inter max-w-md mb-10 leading-relaxed font-normal animate-fade-up" style={{ animationDelay: '200ms' }}>
                            Seven everyday essentials from Sree Selvanayaki Amman Oil & Flour Mill, Pidariyur, Erode.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up mb-12" style={{ animationDelay: '300ms' }}>
                            <a
                                href="#products"
                                className="bg-[#183921] hover:bg-[#112918] text-[#F5F2EB] text-[10px] uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                            >
                                Shop Products <span className="text-[12px]">→</span>
                            </a>
                            <a
                                href="https://wa.me/919965005891"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white border-2 border-[#183921] text-[#183921] hover:bg-[#F2F7F4] text-[10px] uppercase tracking-[0.2em] font-semibold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Order on WhatsApp
                            </a>
                        </div>

                        {/* Trust Badges Integrated */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#4A3930]/10 animate-fade-up max-w-xl" style={{ animationDelay: '400ms' }}>
                            <div className="flex flex-col gap-2">
                                <span className="text-xl">🏭</span>
                                <span className="text-[10px] font-bold text-[#4A3930] uppercase tracking-widest leading-tight">FROM<br />OUR MILL</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xl">🌿</span>
                                <span className="text-[10px] font-bold text-[#4A3930] uppercase tracking-widest leading-tight">CAREFULLY<br />SELECTED</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xl">🛡️</span>
                                <span className="text-[10px] font-bold text-[#4A3930] uppercase tracking-widest leading-tight">HYGIENICALLY<br />PACKED</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xl">✓</span>
                                <span className="text-[10px] font-bold text-[#4A3930] uppercase tracking-widest leading-tight">FSSAI<br />LICENSED</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* 3D Canvas Layer */}
                <div className="absolute inset-0 z-10 w-full h-full pointer-events-none md:pointer-events-auto">
                    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
                        <Environment preset="city" />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[10, 10, 5]} intensity={1} color="#FFFDF7" />
                        <HeroProduct />
                        <FloatingIngredients />
                        <Preload all />
                    </Canvas>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-brand-charcoal">SCROLL TO EXPLORE</span>
                    <span className="text-xs animate-bounce font-inter">↓</span>
                </div>

            </div>
        </section>
    );
}
