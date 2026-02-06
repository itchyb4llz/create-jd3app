import { integer, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const branches = pgTable('branches', {
  branch_id: uuid('branch_id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 50 }).notNull(),
  address: varchar('address', { length: 100 }).notNull(),
  email: varchar('email', { length: 50 }),
  contact: varchar('contact', { length: 11 }),
  status: integer('status').default(1),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
})
