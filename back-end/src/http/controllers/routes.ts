import { Router } from 'express'

import CountryRouter from './country/country.routes'

const routes = Router({
  mergeParams: true,
})

routes.use('/countries', CountryRouter)

export default routes
