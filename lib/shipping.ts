import { ShippingConfig, ShippingResult } from "@/types/shipping";

export const shippingConfig: ShippingConfig = {
    standardShippingFee: 50,
    freeShippingThreshold: 1000,
    estimatedDeliveryDays: "2–4 working days",
    // serviceablePincodes: [], // Not configured — all unknown PINs go to WhatsApp
};

/**
 * Validates that a pincode is a 6-digit Indian PIN.
 * A valid 6-digit PIN does NOT automatically mean delivery is available.
 */
export function validatePincode(pincode: string): {
    valid: boolean;
    error?: string;
} {
    const trimmed = pincode.trim();
    if (!trimmed) return { valid: false, error: "Please enter a PIN code." };
    if (!/^\d+$/.test(trimmed))
        return { valid: false, error: "PIN code must contain digits only." };
    if (trimmed.length !== 6)
        return { valid: false, error: "PIN code must be exactly 6 digits." };
    return { valid: true };
}

/**
 * Calculates shipping for a given cart subtotal and optional pincode.
 * If pincode is not in the configured serviceable list (or no list is configured),
 * requiresManualConfirmation is set to true and the user is directed to WhatsApp.
 */
export function calculateShipping(
    cartSubtotal: number,
    pincode?: string
): ShippingResult {
    const { standardShippingFee, freeShippingThreshold, estimatedDeliveryDays } =
        shippingConfig;

    // Pincode validation
    if (pincode) {
        const validation = validatePincode(pincode);
        if (!validation.valid) {
            return {
                deliveryAvailable: false,
                shippingFee: 0,
                freeShipping: false,
                estimatedDelivery: estimatedDeliveryDays,
                requiresManualConfirmation: false,
                message: validation.error,
            };
        }

        // Check serviceability
        const serviceable = shippingConfig.serviceablePincodes ?? [];
        if (serviceable.length > 0 && !serviceable.includes(pincode.trim())) {
            // Known non-serviceable PIN
            return {
                deliveryAvailable: false,
                shippingFee: 0,
                freeShipping: false,
                estimatedDelivery: estimatedDeliveryDays,
                requiresManualConfirmation: true,
                message:
                    "We couldn't automatically confirm delivery for this PIN code. Please order through WhatsApp so our team can confirm delivery availability and shipping charges.",
            };
        }

        if (serviceable.length === 0) {
            // No configured list — all PINs require manual WhatsApp confirmation
            return {
                deliveryAvailable: true,
                shippingFee:
                    cartSubtotal >= freeShippingThreshold ? 0 : standardShippingFee,
                freeShipping: cartSubtotal >= freeShippingThreshold,
                estimatedDelivery: estimatedDeliveryDays,
                requiresManualConfirmation: true,
                message:
                    "We couldn't automatically confirm delivery for this PIN code. Please order through WhatsApp so our team can confirm delivery availability and shipping charges.",
            };
        }
    }

    const freeShipping = cartSubtotal >= freeShippingThreshold;
    return {
        deliveryAvailable: true,
        shippingFee: freeShipping ? 0 : standardShippingFee,
        freeShipping,
        estimatedDelivery: estimatedDeliveryDays,
        requiresManualConfirmation: false,
    };
}

export function amountUntilFreeShipping(cartSubtotal: number): number {
    const remaining = shippingConfig.freeShippingThreshold - cartSubtotal;
    return remaining > 0 ? remaining : 0;
}
