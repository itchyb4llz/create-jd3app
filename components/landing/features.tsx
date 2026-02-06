import { IconRocket, IconCloud, IconLock, IconChartLine, IconUsers, IconDeviceDesktop } from '@tabler/icons-react'

const features = [
  {
    title: 'Effortless Blockchain Payments',
    description:
      'Receive and send payments using blockchain technology directly in your apps. Simplify transactions, reduce fees, and ensure fast, secure payments for your business.',
    icon: IconRocket
  },
  {
    title: 'Reliable Cloud Performance',
    description:
      'Our apps run on scalable cloud infrastructure, ensuring fast performance, uptime reliability, and smooth user experiences for your team and customers.',
    icon: IconCloud
  },
  {
    title: 'Enterprise-Grade Security',
    description:
      'Protect your business data and user information with end-to-end encryption, secure blockchain transactions, and strict access control policies.',
    icon: IconLock
  },
  {
    title: 'Actionable Insights & Analytics',
    description:
      'Track payments, app usage, and key business metrics with real-time analytics dashboards to make smarter decisions faster.',
    icon: IconChartLine
  },
  {
    title: 'Team Collaboration Made Simple',
    description:
      'Manage your team seamlessly — assign roles, control permissions, and collaborate on projects efficiently within the platform.',
    icon: IconUsers
  },
  {
    title: 'Access Anywhere, Anytime',
    description:
      'Your business apps are available on desktop, tablet, and mobile, so you can monitor operations, approve payments, and manage your workflow on the go.',
    icon: IconDeviceDesktop
  }
]

export default function Features() {
  return (
    <section className='mt-16 px-4'>
      <h2 className='text-4xl lg:text-5xl font-bold lg:tracking-tight'>
        Build, Manage, and Scale Your Business with Blockchain-Powered SaaS Tools
      </h2>
      <p className='text-lg mt-4 text-muted-foreground'>
        JD3App provides a suite of subscription-based business applications that leverage blockchain technology for
        payments, security, and efficiency. Our platform helps businesses accept and send crypto payments, track
        performance, collaborate with teams, and manage operations — all in one secure and easy-to-use platform.
      </p>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16'>
        {features.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className='flex gap-4 items-start'>
              <div className='mt-1 bg-muted rounded-full p-3 shrink-0'>
                <Icon className='w-6 h-6' />
              </div>
              <div>
                <h3 className='font-semibold text-lg'>{item.title}</h3>
                <p className='text-muted-foreground mt-2 leading-relaxed'>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
