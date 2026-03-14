// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Pre-render routes at build time
  nitro: {
    prerender: {
      routes: ['/nye-2026', '/summer-bbq', '/prohib']
    }
  },

  // App configuration
  app: {
    head: {
      title: 'Cocktail Party Menus',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Elegant cocktail menus for your parties' }
      ]
    }
  },

  // TypeScript configuration
  typescript: {
    strict: true,
    typeCheck: false
  }
})
