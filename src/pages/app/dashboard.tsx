import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Dashboard() {
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
          <div className="overflow-auto">
            <Table className="min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-6" />
                  <TableHead className="w-6">ID</TableHead>
                  <TableHead className="w-6">Project</TableHead>
                  <TableHead>Task</TableHead>
                  <TableHead className="text-right">Due</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-gray-100 dark:bg-gray-800/40">
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">1</TableCell>
                  <TableCell className="w-6">ACME Inc</TableCell>
                  <TableCell className="font-medium">
                    Update homepage hero section
                  </TableCell>
                  <TableCell className="text-right">2 hours</TableCell>
                </TableRow>
                <TableRow className="bg-gray-100 dark:bg-gray-800/40">
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">2</TableCell>
                  <TableCell className="w-6">ACME Inc</TableCell>
                  <TableCell className="font-medium">
                    Fix broken links on pricing page
                  </TableCell>
                  <TableCell className="text-right">1 day</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">3</TableCell>
                  <TableCell className="w-6">ACME Inc</TableCell>
                  <TableCell className="font-medium">
                    Implement dark mode across the app
                  </TableCell>
                  <TableCell className="text-right">1 week</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">4</TableCell>
                  <TableCell className="w-6">ACME Inc</TableCell>
                  <TableCell className="font-medium">
                    Add support for video calls
                  </TableCell>
                  <TableCell className="text-right">2 weeks</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="w-6">
                    <Checkbox defaultChecked />
                  </TableCell>
                  <TableCell className="w-6">5</TableCell>
                  <TableCell className="w-6">ACME Inc</TableCell>
                  <TableCell className="font-medium">
                    Redesign the onboarding process
                  </TableCell>
                  <TableCell className="text-right">1 month</TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
