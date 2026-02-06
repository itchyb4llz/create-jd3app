import { BranchTypes } from './branch'

export interface UserTypes {
  user_id: string
  name: string
  username: string
  password?: string
  verified: number
  role: string | null
  created_at: string
  updated_at: string

  branch: BranchTypes
}

export interface UserLogTypes {
  userlogs_id: string
  login_at: string
  logout_at: string

  user: {
    user_id: string
    name: string
    username: string
    role: string | null
  }
}
