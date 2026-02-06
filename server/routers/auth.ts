import { t } from '../trpc'
import { login, logout, signup } from '../procedures/auth'

export const authRouter = t.router({
  signup, // POST register user
  login, // POST login user
  logout // POST logout user
})
