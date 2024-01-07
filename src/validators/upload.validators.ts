import { check } from 'express-validator'

export const uploadValidators = {
  cv: [
    check('applicationId').notEmpty().withMessage('An application id is required'),
    check('cv').notEmpty().withMessage('A cv file is required')
  ],
  coverLetter: [
    check('applicationId').notEmpty().withMessage('An application id is required'),
    check('coverLetter').notEmpty().withMessage('A cover letter file is required')
  ]
}
