'use client'

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import Link from 'next/link'
import { IconChevronRight, type Icon } from '@tabler/icons-react'
import { useSidebar } from '@/components/ui/sidebar'
import { useEffect, useState } from 'react'

export default function NavPrimary({
  items
}: {
  items: {
    title: string
    url: string
    icon?: Icon
    items?: { title: string; url: string }[]
  }[]
}) {
  const pathname = usePathname()
  const { setOpen } = useSidebar()

  const [openMap, setOpenMap] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const initial: Record<string, boolean> = {}
    items.forEach(item => {
      if (item.items?.some(sub => pathname === sub.url)) {
        initial[item.title] = true
      }
    })
    setOpenMap(prev => ({ ...initial, ...prev }))
  }, [])

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Home</SidebarGroupLabel>
      <SidebarGroupContent className='flex flex-col gap-2'>
        <SidebarMenu>
          {items.map(item => {
            const hasSubItems = !!item.items?.length
            const isAnySubItemActive = item.items?.some(sub => pathname === sub.url) ?? false
            const isDashboard = item.url === '/dashboard'
            const isTopLevelActive = isDashboard
              ? pathname === '/dashboard'
              : pathname === item.url || pathname.startsWith(`${item.url}`)
            const isActive = hasSubItems ? isAnySubItemActive || pathname === item.url : isTopLevelActive
            const isOpen = openMap[item.title] ?? false

            if (hasSubItems) {
              return (
                <Collapsible
                  key={item.title}
                  open={isOpen}
                  onOpenChange={open => setOpenMap(prev => ({ ...prev, [item.title]: open }))}
                  asChild
                  className='group/collapsible'
                  defaultOpen={isAnySubItemActive}
                >
                  <SidebarMenuItem
                    className={isActive ? 'rounded-md bg-zinc-100 dark:bg-zinc-800 dark:text-white' : ''}
                  >
                    <CollapsibleTrigger asChild onClick={() => setOpen(true)}>
                      <SidebarMenuButton tooltip={item.title} asChild>
                        <div className='flex items-center w-full'>
                          {item.icon && <item.icon />}
                          <span className='ml-2'>{item.title}</span>
                          <IconChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className='overflow-hidden transition-all duration-300 ease-in-out'>
                      <SidebarMenuSub>
                        {item.items?.map(subItem => {
                          const subItemActive = pathname === subItem.url
                          return (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                className={
                                  subItemActive
                                    ? 'rounded-md bg-zinc-200 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white'
                                    : ''
                                }
                                asChild
                              >
                                <Link href={subItem.url}>
                                  <span>{subItem.title}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          )
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )
            }

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
