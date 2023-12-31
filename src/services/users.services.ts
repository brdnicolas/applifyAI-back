import { User, UserAttributes } from '@/models/users'

export class UsersService {
  static createUser = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<UserAttributes> => {
    return User.create({ email, password, firstName, lastName })
  }

  static getUserByEmail = async (email: string) => {
    return User.findOne({ where: { email } })
  }

  static getUserById = async (id: number) => {
    return User.findByPk(id)
  }
}
