import Home from './pages/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Verify from './pages/auth/Verify'
import axios from 'axios'
import Dashboard from './pages/dashboard/Dashboard'
import { useAuthContext } from './hooks/useAuthContext'
import { SidebarContextProvider } from './context/helperContexts'
import Discover from './pages/Discover'
import LandingLayout from './pages/LandingLayout'


// axios.defaults.baseURL = "http://localhost:4000/api/v1/eventsng"
axios.defaults.baseURL = "https://eventsng-v1.onrender.com/api/v1/eventsng"


function App() {
  const { user } = useAuthContext()
  return (
    <div className="">
      <SidebarContextProvider>

        <Routes>

          <Route path='/' element={<LandingLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          </Route>
         

          <Route path='/login' element={!user ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path='/register' element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
          <Route path='/verify' element={<Verify />} />
          {/* <Route path='/dashboard/*' element={user ? <Dashboard /> : <Navigate to="/login" />} /> */}
          <Route path='/dashboard/*' element={
            <Dashboard />
          } />

        </Routes>
      </SidebarContextProvider>

    </div>
  )
}

export default App
