'use client'

import { IconCircleCheck } from '@tabler/icons-react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

/**
 *
 * Reminder: Replace static content with live data from the API once backend is ready
 *
 */

const pricing = [
  {
    name: 'Personal',
    price: 'Free',
    popular: false,
    features: [
      'Access to core business apps',
      'Basic crypto payment support',
      'Single-user account',
      'Secure cloud storage',
      'Email support',
      'Limited cloud storage'
    ],
    button: {
      text: 'Get Started',
      link: '/signup'
    }
  },
  {
    name: 'Startup',
    price: '$599',
    popular: true,
    features: [
      'All Personal features',
      'Multi-coin payment gateway',
      'Real-time transaction analytics',
      'Team collaboration tools',
      'Priority customer support',
      'Automated invoice & receipts'
    ],
    button: {
      text: 'Get Started',
      link: '/signup'
    }
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    popular: false,
    features: [
      'All Startup features',
      'Dedicated account manager',
      'Private cloud setup',
      'White-label branding',
      '24/7 premium support'
    ],
    button: {
      text: 'Contact us',
      link: '/contact'
    }
  }
]

export default function Pricing() {
  const router = useRouter()

  return (
    <section className='mt-16 px-4 flex flex-col items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-4xl lg:text-5xl font-bold lg:tracking-tight'>Pricing</h2>
        <p className='text-lg mt-4 text-muted-foreground'>Simple & Predictable pricing. No Surprises.</p>
      </div>
      <div className='grid md:grid-cols-3 gap-10 mx-auto max-w-5xl mt-12'>
        {pricing.map((item, index) => (
          <div key={index} className='flex flex-col w-full order-first lg:order-0 border-2 py-5 px-6 rounded-md'>
            <div className='text-center'>
              <h4 className='text-lg font-medium'>{item.name}</h4>
              <p className='mt-3 text-4xl font-bold md:text-4xl'>{item.price}</p>
            </div>
            <ul className='grid mt-8 text-left gap-y-4'>
              {item.features.map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <IconCircleCheck className='w-6 h-6' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className='flex mt-auto pt-8'>
              <Button
                size='lg'
                variant={item.popular ? 'default' : 'outline'}
                onClick={() => router.push(item.button.link || '#')}
                className='w-full'
              >
                {item.button.text || 'Get Started'}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
