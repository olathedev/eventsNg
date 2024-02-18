import React from 'react'
import StatCards from '../../components/dashboard/StatCards'
import DashboardDt from '../../components/dashboard/DashboardDt'
import DashboardChart from '../../components/dashboard/DashboardChart'

export default function Home({stats}) {

  return (
    <div className="container mx-auto h-screen px-4 md:px-6 mt-6">

            <h1 className='text-lg font-monteserat font-semibold mb-6 pl-2 text-gray-700'>Dashboard</h1>
              <StatCards stats={stats} />
              <section className='w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <DashboardDt />
                  <DashboardChart />
              </section>
          </div>
  )
}
