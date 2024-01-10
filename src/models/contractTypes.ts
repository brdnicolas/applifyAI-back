import { DataTypes } from 'sequelize'
import { sequelize } from '@/config/db'

export type ContractTypeAttributes = {
  id: number
  name: string
  applicationId: number
}

export const ContractType = sequelize.define('contractType', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  applicationId: {
    type: DataTypes.INTEGER
  }
})
