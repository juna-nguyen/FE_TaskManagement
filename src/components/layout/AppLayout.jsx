import { Bell, CheckCircle2, Grid2X2, HelpCircle, LayoutDashboard, List, LogOut, Menu, Plus, Search, Settings } from 'lucide-react'
import { navigate } from '../../data'

export function Sidebar({ page }) {
  const links = [['dashboard', 'Dashboard', LayoutDashboard], ['board', 'Board View', Grid2X2], ['list', 'List View', List], ['settings', 'Settings', Settings]]
  return <aside className="sidebar"><div className="logo-block"><div className="logo-icon"><CheckCircle2 size={29} /></div><div><strong>ProTask</strong><span>Enterprise Workspace</span></div></div><button className="new-task" onClick={() => navigate('create')}><Plus size={22} /> New Task</button><nav>{links.map(([key, label, Icon]) => <button className={`side-link ${page === key ? 'selected' : ''}`} onClick={() => navigate(key)} key={key}><Icon size={25} />{label}</button>)}</nav><div className="sidebar-footer"><button className="side-link" onClick={() => navigate('help')}><HelpCircle size={25} />Help</button><button className="side-link" onClick={() => navigate('logout')}><LogOut size={25} />Logout</button></div></aside>
}

export function Header({ onCreate, page }) {
  const titles = { dashboard: 'Dashboard', board: 'My Tasks', list: 'My Tasks', settings: 'Settings', help: 'Help Center' }
  return <header className="header"><div className="mobile-menu"><Menu size={22} /></div><h1>{titles[page] || 'Task Details'}</h1><div className="header-search"><Search size={22} /><span>Search tasks...</span></div><button className="create-button" onClick={onCreate}><Plus size={19} /> Create Task</button><Bell className="bell" size={24} /><div className="user-avatar">AC</div></header>
}
