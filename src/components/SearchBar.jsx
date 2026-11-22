import Icon from './Icon'

export default function SearchBar({ search, setSearch }) {
  return (
    <label className="search-box">
      <Icon name="search" size={17}/>
      <span className="sr-only">Search tasks</span>
      <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tasks..." />
    </label>
  )
}
