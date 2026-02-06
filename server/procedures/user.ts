import { count, desc, eq, sql } from 'drizzle-orm'
import { db } from '../drizzle'
import { t } from '../trpc'
import { branches, users, userLogs } from '../drizzle/schema'
import { UserLogTypes, UserTypes } from '@/types/user'
import { userForm, userResetForm } from '@/validate/user'
import z from 'zod'
import bcrypt from 'bcryptjs'

// ----------------------- USER -----------------------
export const stats = t.procedure.query(async () => {
  const [{ totalUsers }] = await db.select({ totalUsers: count() }).from(users)
  const verifiedStats = await db
    .select({
      verified: users.verified,
      count: count()
    })
    .from(users)
    .groupBy(users.verified)
  const roleStats = await db
    .select({
      role: users.role,
      count: count()
    })
    .from(users)
    .groupBy(users.role)
  const branchStats = await db
    .select({
      branchId: users.branch_id,
      count: count()
    })
    .from(users)
    .groupBy(users.branch_id)
  const [{ newUsersThisMonth }] = await db
    .select({ newUsersThisMonth: count() })
    .from(users)
    .where(sql`date_trunc('month', ${users.created_at}) = date_trunc('month', now())`)

  return {
    totalUsers,
    verifiedStats,
    roleStats,
    branchStats,
    newUsersThisMonth
  }
})

export const allUsers = t.procedure.query(async (): Promise<UserTypes[]> => {
  const results = await db
    .select({
      user_id: users.user_id,
      name: users.name,
      username: users.username,
      verified: users.verified,
      role: users.role,
      created_at: users.created_at,
      updated_at: users.updated_at,

      branch: {
        branch_id: branches.branch_id,
        name: branches.name,
        address: branches.address,
        email: branches.email,
        contact: branches.contact,
        status: branches.status,
        created_at: branches.created_at,
        updated_at: branches.updated_at
      }
    })
    .from(users)
    .innerJoin(branches, eq(users.branch_id, branches.branch_id))
    .orderBy(desc(users.updated_at))

  return results.map(result => ({
    ...result,
    verified: result.verified ?? 0,
    role: result.role ?? 'user',
    created_at: result.created_at.toISOString(),
    updated_at: result.updated_at.toISOString(),
    branch: {
      ...result.branch,
      status: result.branch.status ?? 0,
      created_at: result.branch.created_at.toISOString(),
      updated_at: result.branch.updated_at.toISOString()
    }
  }))
})

export const update = t.procedure.input(userForm).mutation(async ({ input }) => {
  const { user_id, name, username, verified, role, branch_id } = input

  const update = await db
    .update(users)
    .set({
      name,
      username,
      verified,
      role,
      branch_id,
      updated_at: new Date()
    })
    .where(eq(users.user_id, user_id!))
    .returning()

  if (update.length === 0) {
    throw new Error('User not found!')
  }

  return {
    success: true,
    user: update[0]
  }
})

export const remove = t.procedure.input(z.object({ id: z.string() })).mutation(async ({ input }) => {
  const deleteID = await db.delete(users).where(eq(users.user_id, input.id)).returning()

  if (deleteID.length === 0) {
    throw new Error('User not found!')
  }

  return deleteID[0]
})

export const reset = t.procedure.input(userResetForm).mutation(async ({ input }) => {
  const { user_id, password } = input

  const hashedPassword = await bcrypt.hash(password, 10)

  await db.update(users).set({ password: hashedPassword, updated_at: new Date() }).where(eq(users.user_id, user_id!))

  return {
    success: true,
    message: 'Password has been reset successfully'
  }
})

// ----------------------- USER LOGS -----------------------
export const logs = t.procedure.query(async (): Promise<UserLogTypes[]> => {
  const results = await db
    .select({
      userlogs_id: userLogs.userlogs_id,
      login_at: userLogs.login_at,
      logout_at: userLogs.logout_at,

      user: {
        user_id: users.user_id,
        name: users.name,
        username: users.username,
        role: users.role
      }
    })
    .from(userLogs)
    .innerJoin(users, eq(userLogs.user_id, users.user_id))
    .orderBy(desc(userLogs.logout_at))

  return results.map(result => ({
    ...result,
    login_at: result.login_at.toISOString(),
    logout_at: result.logout_at.toISOString(),
    user: {
      ...result.user
    }
  }))
})
