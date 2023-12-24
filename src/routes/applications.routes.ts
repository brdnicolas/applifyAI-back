import { Router } from 'express'
import { ApplicationsController } from '@/controllers/applications.controller'
import { authByJWT } from '@/shared/authentication'

export const applicationsRoutes = Router()

applicationsRoutes.get('/', authByJWT, ApplicationsController.getAllApplications)
applicationsRoutes.get('/:id', authByJWT, ApplicationsController.getApplicationById)

applicationsRoutes.post('/', authByJWT, ApplicationsController.createApplication)
