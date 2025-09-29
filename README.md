Thaai Ladies Hostel – One-page Next.js site (App Router)

Features
- Mobile-first responsive one-page with sections: Hero, Gallery, About, Reviews, Contact
- Branch selection (Ambattur/Pattabiram) with shared context
- Google Reviews fetched securely via API route `/api/reviews?placeId=...`
- EmailJS-powered contact form
- Google Maps embed per-branch
- TailwindCSS styling, shadcn-style elements, framer-motion micro-animations

Tech stack
- Next.js 13+ App Router
- TailwindCSS v4
- Framer Motion
- EmailJS

Getting started
1) Install dependencies
```bash
npm install
```

2) Set environment variables in `.env.local`
```bash
GOOGLE_API_KEY=your_server_google_api_key
NEXT_PUBLIC_PLACE_ID_AMBATTUR=your_google_place_id
NEXT_PUBLIC_PLACE_ID_PATTABIRAM=your_google_place_id
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
# Optional: if you have a dedicated maps embed key
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY=your_embed_key
```

3) Run the dev server
```bash
npm run dev
```
Open `http://localhost:3000`.

EmailJS template fields
- from_name
- reply_to
- phone (optional)
- message
- branch

Production build
```bash
npm run build && npm start
```

Vercel deployment
1) Push this repo to GitHub/GitLab
2) Import to Vercel
3) Add the same environment variables in Project Settings → Environment Variables
4) Assign your custom domain (e.g., `thaaihostel.in`) in Vercel → Domains

Project structure
```
public/
  images/
    ambattur/* (placeholder svgs)
    pattabiram/* (placeholder svgs)
src/
  app/
    api/reviews/route.js
    layout.tsx
    page.jsx
    globals.css
  components/
    Navbar.jsx, Hero.jsx, Gallery.jsx, About.jsx, Reviews.jsx, Contact.jsx
  context/
    BranchContext.jsx
```

Notes
- Replace placeholder SVGs in `public/images/*` with real photos when ready.
- The reviews API uses Places Details API; ensure the key has Places API access.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
