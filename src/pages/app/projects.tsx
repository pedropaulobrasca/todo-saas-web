import { useQuery } from '@tanstack/react-query'

import { getProjectsByUserId } from '@/api/get-projects-by-user-id'
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
import { getUserIdByToken } from '@/utils/get-userid-by-token'

export function Projects() {
  const { userId } = getUserIdByToken()

  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => getProjectsByUserId({ id: userId }),
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading projects</div>

  // Agora temos certeza de que projects é indefinido ou um array, e tratamos o caso indefinido.
  if (!projects) return <div>No projects found</div>

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
                    <TableCell>{project.title}</TableCell>
                    <TableCell className="text-right">
                      {project.todoCount || 'N/A'}
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
