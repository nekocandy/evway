import type { Schema } from 'redis-om'
import { Repository } from 'redis-om'
import type { getRedisClient } from '../redis'
import { evModelsSchema } from './schema'

export function createIndex(schema: Schema, redisClient: Awaited<ReturnType<typeof getRedisClient>>) {
  const repo = new Repository(schema, redisClient)
  return repo.createIndex()
}

export const getEVModelsRepository = (redisClient: Awaited<ReturnType<typeof getRedisClient>>) => new Repository(evModelsSchema, redisClient)
