import React, { useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import eventimg from '../assets/events/event2.jpg'
import map from '../assets/map-placeholder.jpg'
import merch from '../assets/merchs/hoodie.jpg'
import merch2 from '../assets/merchs/shirt.jpg'
import { useFetch } from '../hooks/useFetch'
import DiscoverSingleHeader from '../components/landingpage/discover/DiscoverSingleHeader'
import Tickets from '../components/landingpage/discover/Tickets'
import Attend from './checkout/Attend'
import Merch from '../components/landingpage/discover/Merch'
import Purchase from '../components/landingpage/discover/Purchase'
import { useGetMerchQuery } from '../features/api/apiSlice'

export default function DiscoverSingle() {

  const { id } = useParams()

  const { data, isPending } = useFetch(`/events/discover/${id}`)
  
  const {data: merch, isLoading} = useGetMerchQuery(id)

  const [modalOpen, setModalOpen] = useState(false)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

  if (isPending) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-sm font-poppins">Loading...</h1>
      </div>

    )
  }




  return (
    <div className='min-h-screen pb-8'>

      {modalOpen && (
        <Purchase data={data} handleModal={handleModal} />
      )}

      <div className="md:hidden bg-gray-200 fixed w-full bottom-0 py-6 shadow-xl z-10 flex rounded-t-2xl justify-center">
       
          <button className='bg-primary text-white px-6 py-3 font-poppins rounded' onClick={handleModal}>Buy ticket</button>

      </div>
      <DiscoverSingleHeader data={data} handleModal={handleModal}  />

      <div className="md:mt-10 container mx-auto px-4 md:px-10">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-2/3">

            <div className="md:w-[95%]">
              <div className="card-one  rounded">
                <h1 className='md:text-lg font-quicksand py-2 px-4 border-b-2 text-lg bg-opacity-30 font-semibold text-[#6645D5]'>Event Description</h1>
                <div className="md:hidden text-[#6645D5] px-4 py-2 border-b-2 flex flex-col gap-3 font-quicksand mt-4">
                  <div className="flex items-center gap-4">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                      </svg>

                    </span>

                    <p className='text-black font-semibold'>Sunday, February 25 2024</p>
                  </div>

                  <div className="flex gap-4">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                      </svg>

                    </span>

                    <p className='text-black font-semibold'>Sunday, February 25 2024</p>
                  </div>
                  <div className="flex gap-4">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>

                    </span>

                    <p className='text-black font-semibold'>
                      {data?.event?.location}
                    </p>
                  </div>
                </div>
               
                <div>
                  <p className='font-quicksand p-4 md:font-poppins leading8 md:text-gray-600 md:leading-8 '> {data?.event?.description} </p>
                </div>
              </div>

              <Tickets data={data} />

              <Merch data={data} merch={merch} />
            </div>


          </div>

          <div className="md:w-1/3 -mb-8">
            <div className="flex flex-col gap-3">
              <div className="relative md:static bottom-[4rem] image-wrapper w-full h-[12rem] md:h-[20rem] ">
                <img src={data?.event?.image || eventimg} className='rounded-md w-full h-full object-cover' alt="" />
              </div>

              <div className='hidden md:flex flex-col bg-white rounded-md shadow'>
                <div className="image-wrapper w-full h-[12rem] md:h-[15rem] ">
                  <img src={map} className='border-b-2 border-primary rounded-t-md w-full h-full object-cover' alt="" />
                </div>

                <div className='p-4 font-poppins flex flex-col gap-2'>
                  <h2>Contact organisers</h2>
                  <p>eventorganiser@gmail.com</p>
                  <p>09067391313</p>
                </div>
              </div>



            </div>


          </div>

        </div>
      </div>

    </div>
  )
}
