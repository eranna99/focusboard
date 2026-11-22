import Icon from './Icon'

export default function Header({ search, setSearch }) {
  return (
    <header className="topbar">
      <div className="mobile-brand"><span className="brand-mark">F</span><span>FocusBoard</span></div>
      <nav className="breadcrumb" aria-label="Breadcrumb"><span>Workspace</span><i>/</i><strong>Overview</strong></nav>
      <label className="search-box">
        <Icon name="search" size={17}/>
        <span className="sr-only">Search tasks</span>
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tasks..." />
      </label>
      <div className="profile-actions">
        <button className="icon-button notification" type="button" aria-label="Notifications"><Icon name="bell" size={19}/><span/></button>
        <div className="avatar" aria-label="User profile">AR</div>
      </div>
    </header>
  )
}
