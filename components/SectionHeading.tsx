interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center";
    light?: boolean; // true = white text (for green bg)
}

export default function SectionHeading({
    eyebrow,
    title,
    subtitle,
    align = "center",
    light = false,
}: SectionHeadingProps) {
    const textAlign = align === "center" ? "text-center" : "text-left";
    const dividerAlign = align === "center" ? "mx-auto" : "";
    const headingColor = light ? "text-[#F7F1E5]" : "text-[#2B1812]";
    const eyebrowColor = light ? "text-[#B88745]" : "text-[#2B1812]/50";
    const subtitleColor = light ? "text-[#F7F1E5]/65" : "text-[#2B1812]/60";

    return (
        <div className={textAlign}>
            <p className={`font-inter text-[10px] font-bold tracking-[0.22em] uppercase ${eyebrowColor} mb-3`}>
                {eyebrow}
            </p>
            <div className={`w-10 h-px bg-[#B88745] mb-5 ${dividerAlign}`} aria-hidden="true" />
            <h2
                className={`font-cormorant font-bold text-[clamp(2rem,5vw,3.5rem)] ${headingColor} leading-tight tracking-wide whitespace-pre-line`}
            >
                {title}
            </h2>
            {subtitle && (
                <p className={`font-cormorant text-xl italic mt-4 ${subtitleColor} max-w-xl ${align === "center" ? "mx-auto" : ""}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
