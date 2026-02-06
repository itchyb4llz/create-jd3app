'use client'

import { Button } from '@/components/ui/button'
import { IconDeviceFloppy, IconLoader } from '@tabler/icons-react'

type ButtonSaveProps = {
  loading?: boolean
  disabled?: boolean
}

export function ButtonSave({ loading = false, disabled = false }: ButtonSaveProps) {
  return (
    <Button
      type='submit'
      variant='outline'
      size='sm'
      disabled={disabled || loading}
      className='hover:bg-green-200 dark:hover:bg-green-900 flex items-center gap-2'
    >
      {loading ? (
        <>
          <IconLoader className='animate-spin' />
          Saving
        </>
      ) : (
        <>
          <IconDeviceFloppy />
          Save
        </>
      )}
    </Button>
  )
}
