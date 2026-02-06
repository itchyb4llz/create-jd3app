'use client'

import { IconCurrencyBitcoin, IconRocket } from '@tabler/icons-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import Signup from '../auth/signup'

export default function Hero() {
  const router = useRouter()

  return (
    <div className='grid px-4 lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24'>
      <div className='py-6 md:order-1 hidden md:block'>
        <Image src='/hero.png' alt='Astronaut in the air' width={500} height={500} />
      </div>
      <div>
        <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter'>
          Build Smarter with JD3App
        </h1>
        <p className='text-lg mt-4 text-muted-foreground max-w-xl'>
          Unlock a suite of Web3-powered SaaS tools built by Jaj Dollesin. From productivity to innovation — subscribe
          to access everything, and elevate your workflow in the decentralized era.
        </p>
        <div className='mt-6 flex flex-col items-center sm:flex-row gap-4'>
          <Signup>
            <Button
              size='lg'
              className='
    flex items-center gap-2 cursor-pointer w-full md:w-auto
  '
            >
              <IconRocket className='w-5 h-5' />
              Get Started
            </Button>
          </Signup>
          <Button
            variant='outline'
            size='lg'
            onClick={() => router.push('/pricing')}
            className='
    hover:text-orange-400
    hover:bg-orange-100
    hover:border-orange-100
    hover:shadow-[0_0_15px_2px_rgba(255,153,0,0.5)]
    transition-all duration-300
    flex items-center gap-2 cursor-pointer w-full md:w-auto
  '
          >
            <IconCurrencyBitcoin className='w-5 h-5' />
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}
