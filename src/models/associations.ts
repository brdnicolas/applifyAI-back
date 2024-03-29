import { Application } from '@/models/applications'
import { User } from '@/models/users'
import { ApplicationStates } from '@/models/applicationStates'
import { CV } from '@/models/cvs'
import { CoverLetter } from '@/models/coverLetters'
import { ContractType } from '@/models/contractTypes'
import { Event } from '@/models/events'

User.hasMany(Application, { foreignKey: 'userId' })
User.hasMany(CV, { foreignKey: 'userId' })
User.hasMany(CoverLetter, { foreignKey: 'userId' })
User.hasMany(Event, { foreignKey: 'userId' })
Application.belongsTo(User)
CV.belongsTo(User)
CoverLetter.belongsTo(User)
Event.belongsTo(User)

ApplicationStates.hasMany(Application, { foreignKey: 'applicationStateId' })
Application.belongsTo(ApplicationStates)

CV.hasOne(Application, { foreignKey: 'cvId' })
Application.belongsTo(CV)

CoverLetter.hasOne(Application, { foreignKey: 'coverLetterId' })
Application.belongsTo(CoverLetter)

ContractType.hasMany(Application, { foreignKey: 'contractTypeId' })
Application.belongsTo(ContractType)

Application.hasMany(Event, { foreignKey: 'applicationId' })
Event.belongsTo(Application)
