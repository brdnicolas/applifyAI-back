import { User, UserAttributes } from '../../models/user'

export const createUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<UserAttributes> => {
  return User.create({ email, password, firstName, lastName })
}

export const getUserByEmail = async (email: string) => {
  return User.findOne({ where: { email } })
}
