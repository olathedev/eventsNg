import { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import Register from './pages/Register.jsx'

function App() {
  return (
    <div className="">
    
      <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />

      </Routes>
    </div>
  )
}

export default App
