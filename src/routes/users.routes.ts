import { Router } from 'express'
import { UsersController } from '@/controllers/users.controller'
import { authByJWT } from '@/shared/authentication'

export const usersRoutes = Router()

usersRoutes.get('/me', authByJWT, UsersController.getMe)
