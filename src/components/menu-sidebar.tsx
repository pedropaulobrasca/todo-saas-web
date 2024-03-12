import { Home, Layout, List, Tornado } from 'lucide-react'

import { cn } from '@/lib/utils'

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

interface MenuSidebarProps {
  onClick: () => void
  isToggleMenuSidebar: boolean
}

export function MenuSidebar({
  onClick,
  isToggleMenuSidebar,
}: MenuSidebarProps) {
  const isPathActive = (pathname: string) => {
    return window.location.pathname === pathname
  }

  return (
    <div className="border-r transition-all" onClick={onClick}>
      <div className="flex h-full flex-col">
        <div
          className={cn([
            'flex h-16 items-center px-6',
            !isToggleMenuSidebar && 'justify-center',
          ])}
        >
          <a className="flex items-center gap-2 font-semibold" href="#">
            <Tornado className="h-6 w-6" />
            <span className={cn(!isToggleMenuSidebar ? 'hidden' : 'block')}>
              todo.saas
            </span>
          </a>
        </div>
        <Separator />
        <div className="mt-4 flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Button
              asChild
              className="flex justify-start"
              variant={isPathActive('/app') ? 'outline' : 'ghost'}
            >
              <a className="flex items-center gap-3 rounded-lg py-2" href="#">
                <Home className="size-4" />
                <span className={cn(!isToggleMenuSidebar ? 'hidden' : 'block')}>
                  Home
                </span>
              </a>
            </Button>
            <Button asChild className="flex justify-start" variant={'ghost'}>
              <a className="flex items-center gap-3 rounded-lg py-2" href="#">
                <List className="size-4" />
                <span className={cn(!isToggleMenuSidebar ? 'hidden' : 'block')}>
                  Tasks
                </span>
              </a>
            </Button>
            <Button asChild className="flex justify-start" variant={'ghost'}>
              <a className="flex items-center gap-3 rounded-lg py-2" href="#">
                <Layout className="size-4" />
                <span className={cn(!isToggleMenuSidebar ? 'hidden' : 'block')}>
                  Projects
                </span>
              </a>
            </Button>
          </nav>
        </div>
        <div
          className={cn(
            ['mt-auto p-4'],
            isToggleMenuSidebar ? 'block' : 'hidden',
          )}
        >
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
          <div className={cn(!isToggleMenuSidebar && 'flex justify-center')}>
            <DropdownMenu>
              <DropdownMenuTrigger className="m-4 flex justify-start gap-4">
                <Avatar>
                  <AvatarFallback>PP</AvatarFallback>
                </Avatar>
                <div
                  className={cn(
                    isToggleMenuSidebar
                      ? 'flex flex-col items-start'
                      : 'hidden',
                  )}
                >
                  <h2 className="text-sm font-semibold">Pedro Paulo</h2>
                  <p className="text-xs">pedropaulobrasca@gmail.com</p>
                </div>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
