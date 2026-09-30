/**
 * WaveSection — organic SVG wave divider between page sections.
 * variant "cream-to-green": cream background above, green below
 * variant "green-to-cream": green background above, cream below
 */
interface WaveSectionProps {
    variant: "cream-to-green" | "green-to-cream";
}

export default function WaveSection({ variant }: WaveSectionProps) {
    const topColor = variant === "cream-to-green" ? "#F7F1E5" : "#064B36";
    const bottomColor = variant === "cream-to-green" ? "#064B36" : "#F7F1E5";

    return (
        <div
            className="relative w-full overflow-hidden leading-[0]"
            style={{ background: topColor }}
            aria-hidden="true"
        >
            <svg
                viewBox="0 0 1440 80"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="w-full block"
                style={{ height: "80px" }}
            >
                {/* Gold outline wave */}
                <path
                    d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
                    fill={bottomColor}
                />
                <path
                    d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40"
                    fill="none"
                    stroke="#B88745"
                    strokeWidth="1.5"
                    opacity="0.5"
                />
            </svg>
        </div>
    );
}
