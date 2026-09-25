type AnalyticsEvent =
    | "page_view"
    | "view_item"
    | "select_item"
    | "add_to_cart"
    | "remove_from_cart"
    | "view_cart"
    | "begin_checkout"
    | "delivery_check"
    | "whatsapp_order_started"
    | "whatsapp_order_confirmed"
    | "phone_click"
    | "search";

// NOTE: "purchase" is intentionally omitted — WhatsApp click is NOT a purchase.
// Add "purchase" only when a real payment confirmation mechanism exists.

export function track(event: AnalyticsEvent, data?: Record<string, unknown>): void {
    if (process.env.NODE_ENV === "development") {
        console.log(`[analytics] ${event}`, data ?? "");
    }
    // TODO: Replace with real analytics provider (Google Analytics, Plausible, etc.)
}
