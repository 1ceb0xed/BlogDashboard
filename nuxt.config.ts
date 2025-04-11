// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      POSTS_LINK: 'https://jsonplaceholder.typicode.com/posts',
      USERS_LINK: 'https://jsonplaceholder.typicode.com/users',
    },
  },
  components: [{ path: '~/components', pathPrefix: false }],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/tailwindcss', 'vuetify-nuxt-module'],
})
