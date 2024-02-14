import React from 'react'

function Nav() {



    return (
        <nav className='w-full bg-white py-4 px-6 shadow sticky top-0'>
            <div className="container mx-auto flex justify-between py-2">
                <div className="navbrand text-xl font-raleway font-semibold flex w-full gap-5 justify-between items-center">

                    <h2 className='hidden md:flex'>Dashboard</h2>

                    <div className="flex gap-3 items-center md:hidden">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <h2 className='flex md:hidden font-raleway'>Events <span className='text-primary font-semibold'>NG</span></h2>

                    </div>


                    <div className='flex items-center gap-1 cursor-pointer'>
                        <div className='bg-primary p-4 rounded-full'>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Nav