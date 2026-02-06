import {
  IconBriefcase2,
  IconBuildings,
  IconChartPie,
  IconCoins,
  IconFolder,
  IconInfoCircle,
  IconLogs,
  IconSettings,
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
      title: 'Inventory',
      url: '/dashboard/inventory',
      icon: IconFolder,
      items: [
        {
          title: 'Overview',
          url: '/dashboard/inventory'
        },
        {
          title: 'Product List',
          url: '/dashboard/inventory/product'
        },
        {
          title: 'Category List',
          url: '/dashboard/inventory/category'
        },
        {
          title: 'Supplier List',
          url: '/dashboard/inventory/supplier'
        }
      ]
    },
    {
      title: 'Sales',
      url: '/dashboard/sales',
      icon: IconCoins,
      items: [
        {
          title: 'Overview',
          url: '/dashboard/sales'
        },
        {
          title: 'Point of Sale',
          url: '/dashboard/sales/point-of-sale'
        },
        {
          title: 'Customer List',
          url: '/dashboard/sales/customer'
        },
        {
          title: 'Discount List',
          url: '/dashboard/sales/discount'
        },
        {
          title: 'Invoice List',
          url: '/dashboard/sales/invoice'
        },
        {
          title: 'Payment List',
          url: '/dashboard/sales/payment'
        },
        {
          title: 'Sales Order',
          url: '/dashboard/sales/sales-order'
        }
      ]
    },
    {
      title: 'HR',
      url: '/dashboard/hr',
      icon: IconBriefcase2,
      items: [
        {
          title: 'Overview',
          url: '/dashboard/hr'
        },
        {
          title: 'Daily Time Record',
          url: '/dashboard/hr/daily-time-record'
        },
        {
          title: 'Employee List',
          url: '/dashboard/hr/employee'
        },
        {
          title: 'Employee Shift List',
          url: '/dashboard/hr/employee-shift'
        },
        {
          title: 'Department List',
          url: '/dashboard/hr/department'
        },
        {
          title: 'Shift List',
          url: '/dashboard/hr/shift'
        },
        {
          title: 'Daily Attendance',
          url: '/dashboard/hr/daily-attendance'
        }
      ]
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
