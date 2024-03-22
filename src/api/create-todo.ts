import { api } from '@/lib/axios'

export interface CreateTodoBody {
  title: string
  userId: number
  projectId: number
  description: string
  status: string
}

export async function createTodo({
  title,
  userId,
  projectId,
  description,
  status,
}: CreateTodoBody) {
  const { data } = await api.post('/todos', {
    title,
    userId,
    projectId,
    description,
    status,
  })

  return data.project
}
