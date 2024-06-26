import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en: {
        hello: 'Hello, {name}!'
      }, 
      es: {
        hello: 'Hola, {name}!'
      }
      // ... Podemos añadir todos los idiomas que necesitemos
    }
  })

  vueApp.use(i18n)
})