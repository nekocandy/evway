/* eslint-disable n/prefer-global/process */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'opinionated nuxt',
      meta: [
        {
          name: 'description',
          content: 'an opinionated nuxt starter template',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/oink.svg',
        },
      ],
    },
  },

  modules: ['@vueuse/nuxt', '@unocss/nuxt', '@sidebase/nuxt-auth'],
  css: [
    '@unocss/reset/tailwind.css',
    'notivue/notifications.css',
    'notivue/animations.css',
  ],
  build: {
    transpile: ['trpc-nuxt'],
  },
  imports: {
    imports: [
      {
        name: 'nanoid',
        from: 'nanoid',
      },
      {
        name: 'consola',
        from: 'consola',
      },
    ],
  },

  auth: {
    enableGlobalAppMiddleware: true,
  },

  runtimeConfig: {
    auth: {
      GOOGLE_CLIENT_ID: process.env.AUTH_GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      SECRET: process.env.AUTH_SECRET,
      //  use upstash adapter because no native redis adapter for authjs
      upstash: {
        URL: process.env.AUTH_UPSTASH_URL,
        TOKEN: process.env.AUTH_UPSTASH_TOKEN,
      },
    },
  },
})
