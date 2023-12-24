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

export const ApplicationStatesSync = ApplicationStates.sync({ force: true }).then(async () => {
  console.log('ApplicationStates Model synced')

  try {
    await ApplicationStates.bulkCreate([
      { name: 'applied' },
      { name: 'relaunched' },
      { name: 'interviewObtained' },
      { name: 'archived' }
    ])
    console.log('Default application states added')
  } catch (error) {
    console.error('[ERROR] - Adding default application states :', error)
  }
})
