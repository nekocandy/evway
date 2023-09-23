import { createClient } from 'redis'
import { env } from 'std-env'

const redisClient = createClient({
  url: env.REDIS_URL,
})

export async function getRedisClient() {
  if (redisClient.isOpen)
    return redisClient

  await redisClient.connect()
  return redisClient
}
