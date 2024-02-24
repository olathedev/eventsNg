import React from 'react'
import Nav from '../components/landingpage/Nav'
import { Outlet } from 'react-router-dom'

function LandingLayout() {
  return (
    <div>
        <Nav />
        <Outlet />
    </div>
  )
}

export default LandingLayout