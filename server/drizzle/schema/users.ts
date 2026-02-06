import { integer, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'
import { branches } from './branches'

export const users = pgTable('users', {
  user_id: uuid('user_id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 50 }).notNull(),
  username: varchar('username', { length: 100 }).notNull().unique(),
  password: varchar('password', { length: 255 }),
  verified: integer('verified').default(0),
  role: varchar('role', { length: 50 }).default('user'),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull(),

  branch_id: uuid('branch_id')
    .references(() => branches.branch_id)
    .notNull()
})

export const userLogs = pgTable('user_logs', {
  userlogs_id: uuid('userlogs_id').primaryKey().defaultRandom(),
  login_at: timestamp('login_at').defaultNow().notNull(),
  logout_at: timestamp('logout_at').defaultNow().notNull(),

  user_id: uuid('user_id')
    .references(() => users.user_id, { onDelete: 'cascade' })
    .notNull()
})
