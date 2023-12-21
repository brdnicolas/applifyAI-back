import { UserAttributes } from '../../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const generateJWTToken = (payload: Omit<UserAttributes, 'password'>) => {
  console.log(process.env.SECRET_KEY, 'SECRET_KEY')
  return jwt.sign(payload, process.env.SECRET_KEY || '', { expiresIn: '1h' })
}

export const checkPasswordValidity = async (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword)
}
