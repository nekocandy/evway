import { evModelRouter } from './routers/evModels'
import { router } from './trpc'

export const appRouter = router({
  evModels: evModelRouter,
})

export type AppRouter = typeof appRouter
