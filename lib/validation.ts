/** Validates an Indian PIN code (exactly 6 digits). */
export function isPincode(value: string): boolean {
    return /^\d{6}$/.test(value.trim());
}

/** Validates a phone number (basic check). */
export function isPhone(value: string): boolean {
    return /^\+?\d{7,15}$/.test(value.replace(/\s/g, ""));
}

/** Ensures quantity is a safe positive integer. */
export function safeQuantity(raw: unknown, fallback = 1): number {
    const n = Number(raw);
    if (!isFinite(n) || n < 1) return fallback;
    return Math.floor(Math.min(n, 99));
}

/** Ensures price is a safe non-negative number. */
export function safePrice(raw: unknown): number {
    const n = Number(raw);
    if (!isFinite(n) || n < 0) return 0;
    return parseFloat(n.toFixed(2));
}
