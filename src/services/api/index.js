import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://amiable-flexibility-production-bb54.up.railway.app/api',
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.response.use(
  response => response,
  error => {
    const message = error.response?.data?.message || error.message || 'API request failed'
    return Promise.reject(new Error(message))
  },
)

export const tasksApi = {
  list: params => apiClient.get('/tasks', { params }).then(response => response.data),
  create: task => apiClient.post('/tasks', task).then(response => response.data),
  get: id => apiClient.get(`/tasks/${id}`).then(response => response.data),
  update: (id, task) => apiClient.put(`/tasks/${id}`, task).then(response => response.data),
  remove: id => apiClient.delete(`/tasks/${id}`).then(response => response.data),
  updateStatus: (id, status) => apiClient.post(`/tasks/${id}/status`, { status }).then(response => response.data),
}
