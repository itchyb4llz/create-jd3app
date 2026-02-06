'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { Icon } from '@tabler/icons-react'
import { ComponentPropsWithoutRef } from 'react'

export default function NavWorkforce({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon?: Icon
    items?: { title: string; url: string }[]
  }[]
} & ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname()

  return (
    <SidebarGroup {...props}>
      <SidebarGroupLabel>Workforce Management</SidebarGroupLabel>
      <SidebarGroupContent className='flex flex-col gap-2'>
        <SidebarMenu>
          {items.map(item => {
            const isActive =
              item.items?.some(sub => pathname === sub.url) ||
              pathname === item.url ||
              (item.url !== '/dashboard' && pathname.startsWith(item.url))

            return (
              <SidebarMenuItem
                key={item.title}
                className={isActive ? 'rounded-md bg-zinc-100 dark:bg-zinc-800 dark:text-white' : ''}
              >
                <SidebarMenuButton tooltip={item.title} asChild>
                  <Link href={item.url} className='flex items-center w-full'>
                    {item.icon && <item.icon />}
                    <span className='ml-2'>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
