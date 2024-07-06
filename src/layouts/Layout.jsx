import React from 'react'
import Navbar1 from '../components/Navbar1'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar1/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout