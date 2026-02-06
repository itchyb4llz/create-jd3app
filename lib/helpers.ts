export const formatDateTime = (date: string | Date | null | undefined) => {
  if (!date) return 'N/A'

  const dateObj = new Date(date)
  if (isNaN(dateObj.getTime())) return 'Invalid Date'

  return dateObj.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila'
  })
}
