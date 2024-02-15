import React from 'react'

export default function AddEventModal({ handleModal }) {
    return (
        <div className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-20 backdrop-blur-sm z-30 px-2`}>
            <div className="bg-white md:w-[40%] rounded md:-mr-10 border-b-2 border-b-primary transition-all duration-200 ease-in-out">
                <div className="modal-header flex gap-5 justify-between items-center px-4 py-4 border-b-2">

                    <div>
                        <h2 className="text-lg font-poppins">Add new event</h2>
                        <p className='text-primary'>* Youre about to create an event</p>
                    </div>

                    <div className='cursor-pointer' onClick={handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>
                </div>

                <div className="modal-body py-4 px-6">
                    <form action="" className='container flex flex-col gap-6 font-monteserat'>
                        <div className="relative">
                            <input type="text" className='w-full border-b border-gray-400 px-1 py-1 focus:outline-none' placeholder='event name ' />

                            <span className="absolute right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>

                            </span>
                        </div>

                        <div className='relative'>
                            <input type="text" className='w-full border-b border-gray-400 px-1 py-1 focus:outline-none' placeholder='event location ' />

                            <span className='absolute right-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>

                        </div>


                        <div className="flex gap-4 text-sm">
                            <input type="date" className='w-1/2 border-b  border-gray-400 px-1 py-1 focus:outline-none' placeholder='date ' />

                            <input type="time" className='w-1/2 border-b border-gray-400 px-1 py-1 focus:outline-none' placeholder='time ' />

                        </div>

                        <div className="flex">
                            <div className="bg-gray-200 h-20 p-6 rounded flex gap-1 cursor-pointer items-center text-sm font-poppins">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>

                                </span>
                                <span>Upload Image</span>

                                <input type="file" className='hidden' />
                            </div>
                        </div>

                        <div>
                        <div className='flex gap-6'>
                            
                            <input type="number"  className='w-1/2 border-b border-gray-400 px-1 py-1 focus:outline-none' placeholder='available seats' />

                                <select className='w-1/2 border-b border-gray-400 px-1 py-1 focus:outline-none' name="">
                                    <option value="" >Private event</option>
                                    <option value="">Public event</option>
                                </select>

                        </div>
                        <p className="text-sm mt-2 text-primary">Public events are listed on events.ng and anody can find them</p>

                        </div>
                        

                    </form>
                </div>
            </div>
        </div>
    )
}
