export interface ShippingConfig {
    shippingFee: number;
    freeShippingThreshold: number;
    estimatedDeliveryDays: string;
    serviceablePincodes?: string[];
    deliveryZones?: string[];
    shippingRates?: Record<string, number>;
}

export interface ShippingCalculation {
    deliveryAvailable: boolean;
    shippingFee: number;
    freeShipping: boolean;
    estimatedDelivery: string;
    requiresManualConfirmation: boolean;
}

/** Alias used by whatsapp.ts */
export type ShippingResult = ShippingCalculation;
