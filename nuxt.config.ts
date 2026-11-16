import { availableCalculators } from './app/utils/calculators'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@vueuse/nuxt', '@vercel/speed-insights', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=1' },
        { rel: 'manifest', href: '/site.webmanifest?v=1' }
      ]
    }
  },
  site: {
    url: 'https://www.procontadora.com',
    name: 'PRO Contadora',
    description:
      'Asesoría contable y financiera para negocios en México, con especialidad en clínicas veterinarias.',
    defaultLocale: 'es-MX'
  },
  sitemap: {
    urls: availableCalculators.map((calculator) => `/calculadoras/${calculator.slug}`),
    exclude: ['/politica-de-privacidad']
  },
  routeRules: {
    '/api/**': { headers: { 'X-Robots-Tag': 'noindex' } }
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'PRO Contadora',
      logo: '/images/logo.png',
      founder: {
        '@type': 'Person',
        name: 'Marisela Sánchez',
        jobTitle: 'Fundadora y CFO Estratégica'
      }
    }
  },
  aiReady: { contentSignal: false },
  ogImage: false,
  ui: {
    colorMode: false
  },
  fonts: {
    families: [
      {
        name: 'Noto Sans',
        provider: 'google',
        weights: [300, 400, 500, 600, 700]
      },
      {
        name: 'Noto Serif',
        provider: 'google',
        weights: [400, 600, 700]
      }
    ]
  },
  runtimeConfig: {
    banxicoApiKey: process.env.BANXICO_API_KEY
  }
})
