import { CV } from '@/models/cvs'
import { CoverLetter } from '@/models/coverLetters'

export class UploadServices {
  static uploadCV = async (fileName: string, url: string, size: number, userId: number, applicationId: number) => {
    return await CV.create({ fileName, url, size, userId, applicationId })
  }

  static uploadCoverLetter = async (
    fileName: string,
    url: string,
    size: number,
    userId: number,
    applicationId: number
  ) => {
    return CoverLetter.create({ fileName, url, size, userId, applicationId })
  }
}
