import React from 'react'
import Nav from '../components/landingpage/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/landingpage/Footer'

function LandingLayout() {
  return (
    <div>
        <Nav />
        <Outlet />

        <Footer />
    </div>
  )
}

export default LandingLayout