export default function FilterTabs({ value, onChange }) {
  return (
    <div className="status-tabs" role="tablist" aria-label="Filter by status">
      {['All', 'To do', 'In progress', 'Completed'].map((status) => (
        <button
          key={status}
          type="button"
          role="tab"
          aria-selected={value === status}
          className={value === status ? 'active' : ''}
          onClick={() => onChange(status)}
        >
          {status}
        </button>
      ))}
    </div>
  )
}
