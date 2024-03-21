import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { createProject } from '@/api/create-project'
import { getProjectsByUserId } from '@/api/get-projects-by-user-id'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
  const [newProjectTitle, setNewProjectTitle] = useState('')

  const {
    data: projects,
    isLoading,
    isError,
    refetch, // Adicione refetch para recarregar os projetos após adicionar um novo
  } = useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: () => getProjectsByUserId({ id: userId }),
  })

  const handleAddProject = async () => {
    if (!newProjectTitle.trim()) return
    await createProject({ title: newProjectTitle, userId })
    setNewProjectTitle('')
    refetch()
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading projects</div>

  // Agora temos certeza de que projects é indefinido ou um array, e tratamos o caso indefinido.
  if (!projects) return <div>No projects found</div>

  return (
    <>
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold md:text-2xl">Projects</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="ml-auto" size="sm">
              New Project
            </Button>
          </DialogTrigger>
          <DialogOverlay className="fixed inset-0 bg-black/40" />
          <DialogContent className="flex max-w-[400px] flex-col rounded-t-[10px]">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
            </DialogHeader>
            <Input
              type="text"
              placeholder="Project Title"
              value={newProjectTitle}
              onChange={(e) => setNewProjectTitle(e.target.value)}
              className="input-class" // Substitua "input-class" pela sua classe de estilo real
            />
            <DialogFooter>
              <Button onClick={handleAddProject}>Submit</Button>
              <DialogClose>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
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
