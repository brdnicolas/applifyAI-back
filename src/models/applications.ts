import { DataTypes } from 'sequelize'
import { sequelize } from '@/config/db'

export type ApplicationAttributes = {
  id: number
  job: string
  company: string
  jobOfferUrl: string
  applicationDate: Date
  companyImageUrl: string
  coverLetterUrl: string
  userId: number
  cvId: number
  coverLetterId: number
  applicationStateId: number
  lat: number
  lng: number
  city: string
  country: string
  postalCode: string
  street: string
  contractTypeId: number
}

export type MinimalApplicationAttributes = {
  id: number
  job: string
  company: string
  userId: number
  jobOfferUrl: string
  applicationDate: Date
  companyImageUrl: string
  applicationStateId: number
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
  companyImageUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lat: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  lng: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  street: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cvId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  coverLetterId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER
  },
  applicationStateId: {
    type: DataTypes.INTEGER
  },
  contractTypeId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
})
