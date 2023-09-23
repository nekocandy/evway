import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter'
import { Redis } from '@upstash/redis'
import GoogleProvider from 'next-auth/providers/google'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
  adapter: UpstashRedisAdapter(new Redis({
    url: useRuntimeConfig().auth.upstash.URL,
    token: useRuntimeConfig().auth.upstash.TOKEN,
  })),
  secret: useRuntimeConfig().auth.SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    // @ts-expect-error vite SSR issue - need to use .default
    GoogleProvider.default({
      clientId: useRuntimeConfig().auth.GOOGLE_CLIENT_ID,
      clientSecret: useRuntimeConfig().auth.GOOGLE_CLIENT_SECRET,
      httpOptions: {
        timeout: 40000,
      },
    }),
  ],
})
