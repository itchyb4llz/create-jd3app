import { cookies } from 'next/headers'
import { decrypt } from '@/session'
import { Metadata } from 'next'
import NotFound from '../not-found'
import SuperadminDashboard from '@/components/dashboard/superadmin'

export const metadata: Metadata = {
  title: 'Dashboard',
  alternates: {
    canonical: '/n'
  }
}

export default async function Dashboard() {
  const cookie = await cookies()
  const session = await decrypt(cookie.get('session')?.value)

  const user = {
    name: session?.name as string,
    username: session?.username as string
  }

  switch (session?.role) {
    case 'superadmin':
      return <SuperadminDashboard user={user} />
    default:
      return <NotFound />
  }
}
