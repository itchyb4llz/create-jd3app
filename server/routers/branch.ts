import { create, read, readAll, remove, update } from '../procedures/branch'
import { t } from '../trpc'

export const branchRouter = t.router({
  readAll, // GET all active branches
  create, // POST create a branch (superadmin)
  read, // GET all data of branch table (superadmin)
  update, // PUT update branch (superadmin)
  remove // DELETE permanent delete (superadmin)
})
