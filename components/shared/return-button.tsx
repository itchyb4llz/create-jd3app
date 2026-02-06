'use client'

import { IconArrowLeft } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export function ReturnButton() {
  const router = useRouter()

  return (
    <Button variant='outline' onClick={() => router.back()}>
      <IconArrowLeft />
    </Button>
  )
}
