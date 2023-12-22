import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(undefined + '?sslmode=require')

export const testDbConnection = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
