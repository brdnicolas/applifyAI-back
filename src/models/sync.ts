import { ApplicationStates } from '@/models/applicationStates'
import { Application } from '@/models/applications'
import { User } from '@/models/users'
import { CV } from '@/models/cvs'
import { CoverLetter } from '@/models/coverLetters'
import { ContractType } from '@/models/contractTypes'
import { Event } from '@/models/events'

export const ApplicationStatesSync = ApplicationStates.sync({ force: true }).then(async () => {
  console.log('ApplicationStates Model synced')

  try {
    await ApplicationStates.bulkCreate([
      { name: 'applied' },
      { name: 'relaunched' },
      { name: 'interviewObtained' },
      { name: 'archived' }
    ])
    console.log('Default application states added')
  } catch (error) {
    console.error('[ERROR] - Adding default application states :', error)
  }
})

export const ApplicationSync = Application.sync({ alter: true }).then(() => {
  console.log('Application Model synced')
})

export const cvSync = CV.sync({ alter: true }).then(() => {
  console.log('CV Model synced')
})

export const coverLetterSync = CoverLetter.sync({ alter: true }).then(() => {
  console.log('CoverLetter Model synced')
})

export const contractTypeSync = ContractType.sync({ alter: true }).then(async () => {
  console.log('ContractType Model synced')

  try {
    await ContractType.bulkCreate([
      { name: 'cdi' },
      { name: 'cdd' },
      { name: 'workStudy' },
      { name: 'internship' },
      { name: 'freelance' },
      { name: 'other' }
    ])
    console.log('Default contract types added')
  } catch (error) {
    console.error('[ERROR] - Adding default contract types :', error)
  }
})

export const eventsSync = Event.sync({ alter: true }).then(() => {
  console.log('Event Model synced')
})

export const UserSync = User.sync({ alter: true }).then(() => {
  console.log('User Model synced')
})
