import { Home, Layout, List, Tornado } from 'lucide-react'

import { Avatar, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Separator } from './ui/separator'

export function MenuSidebar() {
  const active = true

  return (
    <div className="border-r">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center px-6">
          <a className="flex items-center gap-2 font-semibold" href="#">
            <Tornado className="h-6 w-6" />
            <span className="max-sm:hidden">todo.saas</span>
          </a>
        </div>
        <Separator />
        <div className="mt-4 flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Button
              asChild
              className="flex justify-start"
              variant={active ? 'outline' : 'ghost'}
            >
              <a className="flex items-center gap-3 rounded-lg py-2" href="#">
                <Home className="size-4" />
                <span>Home</span>
              </a>
            </Button>
            <Button asChild className="flex justify-start" variant={'ghost'}>
              <a className="flex items-center gap-3 rounded-lg py-2" href="#">
                <List className="size-4" />
                Tasks
              </a>
            </Button>
            <Button asChild className="flex justify-start" variant={'ghost'}>
              <a className="flex items-center gap-3 rounded-lg py-2" href="#">
                <Layout className="size-4" />
                Projects
              </a>
            </Button>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="sm">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
        <div>
          <Separator />
          <DropdownMenu>
            <DropdownMenuTrigger className="m-4 flex justify-start gap-4">
              <Avatar>
                <AvatarFallback>PP</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h2 className="text-sm font-semibold">Pedro Paulo</h2>
                <p className="text-xs">pedropaulobrasca@gmail.com</p>
              </div>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
