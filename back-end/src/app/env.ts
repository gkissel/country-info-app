import dotenv from 'dotenv'
import z from 'zod'

dotenv.config()

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3333),
})
export const env = envSchema.parse(process.env)
