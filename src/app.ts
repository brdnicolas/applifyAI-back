import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import * as process from 'process'
import { authRoutes } from '@/routes/auth.routes'

export const createApp = (): express.Application => {
  const app = express()

  if (process.env.NODE_ENV === 'development') {
    // Logger Middleware
    app.use(morgan('dev'))
  }

  app.use(cors())
  app.use(express.json())
  app.use(
    express.urlencoded({
      extended: true
    })
  )

  // API Routes
  app.use('/api', authRoutes)

  app.use('/health', (_, res) => {
    res.send('OK')
  })

  return app
}
