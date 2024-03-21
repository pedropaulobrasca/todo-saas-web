export type Project = {
  id: number
  title: string
  todoCount: number
  createdAt: string
  userId: number
}

export type Todo = {
  id: number
  description: string
  status: string
  title: string
  projectId: number
  createdAt: string
  project: Project
}
