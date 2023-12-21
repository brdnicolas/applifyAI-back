import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../config/db'
import bcrypt from 'bcrypt'

export type UserAttributes = {
  id: number
  email: string
  password: string
  firstName: string
  lastName: string
}
export const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name',
      allowNull: false
    }
  },
  {
    hooks: {
      beforeCreate: async (user: any) => {
        user.password = await bcrypt.hash(user.password, 10)
      }
    }
  }
)

export const UserSync = User.sync({ alter: true }).then(() => {
  console.log('User Model synced')
})
