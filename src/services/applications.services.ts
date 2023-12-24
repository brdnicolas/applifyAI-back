import { Application, ApplicationAttributes } from '@/models/applications'

export class ApplicationsServices {
  public static async getAllApplications() {
    return await Application.findAll()
  }

  public static async getApplicationById(id: number) {
    return await Application.findOne({
      where: {
        id
      }
    })
  }

  public static async createApplication(application: ApplicationAttributes) {
    return await Application.create(application)
  }
}
