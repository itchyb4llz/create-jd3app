'use client'

import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '../ui/button'

export default function Contact() {
  return (
    <section className='mt-16 px-4 flex flex-col items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-4xl lg:text-5xl font-bold lg:tracking-tight'>Contact</h2>
        <p className='text-lg mt-4 text-muted-foreground'>
          Have something to say? We are here to help. Fill up the form or send email or call phone.
        </p>
      </div>
      <div className='mt-5'>
        <div className='flex items-center mt-2 space-x-2'>
          <IconMapPin className='text-gray-400 w-4 h-4' />
          <span>Davao City, Philippines</span>
        </div>
        <div className='flex items-center mt-2 space-x-2'>
          <IconMail className='text-gray-400 w-4 h-4' />
          <a href='mailto:support@jajdollesin.com'>support@jajdollesin.com</a>
        </div>
        <div className='flex items-center mt-2 space-x-2'>
          <IconPhone className='text-gray-400 w-4 h-4' />
          <a href='tel:+639151863630'>+639 1518 63630</a>
        </div>
      </div>
    </section>
  )
}
