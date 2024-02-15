import React from 'react'

export default function EventsTable({ handleModal }) {
    return (
        <div className="event-table mt-10 bg-white md:mx-6 px-6 py-8 rounded shadow-md border">

            <div className="flex justify-between">
                <button className='hidden bg-primary py-2 px-3 text-white rounded-md md:flex f items-center gap-2' onClick={handleModal}>
                    Create Event
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>
                <div className=''>
                    <form>

                        <div className='relative text-gray-500'>
                            <input type="text" className='py-3 px-4 border rounded-md focus:outline-none focus:border-primary font-raleway tracking-wider' placeholder='Search..' />
                            <span className='absolute right-3 top-3 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-full max-w-full overflow-x-auto mx-auto">

                <table className='mt-10 w-full table-auto font-raleway'>
                    <thead className=''>
                        <tr className='text-left bg-[#F9F6FF]'>
                            <th className='p-4'>
                                <div className="flex items-center gap-2">
                                    Event
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                    </svg>
                                </div>


                            </th>

                            <th className='p-4 '>
                                <div className="flex items-center gap-2">
                                    Created at
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                    </svg>
                                </div>


                            </th>
                            <th className='p-4 '>
                                <div className="flex items-center gap-2">
                                    Event type
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                    </svg>
                                </div>


                            </th>
                            <th className='p-4 '>Status</th>
                            <th className='p-4 '>Tickets</th>
                            <th className='p-4'>actions</th>
                            <th className='p-4'></th>


                        </tr>
                    </thead>

                    <tbody className='font-poppins'>
                        <tr className='border-b'>
                            <td className="py-5 px-4 text-sm">Jos tech fest. </td>
                            <td className="py-5 px-4 text-sm">12th Jan 2024. </td>
                            <td className='py-5 px-4 text-sm'>Public</td>

                            <td className='py-5 px-4 text-sm '>
                                <span className="bg-green-600 bg-opacity-30 py-1 px-3 rounded-full">active</span>
                            </td>
                            <td className='py-5 px-4 text-sm'>2</td>

                            <td>
                                <div className="flex items-center gap-2">
                                    <span className='text-red-600 font-semibold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                    </span>

                                    <span className="text-yellow-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>

                                    </span>

                                    
                                </div>
                            </td>

                        </tr>

                        <tr className='border-b'>
                            <td className="py-5 px-4 text-sm">Tech crunch disrupt. </td>
                            <td className="py-5 px-4 text-sm">13th feb 2024. </td>
                            <td className='py-5 px-4 text-sm'>Private</td>

                            <td className='py-5 px-4 text-sm '>
                                <span className="bg-red-600 bg-opacity-30 py-1 px-3 rounded-full">closed</span>
                            </td>
                            <td className='py-5 px-4 text-sm'>1</td>

                            <td>
                            <div className="flex items-center gap-2">
                                    <span className='text-red-600 font-semibold'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>

                                    </span>

                                    <span className="text-yellow-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>

                                    </span>

                                    
                                </div>
                            </td>
                        </tr>


                       
                        
                    </tbody>

                    <tfoot className=''>
                        <tr className='text-left bg-[#F9F6FF]'>
                            <th className='p-4'>
                                <div className="flex items-center gap-2">
                                    Event
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                    </svg>
                                </div>


                            </th>

                            <th className='p-4 '>
                                <div className="flex items-center gap-2">
                                    Created at
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                    </svg>
                                </div>


                            </th>
                            <th className='p-4 '>
                                <div className="flex items-center gap-2">
                                    Event type
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                    </svg>
                                </div>


                            </th>
                            <th className='p-4 '>Status</th>
                            <th className='p-4 '>Tickets</th>
                            <th className='p-4'>actions</th>
                            <th className='p-4'></th>


                        </tr>
                    </tfoot>

                </table>

            </div>
        </div>
    )
}
