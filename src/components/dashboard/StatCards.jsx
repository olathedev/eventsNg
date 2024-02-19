import React from 'react'

export default function StatCards({stats}) {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            <div className='py-4 px-5 bg-white shadow-sm rounded'>
                <div className="flex flex-col">

                    <h4 className='font-poppins'>Total Events</h4>
                    <h1 className='font-raleway text-2xl font-bold'>21</h1>

                    <div className="flex mt-2 justify-between items-center">
                        <div className='text-primary font-semibold'></div>

                        <div className="flex bg-primary bg-opacity-30 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                        </div>
                    </div>



                </div>
            </div>


            <div className='py-4 px-5 bg-white shadow-sm rounded'>
                <div className="flex flex-col">


                    
                    <h4 className='font-poppins'>Active events</h4>
                    <h1 className='text-2xl font-bold '>{stats?.isActive}</h1>

                    <div className="flex mt-2 justify-between items-center">
                        <div className='text-primary font-semibold'></div>

                        <div className="flex bg-primary bg-opacity-30 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>

                        </div>
                    </div>



                </div>
            </div>

            <div className='py-4 px-5 bg-white shadow-sm rounded'>
                <div className="flex flex-col">



                    <h4 className='font-poppins'>Tickets created</h4>
                    <h1 className='font-raleway text-2xl font-bold'>{stats?.tickets}</h1>
                    

                    <div className="flex mt-2 justify-between items-center">
                    <div className='text-primary font-semibold'></div>
                        <div className="flex bg-primary bg-opacity-30 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                            </svg>

                        </div>
                    </div>



                </div>
            </div>

            <div className='py-4 px-5 bg-white shadow-sm rounded'>
                <div className="flex flex-col">



                    <h4 className='font-poppins'>Merchs</h4>
                    <h1 className='font-raleway text-2xl font-bold'>20</h1>

                    <div className="flex mt-2 justify-between items-center">
                        <div className='text-primary font-semibold'></div>

                        <div className="flex bg-primary bg-opacity-30 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>


                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
