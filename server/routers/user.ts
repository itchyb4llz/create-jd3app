import { t } from '../trpc'
import { allUsers, logs, stats, update, remove, reset } from '../procedures/user'

export const userRouter = t.router({
  // USER
  stats, // GET user stats (superadmin)
  allUsers, // GET all users (superadmin)
  update, // PUT update user (superadmin)
  remove, // DELETE permanent delete (superadmin)
  reset, // PUT update user's password (superadmin)

  // USER LOGS
  logs // GET user logs (superadmin)
})
