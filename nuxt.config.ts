import { availableCalculators } from './app/utils/calculators'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@vueuse/nuxt', '@vercel/speed-insights', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
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
