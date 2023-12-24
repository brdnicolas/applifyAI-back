import { check } from 'express-validator'

export const applicationsValidators = {
  creation: [
    check('job').notEmpty().withMessage('A job is required'),
    check('company').notEmpty().withMessage('A company is required'),

    check('jobOfferUrl').optional().isURL().withMessage('Invalid jobOfferUrl'),

    check('applicationDate').optional().isDate().withMessage('Invalid applicationDate'),

    check('cv').optional().isString().withMessage('Wrong cv format'),
    check('coverLetter').optional().isString().withMessage('Wrong coverLetter format'),

    check('applicationStateId').optional().isInt().withMessage('Invalid applicationStateId')
  ],
  findById: [check('id').notEmpty().withMessage('An id is required'), check('id').isInt().withMessage('Invalid id')],
  update: [
    check('id').notEmpty().withMessage('An id is required'),
    check('id').isInt().withMessage('Invalid id'),
    check('jobOfferUrl').optional().isURL().withMessage('Invalid jobOfferUrl')
  ]
}
