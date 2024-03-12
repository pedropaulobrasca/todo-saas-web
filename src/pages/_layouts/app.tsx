import { Outlet } from 'react-router-dom'

import { MenuSidebar } from '@/components/menu-sidebar'

export function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[280px_1fr]">
      <MenuSidebar />

      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
