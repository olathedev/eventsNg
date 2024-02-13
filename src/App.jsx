import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Verify from './pages/auth/Verify'
import axios from 'axios'
import Dashboard from './pages/dashboard/Dashboard'


// axios.defaults.baseURL = "http://localhost:4000/api/v1/eventsng"
axios.defaults.baseURL = "https://eventsng-v1.onrender.com/api/v1/eventsng"


function App() {
  return (
    <div className="">
    
      <Routes>

          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/verify-account/:token' element={<Verify />} />
          <Route path='/dashboard' element={<Dashboard />} />

          
      </Routes>
    </div>
  )
}

export default App
