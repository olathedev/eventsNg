import React, { useState } from 'react'
import { Header } from '../../components/dashboard/eventDetails/Header'
import { useGetUserEventsSingleQuery } from '../../features/api/apiSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import { Deatils } from '../../components/dashboard/eventDetails/Details'
import { Tickets } from '../../components/dashboard/eventDetails/Tickets'
import { AddticketModal } from '../../components/dashboard/eventDetails/AddticketModal'

function EventDetails() {

  const {id} = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get('page') || "Details"

  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

  console.log(page);
  const handleSp = (value) => {
    setSearchParams({page: value})
  }

  const {data} = useGetUserEventsSingleQuery(id)

  return (
    <div className='min-h-screen bg-white'>

      {/* {modalOpen && (
        <AddticketModal modalOpen={modalOpen} handleModal={modalOpen} />

      )} */}

<AddticketModal modalOpen={modalOpen} handleModal={handleModal} />

       <Header data={data} handleSp={handleSp} page={page} />

        <section className="px-10 py-8">
       <Deatils page={page} data={data} />
          <Tickets page={page} data={data} handleModal={handleModal} />
        </section>
    </div>
  )
}

export default EventDetails