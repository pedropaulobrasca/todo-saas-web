import { useQuery } from '@tanstack/react-query'

import { getTodosByUserId } from '@/api/get-todos-by-user-id'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { getUserIdByToken } from '@/utils/get-userid-by-token'

import { Todo } from '../../types/types'

export function Tasks() {
  function handleContextMenu() {
    switch ((event?.target as HTMLElement)?.textContent) {
      case 'Edit':
        alert('Edit')
        break
      case 'Mark as completed':
        alert('Mark as completed')
        break
      case 'Delete':
        alert('Delete')
        break
    }
  }

  const { userId } = getUserIdByToken()

  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery<Todo[]>({
    queryKey: ['tasks'],
    queryFn: () => getTodosByUserId({ id: userId }),
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading tasks</div>

  // Now we're sure todos is either undefined or an array, and we handle the undefined case.
  if (!todos) return <div>No tasks found</div>

  return (
    <>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold md:text-2xl">Tasks</h1>
        <Button className="ml-auto" size="sm">
          New Task
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.isArray(todos) &&
              todos.map((todo: Todo) => (
                <ContextMenu key={todo.id}>
                  <ContextMenuTrigger>
                    <Card className="min-w-[250px] max-sm:w-full">
                      <CardHeader className="flex items-start">
                        <div className="w-full flex-1 space-y-1">
                          <p className="text-sm text-gray-500">
                            {todo.project.title}
                          </p>
                          <CardTitle>{todo.title}</CardTitle>
                          <CardDescription>
                            {todo.description || 'N/A'}
                          </CardDescription>
                        </div>
                        <div className="flex w-full items-center justify-end">
                          <Badge variant="outline">{todo.status}</Badge>
                        </div>
                      </CardHeader>
                    </Card>
                  </ContextMenuTrigger>
                  <ContextMenuContent>
                    <ContextMenuItem onClick={handleContextMenu}>
                      Edit
                    </ContextMenuItem>
                    <ContextMenuItem onClick={handleContextMenu}>
                      Mark as completed
                    </ContextMenuItem>
                    <ContextMenuItem onClick={handleContextMenu}>
                      Delete
                    </ContextMenuItem>
                  </ContextMenuContent>
                </ContextMenu>
              ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
