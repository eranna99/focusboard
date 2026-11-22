import Icon from './Icon'

export default function StatCard({ icon, tone, value, title, subtitle, percentage }) {
  return (
    <article className="stat-card">
      <div className={`stat-icon ${tone}`}><Icon name={icon}/></div>
      <div>
        <strong>{value}</strong>
        <p>{title}</p>
        <small>{subtitle}</small>
      </div>
      {percentage !== undefined && (
        <div className="progress-ring" style={{ '--progress': `${percentage * 3.6}deg` }} aria-label={`${percentage}% complete`}>
          <span>{percentage}%</span>
        </div>
      )}
    </article>
  )
}
