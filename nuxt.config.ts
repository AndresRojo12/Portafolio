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
  modules: ["@nuxtjs/sitemap"],
  site: {
    url: "https://andres-rojo-software-development.onrender.com/",
  },
  sitemap: {
    hostname: "https://andres-rojo-software-development.onrender.com/",
    gzip: true,
    routes: [
      
    ],
  },

  head: {
    title: 'Portafolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Descripción de mi aplicación' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' },
      {
        rel: "icon", href: "/favicon.ico"
      }
    ]
  },

  runtimeConfig: {
    public: {
      GIT_HUB: process.env.GIT_HUB,
      LINKEDIN: process.env.LINKEDIN,
      CORREO: process.env.CORREO,
      WPP: process.env.WPP
    }
  }
})
