import { t } from '../trpc'
import { authRouter } from './auth'
import { branchRouter } from './branch'
import { userRouter } from './user'

export const appRouter = t.router({
  auth: authRouter,
  branch: branchRouter,
  user: userRouter
})

export type AppRouter = typeof appRouter
