import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserAttributes } from '@/models/users'

export class AuthServices {
  static generateJWTToken = (payload: Omit<UserAttributes, 'password'>) => {
    return jwt.sign(payload, process.env.SECRET_KEY || '', { expiresIn: '1h' })
  }

  static checkPasswordValidity = async (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword)
  }
}
