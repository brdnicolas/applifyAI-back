import { Application, ApplicationAttributes } from '@/models/applications'
import { ApplicationStates } from '@/models/applicationStates'
import { scrapApplication, ScrappingResult } from '@/scripts/scrapping/main'

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
    return await Application.create(application)
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

  public static async getApplicationDetailsFromUrl(jobOfferUrl: string): Promise<ScrappingResult> {
    return scrapApplication(jobOfferUrl)
  }

  public static async deleteApplication(id: number, userId: number) {
    const application = await Application.findOne({
      where: {
        id,
        userId
      }
    })

    if (application) {
      return await application.destroy()
    }

    throw new Error('Application not found')
  }
}
