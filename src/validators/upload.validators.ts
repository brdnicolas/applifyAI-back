import { check } from 'express-validator'

export const uploadValidators = {
  cv: [check('applicationId').notEmpty().withMessage('An application id is required')],
  coverLetter: [check('applicationId').notEmpty().withMessage('An application id is required')]
}
