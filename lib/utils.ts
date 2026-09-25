/**
 * Formats a price in INR.
 */
export function formatPrice(amount: number): string {
    return `₹${amount.toLocaleString("en-IN", {
        minimumFractionDigits: amount % 1 !== 0 ? 2 : 0,
        maximumFractionDigits: 2,
    })}`;
}

/**
 * Calculates the discount percentage between MRP and selling price.
 * Returns undefined if no real discount exists.
 */
export function discountPercent(
    mrp: number,
    sellingPrice: number
): number | undefined {
    if (mrp <= sellingPrice) return undefined;
    return Math.round(((mrp - sellingPrice) / mrp) * 100);
}

/**
 * Clamps a number between min and max.
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}

/**
 * Generates a short unique ID (not cryptographically secure).
 */
export function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

/**
 * Truncates text to a max length with an ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trimEnd() + "…";
}
