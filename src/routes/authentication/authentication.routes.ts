import { Router } from 'express'
import { loginController, registerController } from './authentication.controller'

export const authenticationRoutes = Router()

authenticationRoutes.post('/register', registerController)
authenticationRoutes.post('/login', loginController)
