const fs = require('fs');
const files = ['app/page.tsx', 'components/layout/Footer.tsx', 'components/layout/Header.tsx', 'components/product/ProductCard.tsx'];
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content
        .replace(/brand-cream-dark/g, 'brand-beige-dark')
        .replace(/brand-cream/g, 'brand-beige')
        .replace(/brand-green-light/g, 'brand-emerald-light')
        .replace(/brand-green/g, 'brand-emerald')
        .replace(/brand-gold-light/g, 'brand-brass')
        .replace(/brand-gold/g, 'brand-brass')
        .replace(/brand-terracotta-dark/g, 'brand-brown')
        .replace(/brand-terracotta/g, 'brand-brown');
    fs.writeFileSync(f, content);
});
console.log('Replaced colors in files');
