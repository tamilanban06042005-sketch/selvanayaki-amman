interface Props {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    centered?: boolean;
}

export default function SectionHeading({ eyebrow, title, subtitle, centered = false }: Props) {
    return (
        <div className={`mb-12 md:mb-16 ${centered ? "text-center md:mx-auto max-w-2xl" : ""}`}>
            {eyebrow && (
                <span className="block text-brand-gold text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                    {eyebrow}
                </span>
            )}
            <h2 className="heading-editorial text-3xl md:text-4xl lg:text-5xl text-brand-deep-green mb-6 leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-brand-dark/70 text-base md:text-lg font-light leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
