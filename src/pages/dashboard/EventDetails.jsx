import React from 'react'
import { Header } from '../../components/dashboard/eventDetails/Header'
import { useGetUserEventsSingleQuery } from '../../features/api/apiSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import { Deatils } from '../../components/dashboard/eventDetails/Details'
import { Tickets } from '../../components/dashboard/eventDetails/Tickets'

function EventDetails() {

  const {id} = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get('page') || "Details"

  console.log(page);
  const handleSp = (value) => {
    setSearchParams({page: value})
  }

  const {data} = useGetUserEventsSingleQuery(id)

  return (
    <div className='min-h-screen bg-white'>
       <Header data={data} handleSp={handleSp} page={page} />

        <section className="px-10 py-8">
       <Deatils page={page} data={data} />
          <Tickets page={page} data={data} />
        </section>
    </div>
  )
}

export default EventDetails