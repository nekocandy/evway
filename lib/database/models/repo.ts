import { Repository } from 'redis-om'
import type { getRedisClient } from '../redis'
import { evModelsSchema } from './schema'

export const getEVModelsRepository = (redisClient: Awaited<ReturnType<typeof getRedisClient>>) => new Repository(evModelsSchema, redisClient)
