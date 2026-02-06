import {
  IconBriefcase2,
  IconBuilding,
  IconBuildings,
  IconCalendarTime,
  IconChartPie,
  IconClock,
  IconInfoCircle,
  IconListCheck,
  IconLogs,
  IconSettings,
  IconUserCheck,
  IconUsers
} from '@tabler/icons-react'

export const links = {
  primary: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: IconChartPie
    },
    {
      title: 'Branches',
      url: '/dashboard/branches',
      icon: IconBuildings
    },
    {
      title: 'User List',
      url: '/dashboard/user-list',
      icon: IconUsers
    },
    {
      title: 'User Logs',
      url: '/dashboard/user-logs',
      icon: IconLogs
    }
  ],

  workforce: [
    {
      title: 'Overview',
      url: '/dashboard/workforce',
      icon: IconBriefcase2
    },
    {
      title: 'Daily Time Record',
      url: '/dashboard/workforce/daily-time-record',
      icon: IconClock
    },
    {
      title: 'Employee List',
      url: '/dashboard/workforce/employees',
      icon: IconUsers
    },
    {
      title: 'Employee Shift List',
      url: '/dashboard/workforce/shifts',
      icon: IconCalendarTime
    },
    {
      title: 'Departments',
      url: '/dashboard/workforce/departments',
      icon: IconBuilding
    },
    {
      title: 'Shift List',
      url: '/dashboard/workforce/shift-list',
      icon: IconListCheck
    },
    {
      title: 'Daily Attendance',
      url: '/dashboard/workforce/daily-attendance',
      icon: IconUserCheck
    }
  ],
  footer: [
    {
      title: 'About',
      url: '/dashboard/about',
      icon: IconInfoCircle
    },
    {
      title: 'Settings',
      url: '/dashboard/settings',
      icon: IconSettings
    }
  ]
}
