import { Router } from 'express'
import { authByJWT } from '@/shared/authentication'
import { applicationFiles } from '@/config/upload'
import { uploadValidators } from '@/validators/upload.validators'
import { UploadController } from '@/controllers/upload.controller'

export const uploadRoutes = Router()

uploadRoutes.patch(
  '/cv',
  // @ts-ignore
  applicationFiles,
  uploadValidators.cv,
  authByJWT,
  UploadController.uploadCV
)

uploadRoutes.patch(
  '/coverLetter',
  // @ts-ignore
  applicationFiles,
  uploadValidators.coverLetter,
  authByJWT,
  UploadController.uploadCoverLetter
)
