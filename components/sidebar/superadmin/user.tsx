'use client'

import { useState } from 'react'
import { IconDotsVertical, IconLogout, IconUserCircle } from '@tabler/icons-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { deleteSession, getSession } from '@/session'
import { redirect } from 'next/navigation'
import { trpc } from '@/hooks/trpc'

export default function NavUser({ user }: { user: { name: string; username: string } }) {
  const { isMobile } = useSidebar()
  const [openDialog, setOpenDialog] = useState(false)
  const logout = trpc.auth.logout.useMutation()

  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size='lg'
                className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
              >
                <Avatar className='h-8 w-8 rounded-lg'>
                  <AvatarImage src='/profile.png' alt='Avatar' />
                  <AvatarFallback className='rounded-lg'>
                    {user.name
                      ? user.name
                          .split(' ')
                          .slice(0, 2)
                          .map(word => word[0])
                          .join('')
                          .toUpperCase()
                      : ''}
                  </AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-medium'>{user.name}</span>
                  <span className='text-muted-foreground truncate text-xs'>@{user.username}</span>
                </div>
                <IconDotsVertical className='ml-auto size-4' />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
              side={isMobile ? 'bottom' : 'right'}
              align='end'
              sideOffset={4}
            >
              <DropdownMenuLabel className='p-0 font-normal'>
                <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                  <Avatar className='h-8 w-8 rounded-lg'>
                    <AvatarImage src='/profile.png' alt='Avatar' />
                    <AvatarFallback className='rounded-lg'>
                      {user.name
                        ? user.name
                            .split(' ')
                            .slice(0, 2)
                            .map(word => word[0])
                            .join('')
                            .toUpperCase()
                        : ''}
                    </AvatarFallback>
                  </Avatar>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-medium'>{user.name}</span>
                    <span className='text-muted-foreground truncate text-xs'>@{user.username}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href='/dashboard/settings' passHref>
                  <DropdownMenuItem>
                    <IconUserCircle />
                    Profile
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setOpenDialog(true)}>
                <IconLogout className='text-red-600' />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
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

                setOpenDialog(false)
                await deleteSession()
                redirect('/')
              }}
            >
              Yes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
