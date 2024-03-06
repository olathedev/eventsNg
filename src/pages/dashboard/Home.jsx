import React from 'react'
import StatCards from '../../components/dashboard/StatCards'
import DashboardDt from '../../components/dashboard/DashboardDt'
import DashboardChart from '../../components/dashboard/DashboardChart'

export default function Home() {

  return (
    <div className="container mx-auto min-h-screen px-6 md:px-6 mt-6 mb-6">

              <StatCards />
              <section className='w-full mt-6 flex flex-col md:flex-row gap-6'>

                <div className="md:w-[40%]">
                <DashboardChart />

                </div>

                <div className="md:w-[60%]">

                  <DashboardDt />
                  </div>
              </section>
          </div>
  )
}
