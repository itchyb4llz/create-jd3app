'use client'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useLoading } from '@/hooks/use-loading'
import { trpc } from '@/hooks/trpc'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { IconEye, IconEyeClosed } from '@tabler/icons-react'
import { signupForm, SignupProps } from '@/validate/user'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { useState } from 'react'
import { showToast } from '@/components/shared/show-toast'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import AuthButton from '../shared/auth-button'
import { Separator } from '../ui/separator'

export default function Signup({ children }: { children: React.ReactNode }) {
  const { authLoading, setAuthLoading } = useLoading('auth')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const signup = trpc.auth.signup.useMutation()
  const [open, setOpen] = useState<boolean>(false)

  const { data = [] } = trpc.branch.readAll.useQuery(undefined, {
    refetchOnWindowFocus: false
  })

  const form = useForm<SignupProps>({
    resolver: zodResolver(signupForm),
    defaultValues: {
      name: '',
      username: '',
      password: '',
      branch_id: ''
    }
  })

  async function handleSubmit(values: SignupProps) {
    const promise = signup.mutateAsync(values)

    showToast('loading', 'Please wait...', { id: 'auth' })

    try {
      setAuthLoading(true)
      const response = await promise

      if (response.success) {
        showToast('success', 'Account created successfully!', { id: 'auth', duration: 2500 })
        setOpen(false)
        // window.location.href = '/'
      } else {
        form.reset()
        setAuthLoading(false)
        showToast('error', 'Could not create an account', { id: 'auth', duration: 3000 })
      }
    } catch (error: any) {
      setAuthLoading(false)
      const message = error?.message ?? 'Something went wrong'
      showToast('error', message, { id: 'auth', duration: 3000 })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className='fixed inset-0 backdrop-blur-sm' />
      <DialogContent onInteractOutside={e => e.preventDefault()} onEscapeKeyDown={e => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>Sign up</DialogTitle>
          <DialogDescription>Fill in the form below to create your account</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='grid gap-4'>
            <Separator className='mb-6' />
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='John Doe' autoFocus />
                  </FormControl>
                  <FormDescription>Your first and last name are required.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='johndoe' />
                  </FormControl>
                  <FormDescription>Your login will be made using your username.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input {...field} type={showPassword ? 'text' : 'password'} />
                      <button
                        type='button'
                        className='absolute right-2 top-1/2 -translate-y-1/2 text-sm text-zinc-500 hover:text-zinc-700'
                        onClick={() => setShowPassword(prev => !prev)}
                        tabIndex={-1}
                      >
                        {showPassword ? <IconEyeClosed className='w-4 h-4' /> : <IconEye className='w-4 h-4' />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='branch_id'
              render={({ field }) => (
                <FormItem className='flex-1'>
                  <FormLabel>Branch</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className='w-full'>
                        <SelectValue placeholder='Select your branch' />
                      </SelectTrigger>
                      <SelectContent>
                        {data?.map(branch => (
                          <SelectItem key={branch.branch_id} value={branch.branch_id}>
                            {branch.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AuthButton label='Sign up' loading={authLoading} className='mt-6' />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
