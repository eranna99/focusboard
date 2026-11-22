import { useMemo, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import FocusNotes from './components/FocusNotes'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import FilterTabs from './components/FilterTabs'
import Icon from './components/Icon'
import { sampleTasks } from './data/sampleTasks'
import { useLocalStorage } from './hooks/useLocalStorage'

const STORAGE_KEY = 'focusboard.tasks.v1'

function App() {
  const [tasks, setTasks] = useLocalStorage(STORAGE_KEY, sampleTasks)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [priorityFilter, setPriorityFilter] = useState('All')
  const [formOpen, setFormOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const stats = useMemo(() => {
    const total = tasks.length
    const inProgress = tasks.filter((task) => task.status === 'In progress').length
    const completed = tasks.filter((task) => task.status === 'Completed').length
    const percentage = total ? Math.round((completed / total) * 100) : 0
    return { total, inProgress, completed, percentage }
  }, [tasks])

  const filteredTasks = useMemo(() => {
    const query = search.trim().toLowerCase()
    return tasks.filter((task) =>
      (!query || task.title.toLowerCase().includes(query)) &&
      (statusFilter === 'All' || task.status === statusFilter) &&
      (priorityFilter === 'All' || task.priority === priorityFilter)
    )
  }, [tasks, search, statusFilter, priorityFilter])

  const openCreate = () => {
    setEditingTask(null)
    setFormOpen(true)
  }

  const openEdit = (task) => {
    setEditingTask(task)
    setFormOpen(true)
  }

  const closeForm = () => {
    setFormOpen(false)
    setEditingTask(null)
  }

  const submitTask = (form) => {
    if (editingTask) {
      setTasks((current) => current.map((task) =>
        task.id === editingTask.id
          ? { ...form, id: task.id, title: form.title.trim(), description: form.description.trim() }
          : task
      ))
    } else {
      setTasks((current) => [
        ...current,
        {
          ...form,
          id: crypto.randomUUID?.() || String(Date.now()),
          title: form.title.trim(),
          description: form.description.trim(),
        },
      ])
    }
    closeForm()
  }

  const deleteTask = (task) => {
    if (window.confirm(`Delete "${task.title}"?`)) {
      setTasks((current) => current.filter((item) => item.id !== task.id))
    }
  }

  const updateStatus = (taskId, status) => {
    setTasks((current) => current.map((task) =>
      task.id === taskId ? { ...task, status } : task
    ))
  }

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <Header search={search} setSearch={setSearch} />

        <div className="dashboard">
          <section className="welcome-row">
            <div>
              <h1>Your work, in focus.</h1>
              <p className="welcome-subtitle">Plan your day, stay organized, and celebrate small wins.</p>
            </div>
            <button className="create-button" type="button" onClick={openCreate}>
              <Icon name="plus" size={17}/>New task
            </button>
          </section>

          <h2 className="mobile-overview-title">Overview</h2>
          <section className="stats-grid" aria-label="Task statistics">
            <StatCard icon="grid" tone="purple" value={stats.total} title="Total tasks" subtitle="Across all projects"/>
            <StatCard icon="calendar" tone="orange" value={stats.inProgress} title="In progress" subtitle="Keep the momentum"/>
            <StatCard icon="check" tone="green" value={stats.completed} title="Completed" subtitle="Great work this week" percentage={stats.percentage}/>
          </section>

          <FocusNotes />

          <section className="tasks-section">
            <div className="tasks-heading">
              <div><h2>My tasks</h2><p>{filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} shown</p></div>
              <div className="filters">
                <label>Priority
                  <select value={priorityFilter} onChange={(event) => setPriorityFilter(event.target.value)}>
                    <option>All</option><option>High</option><option>Medium</option><option>Low</option>
                  </select>
                </label>
              </div>
            </div>

            <FilterTabs value={statusFilter} onChange={setStatusFilter}/>

            <TaskList
              tasks={filteredTasks}
              onUpdateStatus={updateStatus}
              onEdit={openEdit}
              onDelete={deleteTask}
            />
          </section>
        </div>
      </main>

      <TaskForm
        key={`${formOpen}-${editingTask?.id || 'new'}`}
        open={formOpen}
        editingTask={editingTask}
        onClose={closeForm}
        onSubmit={submitTask}
      />
    </div>
  )
}

export default App
