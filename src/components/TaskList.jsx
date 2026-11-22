import { useState } from 'react'
import Icon from './Icon'
import formatDate from '../utils/formatDate'

export default function TaskList({ tasks, onUpdateStatus, onEdit, onDelete }) {
  const [menuId, setMenuId] = useState(null)

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <article className="task-row" key={task.id}>
          <button
            className={`task-check ${task.status === 'Completed' ? 'checked' : ''}`}
            type="button"
            aria-label={task.status === 'Completed' ? `Mark ${task.title} incomplete` : `Mark ${task.title} completed`}
            onClick={() => onUpdateStatus(task.id, task.status === 'Completed' ? 'To do' : 'Completed')}
          >
            {task.status === 'Completed' && <Icon name="check" size={13}/>}
          </button>
          <div className="task-main">
            <h3 className={task.status === 'Completed' ? 'completed' : ''}>{task.title}</h3>
            <p>{task.description || 'No description provided'}</p>
            <div className="task-meta-mobile">
              <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
              <span>{task.category}</span>
            </div>
          </div>
          <span className="category">{task.category}</span>
          <label className={`status-select ${task.status.toLowerCase().replace(' ', '-')}`}>
            <span className="sr-only">Status for {task.title}</span>
            <select value={task.status} onChange={(event) => onUpdateStatus(task.id, event.target.value)}>
              <option>To do</option><option>In progress</option><option>Completed</option>
            </select>
          </label>
          <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
          <time>{formatDate(task.dueDate)}</time>
          <div className="task-menu-wrap">
            <button className="dots-button" type="button" aria-label={`Actions for ${task.title}`} aria-expanded={menuId === task.id} onClick={() => setMenuId(menuId === task.id ? null : task.id)}>
              <Icon name="dots"/>
            </button>
            {menuId === task.id && (
              <div className="task-menu">
                <button type="button" onClick={() => { setMenuId(null); onEdit(task) }}><Icon name="edit" size={15}/>Edit</button>
                <button className="delete" type="button" onClick={() => { setMenuId(null); onDelete(task) }}><Icon name="trash" size={15}/>Delete</button>
              </div>
            )}
          </div>
        </article>
      ))}
      {!tasks.length && (
        <div className="empty-state"><h3>No tasks found</h3><p>Try adjusting your search or filters.</p></div>
      )}
    </div>
  )
}
