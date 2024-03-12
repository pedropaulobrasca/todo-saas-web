import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { MenuSidebar } from '@/components/menu-sidebar'
import { cn } from '@/lib/utils'

export function AppLayout() {
  const [isOpenMenuSidebar, setIsOpenMenuSidebar] = useState(true)

  function toggleMenuSidebar() {
    setIsOpenMenuSidebar(!isOpenMenuSidebar)
  }

  return (
    <div
      className={cn([
        'grid h-screen grid-cols-[80px_1fr] transition-all duration-200 ease-in-out',
        isOpenMenuSidebar && 'grid-cols-[280px_1fr]',
      ])}
    >
      <MenuSidebar
        onClick={toggleMenuSidebar}
        isToggleMenuSidebar={isOpenMenuSidebar}
      />

      <main className="overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
