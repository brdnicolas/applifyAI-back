import { DataTypes } from 'sequelize'
import { sequelize } from '@/config/db'

export type EventAttributes = {
  id: number
  name: string
  applicationId: number
  start: Date
  end: Date
  userId: number
}

export const Event = sequelize.define('event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  start: {
    type: DataTypes.DATE
  },
  end: {
    type: DataTypes.DATE
  },
  userId: {
    type: DataTypes.INTEGER
  },
  applicationId: {
    type: DataTypes.INTEGER
  }
})
