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
