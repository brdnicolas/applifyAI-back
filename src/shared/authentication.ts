import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '@/models/users'

export const authByJWT = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'Token non fourni' })
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string)
    const userId = (decoded as any).id
    const user = await User.findByPk(userId)

    if (!user) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' })
    }

    req.user = user
    return next()
  } catch (error) {
    return res.status(403).json({ message: 'Token non valide' })
  }
}
