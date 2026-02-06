'use client'

import { motion } from 'framer-motion'
import { IconLoader2, IconCircleCheck, IconCircleX } from '@tabler/icons-react'
import { JSX } from 'react'

export type ToastType = 'loading' | 'success' | 'error'

interface ToastMessageProps {
  type: ToastType
  message: string
}

export function ToastMessage({ type, message }: ToastMessageProps) {
  const styles: Record<ToastType, { container: string; iconWrapper: string; icon: JSX.Element; text: string }> = {
    loading: {
      container: 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900',
      iconWrapper: 'bg-blue-100 dark:bg-blue-900/40',
      icon: <IconLoader2 className='h-4 w-4 animate-spin text-blue-600 dark:text-blue-400' />,
      text: 'text-gray-800 dark:text-gray-200'
    },
    success: {
      container: 'border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/30',
      iconWrapper: 'bg-green-100 dark:bg-green-900/40',
      icon: <IconCircleCheck className='h-4 w-4 text-green-600 dark:text-green-400' />,
      text: 'text-green-800 dark:text-green-200'
    },
    error: {
      container: 'border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-900/30',
      iconWrapper: 'bg-red-100 dark:bg-red-900/40',
      icon: <IconCircleX className='h-4 w-4 text-red-600 dark:text-red-400' />,
      text: 'text-red-800 dark:text-red-200'
    }
  }

  const s = styles[type]

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`flex items-center gap-3 rounded-md border px-4 py-3 shadow-lg ${s.container}`}
    >
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${s.iconWrapper}`}>{s.icon}</div>
      <span className={`text-sm font-medium ${s.text}`}>{message}</span>
    </motion.div>
  )
}
