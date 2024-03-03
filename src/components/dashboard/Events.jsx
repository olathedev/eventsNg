import React from 'react'
import event1 from '../../assets/events/event1.png'
import event2 from '../../assets/events/event2.jpg'
import event3 from '../../assets/events/event3.png'
import { useSelector } from 'react-redux'



export default function Events({ handleModal }) {

    const { events, isLoading } = useSelector((state) => state.userEvents)

    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center font-poppins">Loading...</div>
        )
    }



    return (
        <section id='events' className='px-3 md:px-6 mt-6 '>

            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="p-4 border border-gray-300 flex flex-col gap-3 items-center justify-center rounded cursor-pointer" onClick={handleModal}>
                    <div className="p-1 bg-gray-300 text-primary rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>

                    <p className='text-sm'>Create event</p>
                </div>
            </div>

            <div className="flex items-center justify-between mt-8">
                <div>
                    <p className='font-semibold hidden'>event count - {events?.length}</p>
                </div>


                <form>
                    <input type="text" className='w-full py-3 px-4 bg-primary bg-opacity-15 rounded-md focus:outline-none font-light' placeholder='search' />

                </form>
            </div>

            {!events && (
                <div className="my-16 flex justify-center">
                    <h1>You have no event running</h1>
                </div>
            )}

            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 mt-4'>

                {events?.map(event => (
                    <div className='border rounded' key={event._id}>
                        <div className="relative image h-32 max-h32 overfolow-hidden">
                            <img src={event1} className='h-full w-full rounded-t object-cover' alt="" />

                            <span className='absolute top-2 right-2 bg-primary px-2 py-1 text-sm font-quicksand font-semibold text-white rounded-md'>ended</span>
                        </div>

                        <div className="px-2 py-4 flex gap-4 justify-between">
                            <div className='flex flex-col gap-2'>
                                <h4 className='font-semibold text-secondary'>{event.title.substring(0, 20)}..</h4>
                                <p className='text-sm'>Created 10 days ago</p>
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

                ))}





            </div>
        </section>
    )
}
