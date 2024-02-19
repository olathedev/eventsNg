import React from 'react'
import event1 from '../../assets/events/event1.png'
import event2 from '../../assets/events/event2.jpg'
import event3 from '../../assets/events/event3.png'



export default function Events({handleModal}) {
    return (
        <section id='events' className='mx-6 mt-10 '>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="h-28 p-4 border border-gray-400 flex flex-col gap-3 items-center justify-center rounded cursor-pointer" onClick={handleModal}>
                    <div className="p-2 bg-secondary bg-opacity-30 text-primary rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>

                    <p className=''>Create event</p>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 mt-10'>
               <div className='border rounded'>
                    <div className="relative image h-32 max-h32 overfolow-hidden">
                        <img src={event1} className='h-full w-full rounded-t' alt="" />

                        <span className='absolute top-2 right-2 bg-primary px-2 py-1 text-sm font-quicksand font-semibold text-white rounded-md'>ended</span>
                    </div>

                    <div className="px-2 py-4 flex justify-between">
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-semibold text-lg text-primary'>Lagos Tech fest</h4>
                            <p className=''>Created 10 days ago</p>
                        </div>

                        <div className='flex flex-col gap-2'>
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



                <div className='border rounded'>
                    <div className="relative image h-32 max-h32 overfolow-hidden">
                        <img src={event2} className='h-full w-full object-cover rounded-t' alt="" />

                        <span className='absolute top-2 right-2 bg-primary px-2 py-1 text-sm font-quicksand font-semibold text-white rounded-md'>ended</span>
                    </div>

                    <div className="px-2 py-4 flex justify-between">
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-semibold text-lg text-primary'>Google dev fest jos</h4>
                            <p className=''>ended 10 days ago</p>
                        </div>

                        <div className='flex flex-col gap-2'>
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

                
                <div className='border rounded'>
                    <div className="relative image h-32 max-h32 overfolow-hidden">
                        <img src={event3} className='h-full w-full object-cover rounded-t' alt="" />

                        <span className='absolute top-2 right-2 bg-secondary px-2 py-1 text-sm font-quicksand font-semibold text-white rounded-md'>ended</span>
                    </div>

                    <div className="px-2 py-4 flex justify-between">
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-semibold text-lg text-primary'>Jos food festival</h4>
                            <p className=''>started 10 days ago</p>
                        </div>

                        <div className='flex flex-col gap-2'>
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
            </div>
        </section>
    )
}
