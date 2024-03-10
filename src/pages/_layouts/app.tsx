import { Outlet } from 'react-router-dom'

import { MenuHeader } from '@/components/menu-header'

export function AppLayout() {
  return (
    <div>
      <MenuHeader />

      <div>
        <Outlet />
      </div>
    </div>
  )
}
