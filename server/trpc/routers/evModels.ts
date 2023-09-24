import { z } from 'zod'
import { protectedProcedure, router } from '../trpc'
import { getRedisClient } from '~/lib/database/redis'
import { getEVModelsRepository } from '~/lib/database/models/repo'

export const evModelRouter = router({
  getEvModels: protectedProcedure
    .input(z.string().optional())
    .query(async ({ input }) => {
      const redisClient = await getRedisClient()
      const evModelRepo = getEVModelsRepository(redisClient)

      if (input && input.length) {
        const evModels = await evModelRepo.search().where('name').contains(`*${input}*`).return.all()
        return {
          evModels,
        }
      }
      else {
        const evModels = await evModelRepo.search().return.all()
        return {
          evModels,
        }
      }
    }),
})
