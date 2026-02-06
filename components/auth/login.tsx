'use client'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useLoading } from '@/hooks/use-loading'
import { trpc } from '@/hooks/trpc'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { IconEye, IconEyeClosed } from '@tabler/icons-react'
import { loginForm, LoginProps } from '@/validate/user'
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
import AuthButton from '../shared/auth-button'
import { Separator } from '../ui/separator'

export default function Login() {
  const { authLoading, setAuthLoading } = useLoading('auth')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const login = trpc.auth.login.useMutation()
  const [open, setOpen] = useState<boolean>(false)

  const form = useForm<LoginProps>({
    resolver: zodResolver(loginForm),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  async function handleSubmit(values: LoginProps) {
    const promise = login.mutateAsync(values)

    showToast('loading', 'Please wait...', { id: 'auth' })

    try {
      setAuthLoading(true)
      const response = await promise

      if (response.success) {
        showToast('success', 'Login successfully!', { id: 'auth', duration: 2500 })
        setOpen(false)
        window.location.href = '/dashboard'
      } else {
        form.reset()
        setAuthLoading(false)
        showToast('error', 'Invalid credentials', { id: 'auth', duration: 3000 })
      }
    } catch (error: any) {
      setAuthLoading(false)
      const message = error?.message ?? 'Something went wrong'
      showToast('error', message, { id: 'auth', duration: 3000 })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='ghost'>Log in</Button>
      </DialogTrigger>
      <DialogOverlay className='fixed inset-0 backdrop-blur-sm' />
      <DialogContent onInteractOutside={e => e.preventDefault()} onEscapeKeyDown={e => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className='text-2xl font-bold'>Welcome back! 👋</DialogTitle>
          <DialogDescription>Enter your username and password below to login to your account</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className='grid gap-4'>
            <Separator className='mb-6' />
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
            <AuthButton label='Login' loading={authLoading} className='mt-6' />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
