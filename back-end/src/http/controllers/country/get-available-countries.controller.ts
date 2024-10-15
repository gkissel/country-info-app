import { Request, Response } from 'express'
import z from 'zod'

const getAllCountriesSchema = z.array(
  z.object({ countryCode: z.string(), name: z.string() }),
)

export class GetAllAvailableCountriesController {
  async execute(_request: Request, response: Response) {
    try {
      const countriesResponse = await fetch(
        'https://date.nager.at/api/v3/AvailableCountries',
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )

      const countries = getAllCountriesSchema.parse(
        await countriesResponse.json(),
      )

      return response.status(200).json(countries)
    } catch (error) {}
  }
}
