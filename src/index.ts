import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { authenticationRoutes } from './routes/authentication/authentication.routes'
import { testDbConnection } from './config/db'
dotenv.config()

console.error('process.env.POSTGRES_URL', process.env.POSTGRES_URL)

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

app.use('/', authenticationRoutes)

testDbConnection()

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
