import { Request, Response } from 'express'
import z, { ZodError } from 'zod'

const getCountryInfoRequestSchema = z.object({ countryCode: z.string() })

const countryInfoSchema = z.object({
  commonName: z.string(),
  officialName: z.string(),
  countryCode: z.string(),
  region: z.string(),
  borders: z.array(
    z.object({
      commonName: z.string(),
      officialName: z.string(),
      countryCode: z.string(),
      region: z.string(),
      borders: z.null(),
    }),
  ),
})

const countryPopulationSchema = z.object({
  error: z.boolean(),
  msg: z.string(),
  data: z.object({
    country: z.string(),
    code: z.string(),
    iso3: z.string(),
    populationCounts: z.array(
      z.object({ year: z.number(), value: z.number() }),
    ),
  }),
})

const countryFlagSchema = z.object({
  error: z.boolean(),
  msg: z.string(),
  data: z.object({
    name: z.string(),
    flag: z.string(),
    iso2: z.string(),
    iso3: z.string(),
  }),
})

export class GetCountryInfoController {
  async execute(_request: Request, response: Response) {
    const { success, data, error } = getCountryInfoRequestSchema.safeParse(
      _request.params,
    )

    if (!success) {
      return response
        .status(400)
        .json({ error: error?.flatten().fieldErrors.countryCode })
    }

    const { countryCode } = data

    try {
      const countryInfoResponse = await fetch(
        `https://date.nager.at/api/v3/CountryInfo/${countryCode}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )

      if (countryInfoResponse.status === 404) {
        return response.status(404).json({ error: 'Country Info not found' })
      }

      const { borders } = countryInfoSchema.parse(
        await countryInfoResponse.json(),
      )

      const countryFlagResponse = await fetch(
        `https://countriesnow.space/api/v0.1/countries/flag/images`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },

          body: JSON.stringify({
            iso2: countryCode.slice(0, 2),
          }),

          method: 'POST',
        },
      )

      if (countryFlagResponse.status === 404) {
        return response.status(404).json({ error: 'Country Flag not found' })
      }

      const { flag, iso3, name } = countryFlagSchema.parse(
        await countryFlagResponse.json(),
      ).data

      const countryPopulationResponse = await fetch(
        `https://countriesnow.space/api/v0.1/countries/population`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },

          body: JSON.stringify({
            iso3,
          }),

          method: 'POST',
        },
      )

      if (countryPopulationResponse.status === 404) {
        return response
          .status(404)
          .json({ error: 'Country Population not found' })
      }

      const { populationCounts } = countryPopulationSchema.parse(
        await countryPopulationResponse.json(),
      ).data

      const data = {
        borders,
        populationCounts,
        flag,
        name,
      }

      return response.status(200).json(data)
    } catch (error) {
      if (error instanceof ZodError) {
        return response.status(400).json({ error: error.flatten() })
      }
      if (error instanceof Error) {
        return response.status(500).json({ error: error.message })
      }
    }
  }
}
