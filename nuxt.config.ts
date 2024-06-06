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

 
  head: {
    title: 'Portafolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Descripción de mi aplicación' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }
    ]
  },

  runtimeConfig: {
    public: {
      GIT_HUB: process.env.GIT_HUB,
      LINKEDIN: process.env.LINKEDIN,
      CORREO: process.env.CORREO
    }
  }
})
