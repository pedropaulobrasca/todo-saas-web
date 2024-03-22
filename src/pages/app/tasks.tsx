import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { createTodo } from '@/api/create-todo'
import { getProjectsByUserId } from '@/api/get-projects-by-user-id'
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { getUserIdByToken } from '@/utils/get-userid-by-token'

import { Project, Todo } from '../../types/types'

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
  const [newTodoTitle, setNewTodoTitle] = useState('')
  const [newTodoProjectId, setNewTodoProjectId] = useState('')
  const [newTodoDescription, setNewTodoDescription] = useState('')

  const {
    data: todos,
    isLoading,
    isError,
    refetch,
  } = useQuery<Todo[]>({
    queryKey: ['tasks'],
    queryFn: () => getTodosByUserId({ id: userId }),
  })

  const { data: projects } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => getProjectsByUserId({ id: userId }),
  })

  const handleAddTodo = async () => {
    console.log(newTodoTitle, newTodoProjectId, newTodoDescription)
    await createTodo({
      title: newTodoTitle,
      userId: Number(userId),
      projectId: Number(newTodoProjectId),
      description: newTodoDescription,
      status: 'idle',
    })
    setNewTodoTitle('')
    setNewTodoProjectId('') // Limpa o projectId após adicionar
    refetch() // Recarrega as tarefas após adicionar uma nova
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading tasks</div>

  // Now we're sure todos is either undefined or an array, and we handle the undefined case.
  if (!todos) return <div>No tasks found</div>

  return (
    <>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold md:text-2xl">Tasks</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-auto" size="sm">
              New Task
            </Button>
          </DialogTrigger>
          <DialogOverlay className="fixed inset-0 bg-black/40" />
          <DialogContent className="flex max-w-[400px] flex-col rounded-t-[10px]">
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
              placeholder="Task Title"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
              className="input-class" // Substitua "input-class" pela sua classe de estilo real
            />
            <Input
              type="text"
              placeholder="Description"
              value={newTodoDescription}
              onChange={(e) => setNewTodoDescription(e.target.value)}
              className="input-class" // Substitua "input-class" pela sua classe de estilo real
            />
            <Select onValueChange={(e) => setNewTodoProjectId(e)}>
              <SelectTrigger>
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                {projects?.map((project) => (
                  <SelectItem key={project.id} value={project.id.toString()}>
                    {project.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <DialogFooter>
              <Button onClick={handleAddTodo}>Submit</Button>
              <DialogClose>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
