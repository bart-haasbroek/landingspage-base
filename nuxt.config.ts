import { appConfig } from './config/appConfig';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@formkit/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@zadigetvoltaire/nuxt-gtm',
    '@formkit/auto-animate/nuxt'
  ],
  css: ['aos/dist/aos.css'],
  app: {
    head: {
      title: 'Gantify - One Tools For Doing it All Together',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Dit is de standaard meta description' },
        { name: 'author', content: 'Jouw Naam' },
      ]
    }
  },
  gtm: {
    id: appConfig.GTMID,
    enabled: process.env.NODE_ENV === 'production',
    debug: false,
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_KEY
    }
  }
})


