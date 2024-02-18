// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  css: ['~/assets/css/reset.css', '~/assets/css/fonts.css', '~/assets/css/global.css'],
  modules: ['@nuxt/content', '@nuxt/image'],
  devtools: { enabled: true },
});
