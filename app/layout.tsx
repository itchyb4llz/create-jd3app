import type { Metadata } from 'next'
import './globals.css'
import { bricolage_grotesque } from '@/lib/fonts'
import { ThemeProvider } from '@/providers/theme'
import { TrpcProvider } from '@/providers/trpc'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: {
    default: 'JD3App - Web3-powered SaaS projects developed by Jaj Dollesin',
    template: 'JD3App - %s'
  },
  description:
    'JD3App is a collection of Web3-powered SaaS projects developed by Jaj Dollesin. Subscribe to access innovative apps built for modern creators and developers.',
  keywords: [
    'JD3App',
    'Jaj Dollesin',
    'Web3 SaaS',
    'subscription apps',
    'Next.js',
    'React',
    'developer tools',
    'software platform'
  ],
  authors: [{ name: 'Jaj Dollesin' }],
  creator: 'Jaj Dollesin'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${bricolage_grotesque.className} antialiased`}>
        <TrpcProvider>
          <ThemeProvider attribute='class' defaultTheme='light'>
            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 3000 }} />
            {children}
          </ThemeProvider>
        </TrpcProvider>
      </body>
    </html>
  )
}
