import Icon from './Icon'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand"><span className="brand-mark">F</span><span>FocusBoard</span></div>
      <nav className="side-nav" aria-label="Primary navigation">
        <button className="nav-item active" type="button"><Icon name="grid"/>Dashboard</button>
        <button className="nav-item" type="button"><Icon name="check"/>My Tasks</button>
        <button className="nav-item" type="button"><Icon name="calendar"/>Calendar</button>
        <button className="nav-item" type="button"><Icon name="chart"/>Analytics</button>
      </nav>
      <button className="nav-item settings" type="button"><Icon name="settings"/>Settings</button>
    </aside>
  )
}
