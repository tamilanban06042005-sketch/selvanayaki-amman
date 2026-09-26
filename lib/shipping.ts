import { ShippingConfig, ShippingCalculation } from "@/types/shipping";

export const shippingConfig: ShippingConfig = {
    shippingFee: 50,
    freeShippingThreshold: 1000,
    estimatedDeliveryDays: "2–4 working days",
    // Do not invent serviceable PIN codes here as per Step 1 instruction
};

export function calculateShipping(subtotal: number, pincode?: string): ShippingCalculation {
    const isFree = subtotal >= shippingConfig.freeShippingThreshold;
    const fee = isFree ? 0 : shippingConfig.shippingFee;

    // Explicitly unconfirmable pincode logic per Step 6 spec
    let requiresManualConfirmation = false;
    let deliveryAvailable = true;

    if (pincode && !shippingConfig.serviceablePincodes?.includes(pincode)) {
        requiresManualConfirmation = true;
    }

    return {
        deliveryAvailable,
        shippingFee: fee,
        freeShipping: isFree,
        estimatedDelivery: shippingConfig.estimatedDeliveryDays,
        requiresManualConfirmation
    };
}
