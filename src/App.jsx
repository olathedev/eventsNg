import Home from './pages/Home'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Verify from './pages/auth/Verify'
import axios from 'axios'
import Dashboard from './pages/dashboard/Dashboard'
import { useAuthContext } from './hooks/useAuthContext'
import { SidebarContextProvider } from './context/helperContexts'
import Discover from './pages/Discover'
import LandingLayout from './pages/LandingLayout'
import DiscoverSingle from './pages/DiscoverSingle'
import { useEffect } from 'react'
import Attend from './pages/checkout/Attend'


axios.defaults.baseURL = "http://localhost:4000/api/v1/eventsng" 
// axios.defaults.baseURL = "https://eventsng-v1.onrender.com/api/v1/eventsng"


function App() {
  const { user } = useAuthContext()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);

  return (
    <div className="">
      <SidebarContextProvider>

        <Routes>

          <Route path='/' element={<LandingLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/discover/:id' element={<DiscoverSingle />} />
            <Route path='/purchase/:id' element={<Attend />} />

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
