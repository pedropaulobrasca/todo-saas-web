import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Dashboard() {
  function handleContextMenu() {
    switch ((event?.target as HTMLElement)?.textContent) {
      case 'Profile':
        alert('Profile')
        break
      case 'Billing':
        alert('Billing')
        break
      case 'Team':
        alert('Team')
        break
      case 'Subscription':
        alert('Subscription')
        break
    }
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold md:text-2xl">Tasks</h1>
        <Button className="ml-auto" size="sm">
          New Task
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 20 }).map((_, index) => (
              <ContextMenu key={index}>
                <ContextMenuTrigger>
                  <Card className="min-w-[250px] max-sm:w-full">
                    <CardHeader className="flex items-start">
                      <div className="flex-1">
                        <CardTitle>Fix bugs</CardTitle>
                        <CardDescription>Resolve open issues</CardDescription>
                      </div>
                      <Badge variant="outline">In progress</Badge>
                    </CardHeader>
                  </Card>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem onClick={handleContextMenu}>
                    Edit
                  </ContextMenuItem>
                  <ContextMenuItem onClick={handleContextMenu}>
                    Done
                  </ContextMenuItem>
                  <ContextMenuItem onClick={handleContextMenu}>
                    Delete
                  </ContextMenuItem>
                  <ContextMenuItem onClick={handleContextMenu}>
                    Subscription
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
        <Button className="ml-auto" size="sm">
          New Project
        </Button>
      </div>
      <Card>
        <CardContent className="p-0">
          <div className="overflow-auto">
            <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-6" />
                  <TableHead className="w-6">ID</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead className="text-right">Tasks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-gray-100 dark:bg-gray-800/40">
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">1</TableCell>
                  <TableCell className="font-medium">ACME Inc</TableCell>
                  <TableCell className="text-right">5</TableCell>
                </TableRow>
                <TableRow className="bg-gray-100 dark:bg-gray-800/40">
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">2</TableCell>
                  <TableCell className="font-medium">Widgets Ltd</TableCell>
                  <TableCell className="text-right">3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">3</TableCell>
                  <TableCell className="font-medium">TaskMaster</TableCell>
                  <TableCell className="text-right">10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">4</TableCell>
                  <TableCell className="font-medium">ProjectHub</TableCell>
                  <TableCell className="text-right">7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">5</TableCell>
                  <TableCell className="font-medium">CodeGenius</TableCell>
                  <TableCell className="text-right">12</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
