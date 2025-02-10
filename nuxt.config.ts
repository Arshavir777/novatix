// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: [
    '~/assets/css/styles.css'
  ],
  app: {
    head: {
      title: 'Novatix LLC',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap' }
      ],
      script: [
        { src: 'https://use.fontawesome.com/releases/v6.3.0/js/all.js' }
      ],
      meta: [
        { name: 'description', content: 'Novatix LLC Development Company'},
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
      ]
    }
  },
  modules: ['@nuxtjs/supabase'],
  supabase: {
    redirect: false
  }
})
