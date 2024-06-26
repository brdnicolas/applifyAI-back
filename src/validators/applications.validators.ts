import { check } from 'express-validator'

export const applicationsValidators = {
  creation: [
    check('job').notEmpty().withMessage('A job is required'),
    check('company').notEmpty().withMessage('A company is required'),

    check('jobOfferUrl').optional().isURL().withMessage('Invalid jobOfferUrl'),

    check('applicationDate').optional().isDate().withMessage('Invalid applicationDate'),

    check('applicationStateId').optional().isInt().withMessage('Invalid applicationStateId')
  ],
  findById: [check('id').notEmpty().withMessage('An id is required'), check('id').isInt().withMessage('Invalid id')],
  update: [
    check('id').notEmpty().withMessage('An id is required'),
    check('id').isInt().withMessage('Invalid id'),
    check('lat').optional().isFloat().withMessage('Invalid latitude'),
    check('lng').optional().isFloat().withMessage('Invalid longitude'),
    check('locationLabel').optional().isString().withMessage('Invalid locationLabel'),
    check('jobOfferUrl').optional().isURL().withMessage('Invalid jobOfferUrl')
  ],
  delete: [check('id').notEmpty().withMessage('An id is required'), check('id').isInt().withMessage('Invalid id')],
  scrap: [check('jobOfferUrl').notEmpty().isURL().withMessage('A jobOfferUrl is required')]
}
