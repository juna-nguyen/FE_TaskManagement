import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { navigate } from './data'
import { Header, Sidebar } from './components/layout/AppLayout'
import { DashboardPage } from './components/dashboard/Dashboard'
import { BoardPage, ListPage } from './components/tasks/TaskViews'
import { CreateTaskModal } from './components/modals/CreateTaskModal'
import { DetailPage, HelpPage, SettingsPage } from './pages/WorkspacePages'
import { tasksApi } from './services/api'

function App() {
  const [page, setPage] = useState(window.location.hash.slice(1) || 'dashboard')
  const [modal, setModal] = useState(false)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const loadTasks = useCallback(async () => { setLoading(true); setError(''); try { const result = await tasksApi.list({ limit: 100, sort: '-createdAt' }); setTasks(result.data || result || []) } catch (err) { setError(err.message) } finally { setLoading(false) } }, [])
  useEffect(() => { loadTasks() }, [loadTasks])
  useEffect(() => { const update = () => setPage(window.location.hash.slice(1) || 'dashboard'); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update) }, [])
  const section = page.split('/')[0]
  const closeModal = () => { setModal(false); if (section === 'create') navigate('dashboard') }
  let content
  const taskProps = { tasks, loading, error, onRetry: loadTasks }
  if (section === 'dashboard') content = <DashboardPage {...taskProps} />
  else if (section === 'board') content = <BoardPage {...taskProps} onCreate={() => setModal(true)} />
  else if (section === 'list') content = <ListPage {...taskProps} onCreate={() => setModal(true)} />
  else if (section === 'settings') content = <SettingsPage />
  else if (section === 'task') content = <DetailPage taskId={page.split('/')[1]} onClose={() => navigate('list')} onChanged={loadTasks} />
  else content = <HelpPage />
  const createTask = async task => { await tasksApi.create(task); await loadTasks(); closeModal() }
  return <div className="app"><Sidebar page={section} /><div className="workspace"><Header page={section} onCreate={() => setModal(true)} /><main>{content}</main></div>{(modal || section === 'create') && <CreateTaskModal close={closeModal} onSubmit={createTask} />}</div>
}
export default App
