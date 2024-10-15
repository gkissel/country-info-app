import { z } from 'zod'

import { api } from '@/lib/api-client'

const getCountryInfoSchema = z.object({
  borders: z.array(
    z.object({
      commonName: z.string(),
      officialName: z.string(),
      countryCode: z.string(),
      region: z.string(),
      borders: z.null(),
    }),
  ),
  populationCounts: z.array(z.object({ year: z.number(), value: z.number() })),
  flag: z.string(),
  name: z.string(),
})

type GetCountryInfoResponse = z.infer<typeof getCountryInfoSchema>

export async function getCountryInfo({ countryCode }: { countryCode: string }) {
  const result = await api
    .get<GetCountryInfoResponse>(`api/v1/countries/${countryCode}`)
    .json<GetCountryInfoResponse>()

  return result
}
