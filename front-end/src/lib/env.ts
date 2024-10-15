import { z } from 'zod'

const envSchema = z.object({
  BACKEND_API_URL: z.string().url().optional().default('http://localhost:3333'),
})

export const env = envSchema.parse(process.env)
