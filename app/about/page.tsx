import About from '@/components/landing/about'
import NavbarLanding from '@/components/landing/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  alternates: {
    canonical: '/n'
  }
}

export default function AboutPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavbarLanding />
      <About />
    </main>
  )
}
