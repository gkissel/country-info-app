'use server'

import { getAvailableCountries } from '@/http/country/get-available-countries'
import { getCountryInfo } from '@/http/country/get-country-info'

export async function getAvailableCountriesAction() {
  return await getAvailableCountries()
}

export async function getCountryInfoAction({
  countryCode,
}: {
  countryCode: string
}) {
  return await getCountryInfo({ countryCode })
}
