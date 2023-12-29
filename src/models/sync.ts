import { ApplicationStates } from '@/models/applicationStates'
import { Application } from '@/models/applications'
import { User } from '@/models/users'

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

export const UserSync = User.sync({ alter: true }).then(() => {
  console.log('User Model synced')
})
