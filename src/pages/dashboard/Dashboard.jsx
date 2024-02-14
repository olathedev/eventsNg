import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import StatCards from '../../components/dashboard/StatCards'
import DashboardDt from '../../components/dashboard/DashboardDt'

export default function Dashboard() {

  const sideBarItems = [
    { title: "Dashboard", route: "/dasboard", icon: "" },
    { title: "Attendees Management", route: "/dasboard", icon: "" },
    { title: "Event Management", route: "/dasboard", icon: "" },
    { title: "Ticket Management", route: "/dasboard", icon: "" },
    { title: "Dashboard", route: "/dasboard", icon: "" }


  ]

  return (
    <div className='w-full h-screen min-h-screen bg-[#eee] font-poppins'>
      <div className="flex w-full overflow-hidden h-full">

        <div className='hidden md:w-[20%] md:flex h-screen max-h-screen'>
        <Sidebar />

        </div>
        <div className='md:w-[80%]'>
          <Nav />

          <div className="container mx-auto px-6 mt-6">
              <StatCards />

              <section className='mt-4 grid grid-cols-2 gap-4'>
                  <DashboardDt />
                  <DashboardDt />

              </section>
          </div>
        </div>
      </div>


    </div>
  )
}
