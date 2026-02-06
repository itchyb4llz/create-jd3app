import Coins from '@/components/landing/coins'
import CTA from '@/components/landing/cta'
import Features from '@/components/landing/features'
import Hero from '@/components/landing/hero'
import NavbarLanding from '@/components/landing/navbar'
import Footer from '@/components/shared/footer'
import ColorBends from '@/components/ui/colorblends'

export default function Home() {
  return (
    <div className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute top-0 left-0 w-full h-screen z-0 pointer-events-none'>
        <ColorBends
          colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
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
      <main className='relative z-10 max-w-7xl mx-auto'>
        <NavbarLanding />
        <div className='relative z-10'>
          <Hero />
        </div>
        <Features />
        <Coins />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}
