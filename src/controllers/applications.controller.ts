import { Request, Response } from 'express'
import { ApplicationsServices } from '@/services/applications.services'
import { validationResult } from 'express-validator'
import { EApplicationState } from '@/shared/types'

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
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array())
    }

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
    const errors = validationResult(req)
    const { id, job, company, jobOfferUrl, applicationDate, cv, coverLetter, applicationStateId } = req.body

    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array())
    }

    try {
      const application = await ApplicationsServices.createApplication({
        id,
        job,
        company,
        jobOfferUrl,
        applicationDate,
        cv,
        coverLetter,
        userId: user.id,
        applicationStateId: applicationStateId || EApplicationState.applied
      })
      return res.status(201).json(application)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  public static async updateApplication(req: Request, res: Response) {
    const { id } = req.params
    const errors = validationResult(req)
    const { job, company, jobOfferUrl, applicationDate, cv, coverLetter, applicationStateId } = req.body

    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array())
    }

    try {
      const application = await ApplicationsServices.updateApplication(+id, {
        job,
        company,
        jobOfferUrl,
        applicationDate,
        cv,
        coverLetter,
        applicationStateId: applicationStateId || EApplicationState.applied
      })

      if (application) {
        return res.status(200).json(application)
      }

      return res.status(404).json({ message: 'Application not found' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
