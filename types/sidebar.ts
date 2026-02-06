import { Sidebar } from '@/components/ui/sidebar'
import { ComponentProps } from 'react'

export type SidebarProps = ComponentProps<typeof Sidebar> & {
  user: {
    name: string
    username: string
  }
}
