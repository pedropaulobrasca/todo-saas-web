export type Todo = {
  id: number
  title: string
  description: string
  status: 'pending' | 'in progress' | 'completed'
  projectId: number
}

export type Project = {
  id: number
  name: string
  tasksCount: number
}
