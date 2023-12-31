import { Request, Response } from 'express'
import { UsersService } from '@/services/users.services'
import { ApplicationsServices } from '@/services/applications.services'

export class UsersController {
  static async getMe(req: Request, res: Response) {
    const { user } = req

    const userFound = await UsersService.getUserById(user.id)
    const applicationsNumber = await ApplicationsServices.getApplicationsNumber(user.id)

    res.status(200).json({
      id: userFound.id,
      email: userFound.email,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      applicationsNumber
    })
  }
}
