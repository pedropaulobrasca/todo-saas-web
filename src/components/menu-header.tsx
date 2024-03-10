import {
  ChevronDown,
  Home,
  LogOut,
  Sun,
  Table,
  Tornado,
  User,
} from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Separator } from './ui/separator'

export function MenuHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border p-3">
      <div className="flex items-center space-x-4">
        <Tornado className="size-5" />
        <Separator orientation="vertical" className="h-8 border" />
        <nav className="flex gap-5">
          <a href="" className="flex items-center gap-2">
            <Home className="size-4" /> Home
          </a>
          <a href="" className="flex items-center gap-2">
            <Table className="size-4" /> Tarefas
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <Button variant={'outline'} className="p-2">
          <Sun className="size-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'outline'} className="flex items-center gap-1">
              <span className="max-sm:hidden">Pedro Paulo</span>
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex flex-col">
              <span>Pedro Paulo</span>
              <span className="text-sm font-normal text-muted-foreground">
                pedropaulobrasca@gmail.com
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Editar perfil</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className="text-rose-500 dark:text-rose-400"
            >
              <button className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
