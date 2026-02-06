import NavbarLanding from '@/components/landing/navbar'
import Pricing from '@/components/landing/pricing'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  alternates: {
    canonical: '/n'
  }
}

export default function PricingPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavbarLanding />
      <Pricing />
    </main>
  )
}
