'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from '@/components/ui/sidebar'
import { links } from './links'
import { SidebarProps } from '@/types/sidebar'
import NavPrimary from './primary'
import NavUser from './user'
import NavFooter from './footer'
import Image from 'next/image'

export default function SuperadminSidebar({ user, ...props }: SidebarProps) {
  return (
    <Sidebar collapsible='icon' className='transition-all duration-300 ease-in-out' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center'>
                <Image src='/astrounaut.png' alt='logo' width={500} height={500} />
              </div>
              <div className='grid flex-1 text-left leading-tight'>
                <span className='truncate font-medium text-lg tracking-tighter'>JD3App</span>
                <span className='truncate text-xs -mt-2'>version {process.env.NEXT_PUBLIC_APP_VERSION}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='hide-scrollbar'>
        <NavPrimary items={links.primary} />
        <NavFooter items={links.footer} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
