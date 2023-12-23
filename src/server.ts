import { Server, createServer } from 'http'
import e from 'express'
import dotenv from 'dotenv'
dotenv.config()

export const startServer = (app: e.Application): Server => {
  const httpServer = createServer(app)

  return httpServer.listen({ port: process.env.PORT || 4000 }, (): void => {
    process.stdout.write(`⚙️ Application Environment: ${process.env.NODE_ENV}\n`)
    process.stdout.write(`⏱ Started on: ${Date.now()}\n`)
    process.stdout.write(`🚀 TEN-STACK-API Server ready at http://localhost:${process.env.PORT || 4000}\n`)
  })
}
