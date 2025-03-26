export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&amp;display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap' }
      ],
      script: [
        { src: 'https://use.fontawesome.com/releases/v6.3.0/js/all.js' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxtjs/robots',
    '@nuxtjs/i18n'
  ],
  supabase: {
    redirect: false
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English 🇺🇸', file: 'en.json' },
      { code: 'hy', iso: 'hy-AM', name: 'Հայերեն 🇦🇲', file: 'hy.json' },
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'prefix'
  }
})
