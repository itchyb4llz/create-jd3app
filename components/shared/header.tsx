'use client'

import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { IconLogout } from '@tabler/icons-react'
import { ModeToggle } from './mode-toggle'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { deleteSession, getSession } from '@/session'
import { redirect, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { capitalize } from '@/lib/functions'
import { trpc } from '@/hooks/trpc'

export default function Header() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)
  const logout = trpc.auth.logout.useMutation()

  return (
    <header className='bg-zinc-50 dark:bg-zinc-950 flex h-14 shrink-0 items-center gap-2 border-b transition-colors ease-linear'>
      <div className='flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mx-2 data-[orientation=vertical]:h-4' />
        <div className='hidden md:flex md:items-center md:justify-between md:w-full'>
          <div className='flex items-center gap-4'>
            <Breadcrumb>
              <BreadcrumbList>
                {pathSegments.map((segment, idx) => {
                  const href = '/' + pathSegments.slice(0, idx + 1).join('/')
                  const isLast = idx === pathSegments.length - 1
                  const SEGMENT_LABELS: Record<string, string> = { hr: 'HR' }
                  const rawLabel = SEGMENT_LABELS[segment] ?? capitalize(segment)
                  const label = isLast && idx > 0 && pathSegments[idx - 1] === 'product' ? 'Product Details' : rawLabel

                  return (
                    <div key={href} className='flex items-center'>
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href={href}
                          className={isLast ? 'text-muted-foreground pointer-events-none' : ''}
                        >
                          {label}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {!isLast && <BreadcrumbSeparator className='pl-2' />}
                    </div>
                  )
                })}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <ModeToggle />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='ghost' size='icon'>
                <IconLogout className='text-red-600' />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Logout</DialogTitle>
                <DialogDescription>Are you sure you want to logout?</DialogDescription>
              </DialogHeader>
              <div className='flex items-center justify-end space-x-2'>
                <DialogClose asChild>
                  <Button variant='secondary'>No</Button>
                </DialogClose>
                <Button
                  variant='destructive'
                  onClick={async () => {
                    const session = (await getSession()) as { userId: string } | null

                    if (session?.userId) {
                      await logout.mutateAsync({ user_id: session.userId })
                    }

                    await deleteSession()
                    redirect('/')
                  }}
                >
                  Yes
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
