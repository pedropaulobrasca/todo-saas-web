import { Tornado } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 max-sm:grid-cols-1">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground max-sm:hidden">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Tornado className="h-5 w-5" />
          <span className="font-semibold">todo.saas</span>
        </div>
        <footer className="text-sm">
          &copy; todo.saas - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
        <footer className="hidden items-center gap-4 text-sm max-sm:flex">
          <Tornado className="size-3" />
          <span className="font-semibold">
            todo.saas &copy; todo.saas - {new Date().getFullYear()}
          </span>
        </footer>
      </div>
    </div>
  )
}
