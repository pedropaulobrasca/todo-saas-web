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
import { Todo } from '@/types/types'

const todos: Todo[] = [
  {
    id: 1,
    title: 'Finish the report',
    description: 'Complete the annual report by EOD',
    status: 'in progress',
    projectId: 1,
  },
  {
    id: 2,
    title: 'Update website',
    description: 'Refresh the homepage design',
    status: 'pending',
    projectId: 1,
  },
  {
    id: 3,
    title: 'Fix login bug',
    description: 'Resolve the issue preventing user logins',
    status: 'in progress',
    projectId: 2,
  },
  {
    id: 4,
    title: 'Plan team meeting',
    description: 'Schedule the monthly team meeting',
    status: 'completed',
    projectId: 2,
  },
  {
    id: 5,
    title: 'Review marketing plan',
    description: 'Go through the Q3 marketing plan',
    status: 'pending',
    projectId: 3,
  },
  {
    id: 6,
    title: 'Test new features',
    description: 'QA the new features before release',
    status: 'in progress',
    projectId: 3,
  },
  {
    id: 7,
    title: 'Email newsletter',
    description: 'Draft the content for the next email blast',
    status: 'pending',
    projectId: 4,
  },
  {
    id: 8,
    title: 'Clean up database',
    description: 'Remove outdated records from the database',
    status: 'completed',
    projectId: 4,
  },
  {
    id: 9,
    title: 'Prepare presentation',
    description: 'Create slides for the upcoming webinar',
    status: 'in progress',
    projectId: 5,
  },
  {
    id: 10,
    title: 'Renew domain',
    description: 'Renew the company domain name',
    status: 'completed',
    projectId: 5,
  },
]

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
            {todos.map((todo, index) => (
              <ContextMenu key={index}>
                <ContextMenuTrigger>
                  <Card className="min-w-[250px] max-sm:w-full">
                    <CardHeader className="flex items-start">
                      <div className="flex-1">
                        <p className="text-sm text-gray-500">
                          Project ID: {todo.projectId}
                        </p>
                        <CardTitle>{todo.title}</CardTitle>
                        <CardDescription>{todo.description}</CardDescription>
                      </div>
                      <Badge variant="outline">{todo.status}</Badge>
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
