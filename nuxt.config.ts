// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, 'src'),
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  postcss: {
    plugins: {
      // Nuxt's ESM resolver requires the explicit entry point for Tailwind 3 nesting.
      'tailwindcss/nesting': false,
      'tailwindcss/nesting/index.js': {},
    },
  },
  plugins: process.env.NODE_ENV === 'production' ? ['~/plugins/google-analytics.js'] : [],
  app:{
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: './favicon.png'
        }
      ]
    }
  }
})
