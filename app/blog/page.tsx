import Blog from '@/components/landing/blog'
import NavbarLanding from '@/components/landing/navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  alternates: {
    canonical: '/n'
  }
}

export default function BlogPage() {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavbarLanding />
      <Blog />
    </main>
  )
}
