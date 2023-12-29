import { DataTypes } from 'sequelize'
import { sequelize } from '@/config/db'
import { EApplicationState } from '@/shared/types'

export type ApplicationStateAttributes = {
  id: number
  name: string
}
export const ApplicationStates = sequelize.define('applicationStates', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isIn: [Object.keys(EApplicationState)]
    }
  }
})
