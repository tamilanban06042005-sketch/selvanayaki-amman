export interface ShippingResult {
    deliveryAvailable: boolean;
    shippingFee: number;
    freeShipping: boolean;
    estimatedDelivery: string;
    requiresManualConfirmation: boolean;
    message?: string;
}

export interface ShippingConfig {
    standardShippingFee: number;
    freeShippingThreshold: number;
    estimatedDeliveryDays: string;
    serviceablePincodes?: string[];
}
