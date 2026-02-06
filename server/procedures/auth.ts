import { loginForm, logoutForm, signupForm } from '@/validate/user'
import bcrypt from 'bcryptjs'
import { desc, eq } from 'drizzle-orm'
import { db } from '../drizzle'
import { users, userLogs } from '../drizzle/schema'
import { t } from '../trpc'
import { createSession } from '@/session'

export const signup = t.procedure.input(signupForm).mutation(async ({ input }) => {
  const { name, username, password, branch_id } = input

  const exists = await db.select().from(users).where(eq(users.username, username)).limit(1)

  if (exists.length > 0) {
    throw new Error('Username already taken')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const [newUser] = await db
    .insert(users)
    .values({
      name,
      username,
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
      branch_id
    })
    .returning()

  return {
    success: true,
    user: {
      id: newUser.user_id,
      name: newUser.name,
      username: newUser.username
    }
  }
})

export const login = t.procedure.input(loginForm).mutation(async ({ input }) => {
  const { username, password } = input

  const [cred] = await db.select().from(users).where(eq(users.username, username)).limit(1)

  if (!cred) {
    throw new Error('No username found')
  }

  const isValid = await bcrypt.compare(password, cred.password ?? '')

  if (!isValid) {
    throw new Error('Invalid password')
  }

  if (cred.verified === 0) {
    throw new Error('Your account is not verified')
  }

  await createSession(
    cred.user_id,
    cred.name,
    cred.username,
    cred.branch_id,
    cred.role as 'superadmin' | 'admin' | 'user'
  )

  await db.insert(userLogs).values({ user_id: cred.user_id, login_at: new Date(), logout_at: new Date() })

  return {
    success: true,
    user: {
      user_id: cred.user_id,
      name: cred.name,
      username: cred.username,
      branch_id: cred.branch_id,
      role: cred.role
    }
  }
})

export const logout = t.procedure.input(logoutForm).mutation(async ({ input }) => {
  const { user_id } = input

  const [latestLog] = await db
    .select()
    .from(userLogs)
    .where(eq(userLogs.user_id, user_id))
    .orderBy(desc(userLogs.login_at))
    .limit(1)

  if (latestLog) {
    await db.update(userLogs).set({ logout_at: new Date() }).where(eq(userLogs.userlogs_id, latestLog.userlogs_id))
  }

  return { success: true }
})
