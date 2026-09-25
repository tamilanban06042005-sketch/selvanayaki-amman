export interface BusinessConfig {
    businessName: string;
    businessAddress: string;
    phone: string;
    whatsappNumber: string; // with country code, no +
    email?: string; // optional — not yet verified
    website: string;
    instagramUrl?: string; // optional — not yet verified
    googleBusinessUrl?: string; // optional
    fssaiLicense: string;
    currency: string;
    currencySymbol: string;
    defaultLocale: string;
}
