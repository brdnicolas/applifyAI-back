import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import * as process from 'process'
import { authRoutes } from '@/routes/auth.routes'
import { applicationsRoutes } from '@/routes/applications.routes'
import '@/models/associations'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger-output.json'

export const createApp = (): express.Application => {
  const app = express()

  if (process.env.NODE_ENV === 'development') {
    // Logger Middleware
    app.use(morgan('dev'))
  }

  // @ts-ignore
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

  app.use(cors())
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: true
    })
  )

  // API Routes
  app.use('/api', authRoutes)
  app.use('/api/applications', applicationsRoutes)

  app.use('/health', (_, res) => {
    res.send('OK')
  })

  return app
}
