import Contact from '@/components/landing/contact'
import NavbarLanding from '@/components/landing/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  alternates: {
    canonical: '/n'
  }
}

export default function ContactPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavbarLanding />
      <Contact />
    </main>
  )
}
