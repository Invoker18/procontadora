import { availableCalculators } from './app/utils/calculators'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@vueuse/nuxt', '@vercel/speed-insights', '@vercel/analytics', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://procontadora.com',
    name: 'PRO Contadora',
    description:
      'Contabilidad y asesoría financiera para clínicas, hospitales y organizaciones de salud en México.',
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
      logo: '/images/logo.png'
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
