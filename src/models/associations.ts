import { Application } from '@/models/applications'
import { User } from '@/models/users'
import { ApplicationStates } from '@/models/applicationStates'

User.hasMany(Application, { foreignKey: 'userId' })
Application.belongsTo(User)

ApplicationStates.hasMany(Application, { foreignKey: 'applicationStateId' })
Application.belongsTo(ApplicationStates)
