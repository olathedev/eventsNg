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
  return (
    <div className='w-full h-screen min-h-screen  bg-[#eee] font-poppins'>
      <div className="flex w-full  h-full">

        <div className='hidden md:w-[20%] md:flex h-screen max-h-screen overflow-hidden'>
          <Sidebar />

        </div>
        <div className='w-full md:w-[80%]  max-h-screen overflow-auto'>
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
