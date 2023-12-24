import { DataTypes } from 'sequelize'
import { sequelize } from '@/config/db'

export type ApplicationAttributes = {
  id: number
  job: string
  company: string
  jobOfferUrl: string
  applicationDate: Date
  cv: Buffer
  coverLetter: Buffer
  userId: number
}
export const Application = sequelize.define('application', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  job: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jobOfferUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  applicationDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  cv: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  },
  coverLetter: {
    type: DataTypes.BLOB('long'),
    allowNull: true
  }
})

export const ApplicationSync = Application.sync({ alter: true }).then(() => {
  console.log('Application Model synced')
})
