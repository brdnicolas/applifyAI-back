import { Request, Response } from 'express'
import { checkPasswordValidity, generateJWTToken } from './authentication.service'
import { createUser, getUserByEmail } from '../users/users.service'

export const registerController = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  try {
    const isUserExist = await getUserByEmail(email)

    if (isUserExist) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const user = await createUser(email, password, firstName, lastName)
    return res.status(201).json(user)
  } catch (error) {
    console.log(error, 'error')
    return res.status(400).json({ message: error })
  }
}

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await getUserByEmail(email)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const isPasswordValid = await checkPasswordValidity(password, user.password)

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' })
    }

    const token = generateJWTToken({
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
