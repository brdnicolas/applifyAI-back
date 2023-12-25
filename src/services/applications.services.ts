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

  public static async createApplication(application: Partial<ApplicationAttributes>) {
    const dataToUpdate = { ...application }
    delete dataToUpdate.id
    delete dataToUpdate.userId

    return await Application.create(dataToUpdate)
  }

  public static async updateApplication(id: number, application: Partial<ApplicationAttributes>) {
    const applicationToUpdate = await Application.findOne({
      where: {
        id
      },
      include: {
        model: ApplicationStates,
        attributes: ['name']
      }
    })

    const dataToUpdate = { ...application }
    delete dataToUpdate.id
    delete dataToUpdate.userId

    if (applicationToUpdate) {
      return await applicationToUpdate.update(dataToUpdate)
    }
    return null
  }
}
