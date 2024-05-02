import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Page3 from './Page3'


function Layout() {
  return (
    <>
    <div className='bg-blue-200'>
    <Navbar/>
    <Outlet />
    <Page3/>
    </div>
    </>
  )
}

export default Layout