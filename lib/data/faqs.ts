export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export const faqs: FAQ[] = [
    {
        id: "how-to-order",
        category: "Ordering",
        question: "How can I place an order?",
        answer:
            'You can add products to your cart and place an order through WhatsApp. Click "Order on WhatsApp" and send the prepared message to our team. We will confirm availability, delivery and payment details.',
    },
    {
        id: "whatsapp-order",
        category: "Ordering",
        question: "Do I need WhatsApp to order?",
        answer:
            "WhatsApp is our primary ordering channel. When you place an order, a pre-filled message is prepared for you to send to our business WhatsApp (+91 7708039583). Our team will respond with confirmation and payment instructions.",
    },
    {
        id: "payment",
        category: "Payment",
        question: "What payment methods do you accept?",
        answer:
            "Payment details will be confirmed by our team after you send your WhatsApp order message. Please wait for our team's response.",
    },
    {
        id: "shipping-fee",
        category: "Delivery",
        question: "What is the shipping charge?",
        answer:
            "Standard shipping is ₹50. Orders above ₹1,000 qualify for free delivery.",
    },
    {
        id: "delivery-time",
        category: "Delivery",
        question: "How long does delivery take?",
        answer: "Estimated delivery is 2–4 working days.",
    },
    {
        id: "delivery-area",
        category: "Delivery",
        question: "Do you deliver to my area?",
        answer:
            "We cannot automatically confirm delivery for all PIN codes. Please order through WhatsApp and our team will confirm delivery availability for your location.",
    },
    {
        id: "product-sizes",
        category: "Products",
        question: "What sizes are available for oils?",
        answer:
            "Groundnut Oil and Gingelly Oil are available in 500 ml, 1 L and 5 L. Coconut Oil is available in 500 ml and 1 L.",
    },
    {
        id: "storage",
        category: "Products",
        question: "How should I store the oils?",
        answer:
            "Store oils in a cool, dry place away from direct sunlight. Keep lids tightly closed after use.",
    },
    {
        id: "contact",
        category: "Contact",
        question: "How can I contact you?",
        answer:
            "You can reach us by phone or WhatsApp at +91 7708039583. You can also visit us at 9, Pirivu, 1010 Colony, Pidariyur, Mukasipidariyur, Tamil Nadu – 638051, India.",
    },
];
