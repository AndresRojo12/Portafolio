// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  plugins: [
    '~/plugins/iconify.js',
  ],

  build: {
    transpile: ['vuetify'],
  },

  runtimeConfig: {
    public: {
      GIT_HUB: process.env.GIT_HUB,
      LINKEDIN: process.env.LINKEDIN,
      CORREO: process.env.CORREO
    }
  }
})
