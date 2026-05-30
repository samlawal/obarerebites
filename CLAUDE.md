# Oba Rere Bites — obarerebites.co.uk

Nigerian street food delivery website targeting Portsmouth students.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Stripe for card payments
- WhatsApp for order messaging (+44 7780 475030)
- Framer Motion for animations
- Lucide React for icons
- Deployed on Vercel: https://obarerebites.vercel.app
- GitHub: https://github.com/samlawal/obarerebites

## Project Structure
```
src/
  app/
    page.tsx          — Homepage (hero slideshow, stats, carousel, testimonials)
    menu/             — Menu page with category filters
    party-orders/     — Bulk order page with quote form
    cart/             — Cart with Stripe + WhatsApp checkout
    cart/success/     — Order confirmation
    about/            — Brand story
    contact/          — Contact details + socials
    terms/            — Terms & conditions
    api/checkout/     — Stripe checkout session API route
  components/
    navbar.tsx        — Sticky nav with cart badge + mobile hamburger
    footer.tsx        — Footer with T&C link + illustrative images disclaimer
    menu-card.tsx     — Food card with image, price, Add button (supports per-item imageStyle)
    cart-toast.tsx    — Toast notification when item added to cart
    whatsapp-button.tsx — WhatsApp link button
    logo.tsx          — SVG crown logo component
    home/             — Homepage-specific components (hero, scroll-reveal, counter, carousel)
  lib/
    menu-data.ts      — All menu items, prices, images, categories
    cart-context.tsx   — React Context cart state management
```

## Brand Colours (defined in globals.css @theme)
- Jollof Red: #C62828
- Plantain Yellow: #F9A825
- Naija Green: #2E7D32
- Charcoal: #212121
- Afro Orange: #E65100
- Cream: #FFF8E1

## Key Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
vercel --yes --prod --scope samlawals-projects  # Deploy to Vercel
```

## Business Documents
Located in `business-docs/`:
- ObaRereBites_Pitch_Deck.pptx — 16-slide presentation
- ObaRereBites_Business_Plan.docx — Full strategy document
- ObaRereBites_30Day_Launch_Checklist.docx — Day-by-day launch plan
- ObaRereBites_Financial_Model.xlsx — Menu costs, sales scenarios, break-even
- ObaRereBites_Startup_Equipment.xlsx — Equipment list + electricity costs

## Important Notes
- Images use Unsplash (free) and Pexels (royalty-free) — configured in next.config.ts remotePatterns
- WhatsApp number: 447780475030 (used in whatsapp-button.tsx, cart-view.tsx, party-form.tsx)
- Stripe key goes in .env.local (STRIPE_SECRET_KEY) — lazy-loaded in API route to avoid build errors
- Polka dots pattern: CSS in globals.css (.polka-dots class), smaller on mobile, larger on desktop
- Menu items support per-item `imageStyle` for zoom/position control on food photos
- Do NOT add "Co-Authored-By" lines to commits

@AGENTS.md
