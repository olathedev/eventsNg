import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Verify from './pages/Verify'
import axios from 'axios'


axios.defaults.baseURL = "http://localhost:4000/api/v1/eventsng/auth"

function App() {
  return (
    <div className="">
    
      <Routes>

          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/verify' element={<Verify />} />
          <Route path='/verify-account/:token' element={<Verify />} />
          
      </Routes>
    </div>
  )
}

export default App
