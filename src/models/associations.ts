import { Application } from '@/models/applications'
import { User } from '@/models/users'

User.hasMany(Application, { foreignKey: 'userId' })
Application.belongsTo(User)
