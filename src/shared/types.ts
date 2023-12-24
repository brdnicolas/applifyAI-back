export type JWTTokenPayload = {
  id: number
  email: string
  firstname: string
  lastname: string
}

export enum EApplicationState {
  applied = 1,
  relaunched = 2,
  interviewObtained = 3,
  archived = 4
}
