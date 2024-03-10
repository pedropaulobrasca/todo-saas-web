import { ChevronDown, Home, LampCeiling, Table, Tornado } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Separator } from './ui/separator'

export function MenuHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border p-3">
      <div className="flex items-center space-x-4">
        <Tornado className="size-8" />
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
          <LampCeiling className="size-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'outline'} className="flex items-center gap-1">
              Pedro Paulo
              <ChevronDown className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>1</DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
