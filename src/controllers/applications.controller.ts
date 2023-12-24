import { Request, Response } from 'express'
import { ApplicationsServices } from '@/services/applications.services'

export class ApplicationsController {
  public static async getAllApplications(_: Request, res: Response) {
    try {
      const applications = await ApplicationsServices.getAllApplications()
      return res.status(200).json(applications)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  public static async getApplicationById(req: Request, res: Response) {
    const { id } = req.params

    try {
      const application = await ApplicationsServices.getApplicationById(+id)

      if (application) {
        return res.status(200).json(application)
      }

      return res.status(404).json({ message: 'Application not found' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  public static async createApplication(req: Request, res: Response) {
    const user = req.user

    const { id, job, company, jobOfferUrl, applicationDate, cv, coverLetter } = req.body

    // if (!id || !job || !company || !jobOfferUrl || !applicationDate || !cv || !coverLetter) {
    //   return res.status(400).json({ message: 'Missing fields' })
    // }

    try {
      const application = await ApplicationsServices.createApplication({
        id,
        job,
        company,
        jobOfferUrl,
        applicationDate,
        cv,
        coverLetter,
        userId: user.id
      })
      return res.status(201).json(application)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
