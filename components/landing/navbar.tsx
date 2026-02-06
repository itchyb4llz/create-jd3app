'use client'

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { IconMenu2 } from '@tabler/icons-react'
import { ModeToggle } from '@/components/shared/mode-toggle'
import { usePathname } from 'next/navigation'
import { linksDefault } from '@/lib/nav-links'
import Signup from '@/components/auth/signup'
import Login from '../auth/login'

export default function NavbarLanding() {
  const pathname = usePathname()

  return (
    <nav className='flex top-0 z-50 h-16 items-center'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='ghost' size='icon' className='lg:hidden'>
            <IconMenu2 className='h-6 w-6' />
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='backdrop-blur-lg bg-zinc-50/90 dark:bg-zinc-950/50'>
          <SheetHeader>
            <SheetTitle>
              JD3<span className='text-muted-foreground'>App</span>
            </SheetTitle>
            <SheetDescription className='sr-only'>JD3App</SheetDescription>
          </SheetHeader>
          <div className='p-4 pt-0'>
            {linksDefault.map(link => (
              <Link
                href={link.link}
                className={`flex w-full items-center py-2 text-lg font-semibold transition-colors ${
                  pathname === link.link ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
                prefetch={false}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className='flex items-center justify-between w-full px-4'>
        <Link href='/' className='font-bold text-lg'>
          JD3<span className='text-muted-foreground'>App</span>
        </Link>

        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList>
            {linksDefault.map(link => (
              <NavigationMenuLink key={link.name} asChild>
                <Link
                  href={link.link}
                  prefetch={false}
                  className={`group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors
                    ${pathname === link.link ? 'text-primary bg-accent' : 'text-muted-foreground hover:text-primary'}`}
                >
                  {link.name}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex items-center space-x-2'>
          <ModeToggle />
          <Login />
          <Signup>
            <Button>Sign up</Button>
          </Signup>
        </div>
      </div>
    </nav>
  )
}
