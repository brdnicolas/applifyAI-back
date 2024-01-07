import { Application, ApplicationAttributes, MinimalApplicationAttributes } from '@/models/applications'
import { ApplicationStates } from '@/models/applicationStates'
import { scrapApplication, ScrappingResult } from '@/scripts/scrapping/main'
import { CV } from '@/models/cvs'
import { CoverLetter } from '@/models/coverLetters'

export class ApplicationsServices {
  public static async getAllApplicationsOfUser(userId: number) {
    return await Application.findAll({
      where: {
        userId
      },
      include: {
        model: ApplicationStates,
        attributes: ['name']
      },
      attributes: ['id', 'job', 'company', 'jobOfferUrl', 'applicationDate', 'companyImageUrl']
    })
  }

  public static async getApplicationById(id: number, userId: number) {
    return Application.findOne({
      where: {
        id,
        userId
      },
      include: [
        {
          model: ApplicationStates,
          attributes: ['name']
        },
        {
          model: CV,
          attributes: ['url', 'fileName', 'size']
        },
        {
          model: CoverLetter,
          attributes: ['url', 'fileName', 'size']
        }
      ]
    })
  }

  public static async createApplication(application: Partial<MinimalApplicationAttributes>) {
    return await Application.create(application)
  }

  public static async updateApplication(id: number, userId: number, application: Partial<ApplicationAttributes>) {
    const applicationToUpdate = await Application.findOne({
      where: {
        id,
        userId
      },
      include: [
        {
          model: ApplicationStates,
          attributes: ['name']
        },
        {
          model: CV,
          attributes: ['url', 'fileName', 'size']
        },
        {
          model: CoverLetter,
          attributes: ['url', 'fileName', 'size']
        }
      ]
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

  public static async getApplicationsNumber(userId: number) {
    return await Application.count({
      where: {
        userId
      }
    })
  }
}
