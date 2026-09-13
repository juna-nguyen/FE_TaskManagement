export const tasks = [
  { name: 'Update Q3 Financials', status: 'Done', priority: 'Medium', due: '20/08/2026' },
  { name: 'Design System Revamp', status: 'In Progress', priority: 'High', due: '21/08/2026' },
  { name: 'Client Presentation', status: 'Todo', priority: 'High', due: '19/08/2026' },
  { name: 'API Integration', status: 'In Progress', priority: 'High', due: '24/10/2026' },
  { name: 'Weekly Team Sync', status: 'Done', priority: 'Low', due: '20/08/2026' },
]

export function navigate(path) { window.location.hash = path }
