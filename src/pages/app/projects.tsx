import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Project } from '@/types/types'

const projects: Project[] = [
  {
    id: 1,
    name: 'Website Redesign',
    tasksCount: 10,
  },
  {
    id: 2,
    name: 'New Marketing Plan',
    tasksCount: 4,
  },
  {
    id: 3,
    name: 'Product Launch',
    tasksCount: 20,
  },
  {
    id: 4,
    name: 'Infrastructure Upgrade',
    tasksCount: 8,
  },
  {
    id: 5,
    name: 'Customer Feedback Initiative',
    tasksCount: 15,
  },
]

export function Projects() {
  return (
    <>
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
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell></TableCell>
                    <TableCell>{project.id}</TableCell>
                    <TableCell>{project.name}</TableCell>
                    <TableCell className="text-right">
                      {project.tasksCount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
