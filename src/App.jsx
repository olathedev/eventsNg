import { useState } from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className="">
    
      <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
