import z from 'zod'

export const branchForm = z.object({
  branch_id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name is required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Name must not be empty!'
    }),
  address: z
    .string()
    .trim()
    .min(2, { message: 'Address is required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Name must not be empty!'
    }),
  email: z.string().optional(),
  contact: z
    .string()
    .trim()
    .optional()
    .refine(val => !val || /^09\d{9}$/.test(val), {
      message: 'Please enter a valid mobile number (09123456789)'
    }),
  status: z.number()
})

export type BranchProps = z.infer<typeof branchForm>
