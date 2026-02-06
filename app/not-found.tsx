'use client'

import { Button } from '@/components/ui/button'
import ColorBends from '@/components/ui/colorblends'
import { trpc } from '@/hooks/trpc'
import { deleteSession, getSession } from '@/session'
import { IconArrowLeft, IconLogout } from '@tabler/icons-react'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  const logout = trpc.auth.logout.useMutation()

  return (
    <div className='relative h-screen overflow-x-hidden'>
      <div className='absolute top-0 left-0 w-full h-screen z-0 pointer-events-none'>
        <ColorBends
          colors={['#f7002e', '#ff03e6', '#ff03e6']}
          rotation={30}
          speed={0.3}
          scale={1.4}
          frequency={2.4}
          warpStrength={1.2}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.08}
          transparent
        />
      </div>
      <main className='relative z-10 flex flex-col items-center justify-center mt-28'>
        <Image src='/hero.png' alt='Astronaut in the air' width={500} height={500} />
        <h1 className='mt-6 text-5xl md:text-9xl font-bold lg:tracking-tight xl:tracking-tighter'>404</h1>
        <h2>Page Not Found</h2>
        <div className='flex items-center justify-center space-x-4 mt-12'>
          <Button variant='ghost' onClick={() => router.back()}>
            <IconArrowLeft />
            Return
          </Button>
          <Button
            variant='ghost'
            onClick={async () => {
              const session = (await getSession()) as { userId: string } | null

              if (session?.userId) {
                await logout.mutateAsync({ user_id: session.userId })
              }

              await deleteSession()
              redirect('/')
            }}
            className='hover:bg-red-600 hover:dark:bg-red-600 hover:text-accent hover:dark:text-current'
          >
            <IconLogout />
            Logout
          </Button>
        </div>
      </main>
    </div>
  )
}
