import { z } from 'zod'

import { api } from '@/lib/api-client'

const getAvailableCountriesSchema = z.array(
  z.object({ countryCode: z.string(), name: z.string() }),
)

type GetAvailableCountriesResponse = z.infer<typeof getAvailableCountriesSchema>

export async function getAvailableCountries() {
  const result = await api
    .get<GetAvailableCountriesResponse>('countries')
    .json<GetAvailableCountriesResponse>()

  return result
}
