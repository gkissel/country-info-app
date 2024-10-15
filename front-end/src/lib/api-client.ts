import ky from 'ky'

import { env } from '@/lib/env'

export const api = ky.create({
  prefixUrl: env.BACKEND_API_URL,
})
