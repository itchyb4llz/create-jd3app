import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import SuperadminSidebar from '../sidebar/superadmin'
import Header from '../shared/header'

export default function DashboardSuperadmin({ user }: { user: { name: string; username: string } }) {
  return (
    <SidebarProvider>
      <SuperadminSidebar user={user} />
      <SidebarInset>
        <Header />
        <div className='flex flex-1 flex-col gap-4 p-4'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <div className='bg-muted/50 aspect-video rounded-xl' />
            <div className='bg-muted/50 aspect-video rounded-xl' />
            <div className='bg-muted/50 aspect-video rounded-xl' />
          </div>
          <div className='bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min' />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
