import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Page3 from './Page3'


function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Page3/>
    </>
  )
}

export default Layout