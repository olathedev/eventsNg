import { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register.Jsx'

function App() {
  return (
    <div className="">
    
      <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

      </Routes>
    </div>
  )
}

export default App
