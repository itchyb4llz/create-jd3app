// shift options --------------------------------------------------
export const NAME_LABEL_OPTIONS: Record<number, string> = {
  0: 'No Shift',
  1: 'Day Shift',
  2: 'Night Shift',
  3: 'Morning Shift',
  4: 'Mid Shift',
  5: 'Graveyard',
  6: 'Flex Shift',
  7: 'Split Shift',
  8: 'Remote Shift'
}

export const TIME_OPTIONS = [
  { value: '00:00', label: '12:00 AM' },
  { value: '00:30', label: '12:30 AM' },
  { value: '01:00', label: '01:00 AM' },
  { value: '01:30', label: '01:30 AM' },
  { value: '02:00', label: '02:00 AM' },
  { value: '02:30', label: '02:30 AM' },
  { value: '03:00', label: '03:00 AM' },
  { value: '03:30', label: '03:30 AM' },
  { value: '04:00', label: '04:00 AM' },
  { value: '04:30', label: '04:30 AM' },
  { value: '05:00', label: '05:00 AM' },
  { value: '05:30', label: '05:30 AM' },
  { value: '06:00', label: '06:00 AM' },
  { value: '06:30', label: '06:30 AM' },
  { value: '07:00', label: '07:00 AM' },
  { value: '07:30', label: '07:30 AM' },
  { value: '08:00', label: '08:00 AM' },
  { value: '08:30', label: '08:30 AM' },
  { value: '09:00', label: '09:00 AM' },
  { value: '09:30', label: '09:30 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '10:30', label: '10:30 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '11:30', label: '11:30 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '12:30', label: '12:30 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '13:30', label: '01:30 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '14:30', label: '02:30 PM' },
  { value: '15:00', label: '03:00 PM' },
  { value: '15:30', label: '03:30 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '16:30', label: '04:30 PM' },
  { value: '17:00', label: '05:00 PM' },
  { value: '17:30', label: '05:30 PM' },
  { value: '18:00', label: '06:00 PM' },
  { value: '18:30', label: '06:30 PM' },
  { value: '19:00', label: '07:00 PM' },
  { value: '19:30', label: '07:30 PM' },
  { value: '20:00', label: '08:00 PM' },
  { value: '20:30', label: '08:30 PM' },
  { value: '21:00', label: '09:00 PM' },
  { value: '21:30', label: '09:30 PM' },
  { value: '22:00', label: '10:00 PM' },
  { value: '22:30', label: '10:30 PM' },
  { value: '23:00', label: '11:00 PM' },
  { value: '23:30', label: '11:30 PM' }
]

export const BREAK_MINUTES_OPTIONS = [
  { value: 0, label: 'No break' },
  { value: 15, label: '15 minutes' },
  { value: 30, label: '30 minutes' },
  { value: 45, label: '45 minutes' },
  { value: 60, label: '1 hour' },
  { value: 75, label: '1 hour 15 minutes' },
  { value: 90, label: '1 hour 30 minutes' }
]

export const GRACE_MINUTES_OPTIONS = [
  { value: 0, label: 'No grace' },
  { value: 5, label: '5 minutes' },
  { value: 10, label: '10 minutes' },
  { value: 15, label: '15 minutes' },
  { value: 20, label: '20 minutes' },
  { value: 30, label: '30 minutes' }
]

// employee options and labels  --------------------------------------------------
export const EMPLOYMENT_TYPE_OPTIONS = [
  { value: 0, label: 'Full Time' },
  { value: 1, label: 'Part Time' },
  { value: 2, label: 'Contractor' },
  { value: 3, label: 'Intern' }
]

export const EMPLOYMENT_TYPE_LABELS: Record<number, string> = Object.fromEntries(
  EMPLOYMENT_TYPE_OPTIONS.map(option => [option.value, option.label])
)

// employee options, labels, and config --------------------------------------------------
export const EMPLOYEE_STATUS_OPTIONS = [
  { value: 0, label: 'Terminated' },
  { value: 1, label: 'Active' },
  { value: 2, label: 'Probation' },
  { value: 3, label: 'On Leave' },
  { value: 4, label: 'Suspended' },
  { value: 5, label: 'Resigned' },
  { value: 6, label: 'Retired' },
  { value: 7, label: 'End of Contract' }
]

export const EMPLOYEE_STATUS_LABELS: Record<number, string> = Object.fromEntries(
  EMPLOYEE_STATUS_OPTIONS.map(option => [option.value, option.label])
)

export const EMPLOYEE_STATUS_CONFIG: Record<number, { label: string; className: string }> = {
  0: { label: 'Terminated', className: 'bg-red-50 text-red-600 dark:bg-red-950' },
  1: { label: 'Active', className: 'bg-green-50 text-green-600 dark:bg-green-950' },
  2: { label: 'Probation', className: 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950' },
  3: { label: 'On Leave', className: 'bg-blue-50 text-blue-600 dark:bg-blue-950' },
  4: { label: 'Suspended', className: 'bg-orange-50 text-orange-600 dark:bg-orange-950' },
  5: { label: 'Resigned', className: 'bg-gray-50 text-gray-600 dark:bg-gray-950' },
  6: { label: 'Retired', className: 'bg-purple-50 text-purple-600 dark:bg-purple-950' },
  7: { label: 'End of Contract', className: 'bg-pink-50 text-pink-600 dark:bg-pink-950' }
}

// attendance session options --------------------------------------------------
export const ATTENDANCE_SESSION_STATUS_OPTIONS = [
  { value: 0, label: 'Holiday' },
  { value: 1, label: 'Present' },
  { value: 2, label: 'Absent' },
  { value: 3, label: 'Leave' }
]

// attendance event options --------------------------------------------------
export const ATTENDANCE_EVENT_TYPE_OPTIONS: Record<number, string> = {
  0: 'Time In',
  1: 'Time Out',
  2: 'Break In',
  3: 'Break Out'
}

export const ATTENDANCE_EVENT_SOURCE_OPTIONS: Record<number, string> = {
  0: 'Manual',
  1: 'QR Code',
  2: 'Mobile',
  3: 'Web'
}

export const EVENT_LABEL: Record<number, string> = {
  0: 'Time In',
  1: 'Time Out',
  2: 'Break In',
  3: 'Break Out'
}
