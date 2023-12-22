import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'postgres://default:uM0VEZ9mOBno@ep-dry-frog-94221771-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb' +
    '?sslmode=require'
)

export const testDbConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
