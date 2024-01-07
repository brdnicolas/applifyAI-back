import { DataTypes } from 'sequelize'
import { sequelize } from '@/config/db'

export type CVAttributes = {
  id: number
  applicationId: number
  fileName: string
  url: string
  userId: number
  size: number
}

export const CV = sequelize.define('cv', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER
  },
  applicationId: {
    type: DataTypes.INTEGER
  },
  fileName: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING
  },
  size: {
    type: DataTypes.INTEGER
  }
})
