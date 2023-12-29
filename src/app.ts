import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import * as process from 'process'
import { authRoutes } from '@/routes/auth.routes'
import { applicationsRoutes } from '@/routes/applications.routes'
import '@/models/associations'
import '@/models/sync'
import swaggerUi from 'swagger-ui-express'
import swaggerConfig from '@/config/swaggerConfig.json'

export const createApp = (): express.Application => {
  const app = express()

  // SWAGGER
  // @ts-ignore
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerConfig))

  // CONFIGURATION
  app.use(cors())
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: true
    })
  )
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

  // ROUTES
  app.use('/api', authRoutes)
  app.use('/api/applications', applicationsRoutes)

  app.use('/health', (_, res) => {
    res.send('OK')
  })

  return app
}
