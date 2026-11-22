import { useState } from 'react'

const emptyTask = {
  title: '',
  description: '',
  category: 'Work',
  status: 'To do',
  priority: 'Medium',
  dueDate: '',
}

export default function TaskForm({ open, editingTask, onClose, onSubmit }) {
  const [form, setForm] = useState(() => editingTask ? { ...editingTask } : emptyTask)
  const [errors, setErrors] = useState({})

  if (!open) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.title.trim()) {
      setErrors({ title: 'Please enter a task title.' })
      return
    }
    onSubmit(form)
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="task-modal" role="dialog" aria-modal="true" aria-labelledby="task-form-title">
        <div className="modal-header">
          <div><p>Task details</p><h2 id="task-form-title">{editingTask ? 'Edit task' : 'Create new task'}</h2></div>
          <button type="button" aria-label="Close" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <label>Title <span>*</span>
            <input autoFocus value={form.title} onChange={(event) => setForm({ ...form, title: event.target.value })} placeholder="What needs to be done?" aria-invalid={Boolean(errors.title)} aria-describedby={errors.title ? 'title-error' : undefined}/>
            {errors.title && <small id="title-error">{errors.title}</small>}
          </label>
          <label>Description<textarea value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="Add a short description..." rows="4"/></label>
          <div className="form-grid">
            <label>Status<select value={form.status} onChange={(event) => setForm({ ...form, status: event.target.value })}><option>To do</option><option>In progress</option><option>Completed</option></select></label>
            <label>Priority<select value={form.priority} onChange={(event) => setForm({ ...form, priority: event.target.value })}><option>Low</option><option>Medium</option><option>High</option></select></label>
            <label>Category<select value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}><option>Work</option><option>Development</option><option>Design</option><option>Testing</option><option>Meetings</option><option>Research</option><option>Personal</option></select></label>
            <label>Due date<input type="date" value={form.dueDate} onChange={(event) => setForm({ ...form, dueDate: event.target.value })}/></label>
          </div>
          <div className="modal-actions">
            <button className="cancel-button" type="button" onClick={onClose}>Cancel</button>
            <button className="create-button" type="submit">{editingTask ? 'Save Changes' : 'Create Task'}</button>
          </div>
        </form>
      </section>
    </div>
  )
}
