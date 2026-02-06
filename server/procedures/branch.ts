import { db } from '../drizzle'
import { t } from '../trpc'
import { asc, eq } from 'drizzle-orm'
import { branches } from '../drizzle/schema'
import z from 'zod'
import { branchForm } from '@/validate/branch'
import { BranchTypes } from '@/types/branch'

export const readAll = t.procedure.query(async () => {
  return await db.select().from(branches).where(eq(branches.status, 1))
})

export const create = t.procedure.input(branchForm).mutation(async ({ input }) => {
  const { name, address, email, contact, status } = input

  const exists = await db.select().from(branches).where(eq(branches.name, name)).limit(1)

  if (exists.length > 0) {
    throw new Error('Branch already exists')
  }

  await db
    .insert(branches)
    .values({
      name,
      address,
      email,
      contact,
      status,
      created_at: new Date(),
      updated_at: new Date()
    })
    .returning()

  return { success: true }
})

export const read = t.procedure.query(async (): Promise<BranchTypes[]> => {
  const results = await db
    .select({
      branch_id: branches.branch_id,
      name: branches.name,
      address: branches.address,
      email: branches.email,
      contact: branches.contact,
      status: branches.status,
      created_at: branches.created_at,
      updated_at: branches.updated_at
    })
    .from(branches)
    .orderBy(asc(branches.name))

  return results.map(result => ({
    ...result,
    email: result.email ?? '',
    contact: result.contact ?? '',
    status: result.status ?? 1,
    created_at: result.created_at.toISOString(),
    updated_at: result.updated_at.toISOString()
  }))
})

export const update = t.procedure.input(branchForm).mutation(async ({ input }) => {
  const { branch_id, name, address, email, contact, status } = input

  const update = await db
    .update(branches)
    .set({
      name,
      address,
      email,
      contact,
      status
    })
    .where(eq(branches.branch_id, branch_id!))
    .returning()

  if (update.length === 0) {
    throw new Error('Branch not found!')
  }

  return { success: true }
})

export const remove = t.procedure.input(z.object({ id: z.string() })).mutation(async ({ input }) => {
  const deleteID = await db.delete(branches).where(eq(branches.branch_id, input.id)).returning()

  if (deleteID.length === 0) {
    throw new Error('Branch not found!')
  }

  return deleteID[0]
})
