import React, { useEffect, useState } from 'react'
import LandingLayout from './LandingLayout'
import Hero from '../components/landingpage/Hero'
import DiscoverHeader from '../components/landingpage/discover/DiscoverHeader'
import eventImage from '../assets/events/event1.png'
import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useGetAllEventsQuery } from '../features/api/apiSlice'

export default function Discover() {
   
    // const {data, isPending} = useFetch('/events/discover')
    const {data, isLoading, error} = useGetAllEventsQuery()

    return (
        <div className='w-full min-h-screen pb-16'>

            <DiscoverHeader />

            <section className=' container mx-auto px-6 md:px-6 mt-3 md:mt-10' id='Events'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-y-8 md:gap-x-6">
                    {isLoading && [1,2,3,4,5,6].map((ske, index) => (

                     

                       
                        <div className="flex flex-col gap-2" key={index}>
                            <div className="bg-gray-300 animate-pulse rounded-md h-[10rem]"></div>

                            <div className="bg-gray-300 animate-pulse p-2 rounded-full"></div>

                            <div className="bg-gray-300 w-2/3 animate-pulse p-2 rounded-full"></div>

                            <div className="bg-gray-300 w-1/2 animate-pulse p-2 rounded-full"></div>

                        </div>
                    ))}

                    {data && data?.event?.map((event) => (
                        <div className="event-card cursor-pointer hover:translate-y-1 transition-all duration-200 ease-in-out p-3 bg-white shadow hover:bg-white hover:shadow-md rounded-md" key={event._id}>
                            <Link to={`/discover/${event._id}`}>
                            <div className="image h-[10rem] overflow-hidden">
                                <img src={event.image || eventImage} className='h-full w-full rounded-md rounded-t object-cover' alt="" />
                            </div>


                            <div className=' flex flex-col gap-2 py-3 px-1'>
                                <h2 className="md:text-lg font-quicksand uppercase font-semibold">{event.title}</h2>
                                <div className="flex gap-2 items-center font-quicksand text-sm">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                        </svg>

                                    </span>
                                    <p>{event.location}</p>
                                </div>

                                <div className="flex gap-2 items-center font-quicksand">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                                        </svg>


                                    </span>
                                    <p>Physical event</p>
                                </div>
                               
                               
                            </div>
                            <div className="border-t py-2 px-4 flex justify-between font-quicksand text-primary">
                                    <p>Tickets available</p>

                                </div>
                                </Link>
                        </div>

                    ))}


                </div>
            </section>

                            

        </div>
    )
}
