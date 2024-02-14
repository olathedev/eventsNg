import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import StatCards from '../../components/dashboard/StatCards'
import DashboardDt from '../../components/dashboard/DashboardDt'
import DashboardChart from '../../components/dashboard/DashboardChart'

export default function Dashboard() {

  const sideBarItems = [
    { title: "Dashboard", route: "/dasboard", icon: "" },
    { title: "Attendees Management", route: "/dasboard", icon: "" },
    { title: "Event Management", route: "/dasboard", icon: "" },
    { title: "Ticket Management", route: "/dasboard", icon: "" },
    { title: "Dashboard", route: "/dasboard", icon: "" }


  ]

  return (
    <div className='w-full h-screen min-h-screen  bg-[#eee] font-poppins'>
      <div className="flex w-full  h-full">

        <div className='hidden md:w-[20%] md:flex h-screen max-h-screen overflow-hidden'>
        <Sidebar />

        </div>
        <div className='w-full md:w-[80%]  max-h-screen overflow-auto'>
          <Nav />

          <div className="container mx-auto h-screen px-2 md:px-6 mt-6">
              <StatCards />

              <section className='w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <DashboardDt />
                  <DashboardChart />

              </section>
          </div>
        </div>
      </div>


    </div>
  )
}
