import { api } from '@/lib/axios'

export interface GetTodosByUserIdBody {
  id: string
}

export async function getTodosByUserId({ id }: GetTodosByUserIdBody) {
  const { data } = await api.get(`/todos/${id}`)

  return data.todos
}
