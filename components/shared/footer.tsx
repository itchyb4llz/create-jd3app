import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='my-20'>
      <p className='text-center text-sm text-muted-foreground'>
        Copyright © {new Date().getFullYear()} JD3App. All rights reserved.
      </p>
      <p className='text-center text-xs text-muted-foreground mt-1'>
        Made by{' '}
        <Link href='https://jajdollesin.com' target='_blank' className='hover:underline'>
          Jaj Dollesin
        </Link>
      </p>
    </footer>
  )
}
