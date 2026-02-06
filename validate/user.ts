import z from 'zod'

export const signupForm = z.object({
  user_id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(2, { message: 'First and last names are required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Name must not be empty!'
    }),
  username: z
    .string()
    .trim()
    .min(2, { message: 'Username is required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Username must not be empty!'
    }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'Password must be at least 8 characters' })
    .refine(val => val.trim().length >= 8, {
      message: 'Password must not be empty!'
    }),
  verified: z.number().optional(),
  role: z.string().optional(),
  branch_id: z
    .string()
    .trim()
    .min(2, { message: 'Branch is required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Branch must not be empty!'
    })
})

export const userForm = z.object({
  user_id: z.string().optional(),
  name: z
    .string()
    .trim()
    .min(2, { message: 'First and last names are required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Name must not be empty!'
    }),
  username: z
    .string()
    .trim()
    .min(2, { message: 'Username is required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Username must not be empty!'
    }),
  verified: z.number().optional(),
  role: z.string().optional(),
  branch_id: z
    .string()
    .trim()
    .min(2, { message: 'Branch is required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Branch must not be empty!'
    })
})

export const userResetForm = z.object({
  user_id: z.string().optional(),
  password: z
    .string()
    .trim()
    .min(8, { message: 'Password must be at least 8 characters' })
    .refine(val => val.trim().length >= 8, {
      message: 'Password must not be empty!'
    })
})

export const loginForm = z.object({
  username: z
    .string()
    .trim()
    .min(2, { message: 'Username is required.' })
    .refine(val => val.trim().length >= 2, {
      message: 'Username must not be empty!'
    }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'Password must be at least 8 characters' })
    .refine(val => val.trim().length >= 8, {
      message: 'Password must not be empty!'
    })
})

export const logoutForm = z.object({ user_id: z.string() })

export type SignupProps = z.infer<typeof signupForm>
export type LoginProps = z.infer<typeof loginForm>
export type UserProps = z.infer<typeof userForm>
export type UserResetProps = z.infer<typeof userResetForm>
export type LogoutProps = z.infer<typeof logoutForm>
