import { DataTypes } from 'sequelize'
import { sequelize } from '@/config/db'

export type CoverLetterAttributes = {
  id: number
  applicationId: number
  fileName: string
  url: string
  userId: number
  size: number
}

export const CoverLetter = sequelize.define('coverLetter', {
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
