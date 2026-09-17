// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'], // <--- Add this line,
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
})