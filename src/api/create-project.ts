import { api } from '@/lib/axios'

export interface CreateProjectBody {
  title: string
  userId: string
}

export async function createProject({ title, userId }: CreateProjectBody) {
  const { data } = await api.post('/projects', { title, userId })

  return data.project
}
