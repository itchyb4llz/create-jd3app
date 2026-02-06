// general functions --------------------------------------------------
export function capitalize(str: string) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value)
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP'
  }).format(value)
}

export function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  })
}

export function formatTimeLabel(time: string) {
  const [h, m] = time.split(':').map(Number)
  const hour12 = h % 12 || 12
  const period = h < 12 ? 'AM' : 'PM'

  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`
}

export function formatBreakMinutes(minutes: number): string {
  if (minutes <= 0) return 'No break'

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (hours > 0 && remainingMinutes > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minutes`
  }

  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''}`
  }

  return `${remainingMinutes} minutes`
}

export function formatGraceMinutes(minutes: number): string {
  if (minutes <= 0) return 'No grace'
  const remainingMinutes = minutes % 60

  return `${remainingMinutes} minutes`
}

export function combineDateAndTime(workDate: Date, time: string | Date) {
  const date = new Date(workDate)
  const t = typeof time === 'string' ? time : time.toISOString().substring(11, 19)
  const [h, m, s] = t.split(':').map(Number)

  date.setHours(h, m, s || 0, 0)

  return date
}

// product logs --------------------------------------------------
export function diffColor(before: number, after: number) {
  if (before === undefined) return ''
  if (after > before) return 'text-green-600 font-semibold'
  if (after < before) return 'text-red-600 font-semibold'
  return ''
}

// employee --------------------------------------------------
export function generateEmployeeCode() {
  return Date.now().toString().slice(-8)
}

// sales order --------------------------------------------------
export function generateSalesOrderCode() {
  return crypto.randomUUID()
}
