import { Router } from 'express'

import { GetAllAvailableCountriesController } from './get-available-countries.controller'
import { GetCountryInfoController } from './get-county-info.controller'

const CountryRouter = Router({
  mergeParams: true,
})
const getAllAvailableCountriesController =
  new GetAllAvailableCountriesController()

const getCountryInfoController = new GetCountryInfoController()

CountryRouter.get('/', (req, res) => {
  getAllAvailableCountriesController.execute(req, res)
})

CountryRouter.get('/:countryCode', (req, res) => {
  getCountryInfoController.execute(req, res)
})

export default CountryRouter
