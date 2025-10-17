import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function Layout() {
  return (
     <>
      <Navbar />
      <Outlet />
      <div className="bg-black h-full w-full"></div>
    </>
  )
}

export default Layout
