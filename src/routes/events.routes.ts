import { Router } from 'express'
import { EventsController } from '@/controllers/events.controller'
import { authByJWT } from '@/shared/authentication'

export const eventsRoutes = Router()

eventsRoutes.post('/', authByJWT, EventsController.createEvent)
eventsRoutes.get('/', authByJWT, EventsController.getAllEvents)
eventsRoutes.get('/application/:id', authByJWT, EventsController.getAllEventsByApplicationId)
eventsRoutes.delete('/:id', authByJWT, EventsController.deleteEvent)
