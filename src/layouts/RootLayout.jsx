import React from 'react'
import Navbar1 from '../components/Navbar1.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const RootLayout = () => {
  return (
    <div>
        <Navbar1/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout