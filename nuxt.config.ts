// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, 'src'),
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ]
})
