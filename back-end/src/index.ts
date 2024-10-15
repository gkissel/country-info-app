import * as bodyParser from 'body-parser'
import express from 'express'

import { env } from './app/env'
export const app = express()

app.use(bodyParser.json())

app.listen(env.PORT)

// app.use('/api/v1/', routes)

// app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

console.log(`Express server started on port ${env.PORT}`)
