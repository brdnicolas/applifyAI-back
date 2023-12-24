import { Router } from 'express'
import { ApplicationsController } from '@/controllers/applications.controller'
import { authByJWT } from '@/shared/authentication'
import { applicationsValidators } from '@/validators/applications.validators'

export const applicationsRoutes = Router()

applicationsRoutes.get('/', authByJWT, ApplicationsController.getAllApplications)
applicationsRoutes.get('/:id', applicationsValidators.findById, authByJWT, ApplicationsController.getApplicationById)

applicationsRoutes.post('/', applicationsValidators.creation, authByJWT, ApplicationsController.createApplication)

applicationsRoutes.patch('/:id', applicationsValidators.update, authByJWT, ApplicationsController.updateApplication)
