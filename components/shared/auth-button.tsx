'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { IconLoader } from '@tabler/icons-react'

type AuthProps = {
  loading?: boolean
  disabled?: boolean
  label: string
  className?: string
}

export default function AuthButton({ loading = false, disabled = false, label, className }: AuthProps) {
  return (
    <Button type='submit' size='lg' disabled={disabled || loading} className={cn('w-full', className)}>
      {loading ? (
        <>
          <IconLoader className='animate-spin' />
          {label === 'Login' ? 'Logging in...' : 'Registering...'}
        </>
      ) : (
        <span>{label}</span>
      )}
    </Button>
  )
}
