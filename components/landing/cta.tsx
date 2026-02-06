'use client'

import { IconRocket } from '@tabler/icons-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function CTA() {
  const router = useRouter()

  return (
    <div className='bg-current p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center'>
      <h2 className='text-accent text-4xl md:text-6xl tracking-tight'>
        Start Building Your Blockchain-Powered Business Today
      </h2>
      <p className='text-muted-foreground mt-4 text-lg md:text-xl max-w-2xl'>
        JD3App gives you everything you need to manage payments, analytics, and operations securely on the blockchain.
        Join today and unlock the full potential of your apps with a subscription-based, all-in-one platform.
      </p>
      <Button
        size='lg'
        onClick={() => router.push('/signup')}
        className='flex items-center gap-2 cursor-pointer mt-10 bg-accent text-current hover:bg-accent'
      >
        <IconRocket className='w-5 h-5' />
        Get Started
      </Button>
    </div>
  )
}
