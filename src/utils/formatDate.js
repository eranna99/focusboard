export default function formatDate(date) {
  if (!date) return 'No date'
  const parsed = new Date(`${date}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
