import { Event, EventAttributes } from '@/models/events'

export class EventsServices {
  static createEvent = async (event: Partial<EventAttributes>) => {
    return await Event.create(event)
  }

  static getAllEvents = async (userId: number) => {
    return await Event.findAll({ where: { userId } })
  }

  static getEventById = async (id: number, userId: number) => {
    return await Event.findOne({ where: { id, userId } })
  }

  static getAllEventsByApplicationId = async (applicationId: number, userId: number) => {
    return await Event.findAll({ where: { applicationId, userId } })
  }

  static deleteEvent = async (id: string, userId: number) => {
    return await Event.destroy({ where: { id, userId } })
  }
}
