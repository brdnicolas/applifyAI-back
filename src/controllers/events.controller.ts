import { Request, Response } from 'express'
import { EventsServices } from '@/services/events.services'
import { ApplicationsServices } from '@/services/applications.services'

export class EventsController {
  public static async createEvent(req: Request, res: Response) {
    const user = req.user
    const { name, start, end, applicationId } = req.body

    try {
      const applicationFound = await ApplicationsServices.getApplicationById(applicationId, user.id)

      if (!applicationFound) {
        return res.status(404).json({ message: 'Application not found' })
      }

      const event = await EventsServices.createEvent({
        name,
        start,
        end,
        applicationId,
        userId: user.id
      })

      return res.status(200).json(event)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  public static async getAllEvents(req: Request, res: Response) {
    const user = req.user

    try {
      const events = await EventsServices.getAllEvents(user.id)

      return res.status(200).json(events)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  public static async getAllEventsByApplicationId(req: Request, res: Response) {
    const user = req.user
    const { id } = req.params

    try {
      const events = await EventsServices.getAllEventsByApplicationId(+id, user.id)

      return res.status(200).json(events)
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }

  public static async deleteEvent(req: Request, res: Response) {
    const user = req.user
    const { id } = req.params

    try {
      const eventFound = await EventsServices.getEventById(+id, user.id)

      if (!eventFound) {
        return res.status(404).json({ message: 'Event not found' })
      }

      await EventsServices.deleteEvent(id, user.id)

      return res.status(200).json({ message: 'Event deleted' })
    } catch (error) {
      return res.status(500).json({ message: error })
    }
  }
}
