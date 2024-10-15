import { Router } from 'express'

import { GetAllAvailableCountriesController } from './get-available-countries.controller'

const CountryRouter = Router({
  mergeParams: true,
})
const getAllAvailableCountriesController =
  new GetAllAvailableCountriesController()

CountryRouter.get('/', (req, res) => {
  getAllAvailableCountriesController.execute(req, res)
})

export default CountryRouter
