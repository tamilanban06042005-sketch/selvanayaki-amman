"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simple faux loading timer simulating asset loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-brand-cream-soft flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ease-out">
            <div className="relative z-10 flex flex-col items-center">
                {/* Logo with subtle pulse */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-8 animate-[pulse_3s_ease-in-out_infinite]">
                    <Image
                        src="/logo.jpeg"
                        alt="Sree Selvanayaki Amman Logo"
                        fill
                        className="object-contain mix-blend-multiply"
                        priority
                    />
                </div>

                {/* Text */}
                <h1 className="text-[10px] md:text-[12px] tracking-[0.4em] uppercase text-brand-green-primary font-semibold mb-6 animate-pulse">
                    PREPARING SOMETHING TRADITIONAL...
                </h1>

                {/* Animated Line */}
                <div className="w-48 h-[1px] bg-brand-brown-heritage/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-brand-green-primary w-full origin-left animate-[scaleX_2.5s_cubic-bezier(0.16,1,0.3,1)_forwards] translate-x-[-100%] @keyframes scaleX { to { transform: translateX(0) } }"></div>
                </div>

                {/* Inline style for keyframes to keep it encapsulated */}
                <style jsx>{`
                    @keyframes scaleX {
                        0% { transform: translateX(-100%); }
                        100% { transform: translateX(0); }
                    }
                    .animate-\\[scaleX_2\\.5s_cubic-bezier\\(0\\.16\\,1\\,0\\.3\\,1\\)_forwards\\] {
                        animation: scaleX 2.5s cubic-bezier(0.16,1,0.3,1) forwards;
                    }
                `}</style>
            </div>

            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>
    );
}
