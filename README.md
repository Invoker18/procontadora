# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Scroll reveals

Use `v-animate:fade-up` on elements that should reveal as they enter the viewport. Other
variants are `fade-down`, `fade-left`, `fade-right`, `fade`, `zoom` (or `zoom-in`),
`zoom-out`, and `flip-up`. Options are passed in milliseconds, for example
`v-animate:fade-up="{ duration: 700, delay: 100, threshold: 0.15 }"`.

Reveals play once, only for elements initially below the viewport. GSAP is initialized on
demand near the first reveal (Nuxt may prefetch its chunk earlier); content remains visible
without JavaScript, with reduced motion, or if GSAP fails to load. Keep essential
above-the-fold content outside reveal animations.

## Calculators

The calculator directory and sitemap use the definitions in
`app/utils/calculators.ts`. The detail page matches the URL slug against that list
and renders the RESICO component; unknown slugs return 404. To add another
calculator, extend the definition types and list, implement its component and
calculation logic, and update the detail page to select the corresponding component.
The RESICO tool estimates monthly and annual ISR using the rate tables in articles
113-E and 113-F, with user-entered withholdings and, for the annual calculation,
monthly payments. It does not determine eligibility, filing obligations, special
treatments, or the final amount payable. Review its rates and limitations against
current tax rules before changing or relying on it.

## SEO and deployment

The temporary canonical domain is `https://procontadora.vercel.app`. When the final
domain is ready, set `NUXT_SITE_URL` to its preferred HTTPS origin in the production
environment (and at build time if prerendering). Redirect the old domain to the new
one at the hosting layer, verify the new property in Google Search Console, and submit
`/sitemap.xml`. Set `NUXT_SITE_ENV=staging` on preview deployments to prevent indexing.
Do not set it to `production` for preview environments.

`@nuxtjs/seo` generates `/robots.txt`, canonical URLs, and Schema.org data. The sitemap
includes the calculator routes from `app/utils/calculators.ts`; the privacy notice retains
its existing `noindex` policy. Update `public/og-image.png` and its matching alt-text file
when the brand changes. It is a static image, so social previews need no image-rendering
service. Replace the footer's generic social links and placeholder telephone number with
verified business details before publishing; they are deliberately excluded from schema.

Test deployed Core Web Vitals with PageSpeed Insights and Search Console; scores and
rankings cannot be guaranteed.
