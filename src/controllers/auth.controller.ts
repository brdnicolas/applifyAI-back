import { Request, Response } from 'express'
import { AuthServices } from '@/services/auth.services'
import { UsersService } from '@/services/users.services'

export class AuthController {
  static register = async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body

    if (!email || !password || !firstName || !lastName) {
      return res.status(400).json({ message: 'Missing fields' })
    }

    try {
      const isUserExist = await UsersService.getUserByEmail(email)

      if (isUserExist) {
        return res.status(409).json({ message: 'User already exists' })
      }

      const user = await UsersService.createUser(email, password, firstName, lastName)
      return res.status(201).json(user)
    } catch (error) {
      console.log(error, 'error')
      return res.status(400).json({ message: error })
    }
  }

  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    try {
      const user = await UsersService.getUserByEmail(email)

      if (!user) {
        return res.status(404).json({ message: 'Invalid credentials' })
      }

      const isPasswordValid = await AuthServices.checkPasswordValidity(password, user.password)

      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid password' })
      }

      const token = AuthServices.generateJWTToken({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      })

      return res.status(200).json({ token })
    } catch (error) {
      return res.status(400).json({ message: error })
    }
  }
}
