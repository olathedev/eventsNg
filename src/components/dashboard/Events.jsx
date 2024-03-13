import React from 'react'
import event1 from '../../assets/events/event1.png'
import event2 from '../../assets/events/event2.jpg'
import event3 from '../../assets/events/event3.png'
import { useSelector } from 'react-redux'
import { formatDistanceToNow, formatRelative, subDays } from 'date-fns'
import { Link } from 'react-router-dom'


export default function Events({ handleModal, events, isLoading, error }) {

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center font-poppins">Loading...</div>
        )
    }

  
    


    return (
        <section id='events' className='md:px-6 mt-4 '>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
                <div className="p-4 border border-gray-300 flex flex-col gap-3 items-center justify-center rounded cursor-pointer" onClick={handleModal}>
                    <div className="p-1 bg-gray-300 text-primary rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>

                    <p className='text-sm'>Create event</p>
                </div>

                <div className="bg-secondary text-white border border-gray-300 rounded p-4 flex flex-col gap-2">
                    <h1 className="text-lg font-semibold px-2">{events?.events?.length}</h1>
                    <p className="text-sm">Total event</p>

                </div>
            </div>

            <div className="md:flex items-center justify-between mt-8 w-full max-w-full overflow-hidden">
                <div className='overflow-items hidden md:flex gap-3'>
                    <div className="px-4 py-1 text-white text-sm bg-primary bg-opacity-85 rounded-full">
                        newest
                    </div>
                    <div className="px-4 py-1 text-secondary text-sm border border-secondary bg-opacity-85 rounded-full">
                        older
                    </div>

                    <div className="px-4 py-1 text-secondary text-sm border border-secondary bg-opacity-85 rounded-full">
                        active
                    </div>
                    <div className="px-4 py-1 text-secondary text-sm border border-secondary bg-opacity-85 rounded-full">
                        ended
                    </div>

                </div>


                <form className='flex'>
                    <input type="text" className='w-full py-3 px-4 bg-primary bg-opacity-15 rounded-md focus:outline-none font-light' placeholder='search' />

                </form>
            </div>

            {events?.events?.length < 1 && (
                <div className=" flex justify-center my-16">
                    <h1>You have no event running</h1>
                </div>
            )}

            {error && (
                  <div className="flex my-16 justify-center font-poppins">Something went wrong, try again</div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 mt-4 px-3'>

                {events?.events?.map(event => (

                    <Link to={`${event._id}`} key={event._id}>
                    <div className='border rounded'>
                        <div className="relative image h-32 max-h32 overfolow-hidden">
                            <img src={event.image} className='h-full w-full rounded-t object-cover' alt="" />

                            <span className={`absolute ${event.isActive ? "bg-green-800" : "bg-red-700"} top-2 right-2  px-2 py-1 text-sm font-quicksand font-semibold text-white rounded-md`}>{event.isActive ? "Active" : "ended"}</span>
                        </div>

                        <div className="px-2 py-4 flex gap-4 justify-between">
                            <div className='flex flex-col gap-2'>
                                <h4 className='font-semibold text-secondary'>{event.title.substring(0, 20)}..</h4>
                                <p className='text-sm'>{formatRelative(new Date(event.createdAt), new Date())}</p>
                            </div>

                            <div className='flex flex-col items-center justify-center gap-2'>
                                <span className='flex gap-1 justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                    </svg>
                                    <span>0</span>
                                </span>
                                <p className='text-sm'>tickets sold</p>
                            </div>
                        </div>
                    </div>
                    </Link>

                ))}





            </div>
        </section>
    )
}
