import { api } from '@/lib/axios'

export interface GetProjectsByUserIdBody {
  id: string
}

export async function getProjectsByUserId({ id }: GetProjectsByUserIdBody) {
  const { data } = await api.get(`/projects/${id}`)

  return data.projects
}
