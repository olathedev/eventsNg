import React from 'react'
import Nav from '../../components/dashboard/Nav'
import Sidebar from '../../components/dashboard/Sidebar'
import StatCards from '../../components/dashboard/StatCards'
import DashboardDt from '../../components/dashboard/DashboardDt'
import DashboardChart from '../../components/dashboard/DashboardChart'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import EventManagement from './EventManagement'
import TicketManagement from './TicketManagement'
import EventBookings from './EventBookings'
import PaymentManagement from './PaymentManagement'
import MerchStore from './MerchStore'
import Footer from '../../components/dashboard/Footer'
import NotFound from './NotFound'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAuthContext } from '../../hooks/useAuthContext'
import { SidebarContextProvider, useSidebaarContext } from '../../context/helperContexts'

export default function Dashboard() {

    const {user} = useAuthContext()
    
    const {data} = useQuery({
      queryKey: ['Get Events'],
      queryFn: async () => {
        const response = await axios.get('/events/stats', {
          headers: {
            'Authorization': `Bearer ${user}`
          }
        })
        return response.data
        
      }
    })

    console.log(data);

    const {sidebarOpen, setSidebarOpen} = useSidebaarContext()
  return (

    <div className='w-full h-screen min-h-screen  bg-[#F9F6FF] font-poppins'>
      <div className="flex w-full  h-full">


        <div className={`${sidebarOpen ? 'enabled' : 'hidden'} absolute md:static md:flex left-0 top-0 z-20 w-[75%] md:w-[20%] h-screen max-h-screen overflow-hidden lg:translate-x-0 duration-300 ease-linear`}>

          <Sidebar />

        </div>
        <div className=' max-h-screen grow overflow-auto'>

        
          <Nav />

          <Routes>
            <Route path='/' element={<Home stats={data?.defaultStats}  />} />
            <Route path='/events' element={<EventManagement />} />
            <Route path='/ticketing' element={<TicketManagement />} />
            <Route path='/bookings' element={<EventBookings />} />
            <Route path='/payment' element={<PaymentManagement />} />
            <Route path='/merch' element={<MerchStore />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          {/* <Footer /> */}

        </div>

      </div>


    </div>
 
  )
}
