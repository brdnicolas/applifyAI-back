import { Request, Response } from 'express'
import { ApplicationsServices } from '@/services/applications.services'
import { UploadServices } from '@/services/upload.services'
import { validationResult } from 'express-validator'

export class UploadController {
  public static async uploadCV(req: Request, res: Response) {
    const uploadedFiles = req.files
    const user = req.user
    const { applicationId } = req.body
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array())
    }

    if (uploadedFiles && 'cv' in uploadedFiles) {
      const cvUrl = `/uploads/cvs/${uploadedFiles.cv[0].filename}`
      const cv = await UploadServices.uploadCV(
        uploadedFiles.cv[0].originalname,
        cvUrl,
        uploadedFiles.cv[0].size,
        req.user.id,
        applicationId
      )

      try {
        const application = await ApplicationsServices.updateApplication(applicationId, user.id, {
          // @ts-ignore
          cvId: cv.id
        })

        if (application) {
          return res.status(200).json(cv)
        }

        return res.status(404).json({ message: 'Application not found' })
      } catch (error) {
        return res.status(500).json({ message: error })
      }
    }

    return res.status(400).json({ message: 'No file provided' })
  }

  public static async uploadCoverLetter(req: Request, res: Response) {
    const uploadedFiles = req.files
    const user = req.user
    const { applicationId } = req.body
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array())
    }

    if (uploadedFiles && 'coverLetter' in uploadedFiles) {
      const coverLetterUrl = `/uploads/coverLetters/${uploadedFiles.coverLetter[0].filename}`
      const coverLetter = await UploadServices.uploadCoverLetter(
        uploadedFiles.coverLetter[0].originalname,
        coverLetterUrl,
        uploadedFiles.coverLetter[0].size,
        req.user.id,
        applicationId
      )

      try {
        const application = await ApplicationsServices.updateApplication(applicationId, user.id, {
          // @ts-ignore
          coverLetterId: coverLetter.id
        })

        if (application) {
          return res.status(200).json(coverLetter)
        }

        return res.status(404).json({ message: 'Application not found' })
      } catch (error) {
        return res.status(500).json({ message: error })
      }
    }

    return res.status(400).json({ message: 'No file provided' })
  }
}
