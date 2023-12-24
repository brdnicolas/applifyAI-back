import { Application, ApplicationAttributes } from '@/models/applications'
import { ApplicationStates } from '@/models/applicationStates'

export class ApplicationsServices {
  public static async getAllApplicationsOfUser(userId: number) {
    return await Application.findAll({
      where: {
        userId
      },
      include: {
        model: ApplicationStates,
        attributes: ['name']
      }
    })
  }

  public static async getApplicationById(id: number) {
    return await Application.findOne({
      where: {
        id
      },
      include: {
        model: ApplicationStates,
        attributes: ['name']
      }
    })
  }

  public static async createApplication(application: ApplicationAttributes) {
    return await Application.create({
      ...application
    })
  }

  public static async updateApplication(id: number, application: Omit<ApplicationAttributes, 'userId' | 'id'>) {
    const applicationToUpdate = await Application.findOne({
      where: {
        id
      },
      include: {
        model: ApplicationStates,
        attributes: ['name']
      }
    })

    if (applicationToUpdate) {
      return await applicationToUpdate.update(application)
    }
    return null
  }
}
