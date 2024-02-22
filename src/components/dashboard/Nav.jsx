import React from 'react'
import { useSidebaarContext } from '../../context/helperContexts'
import user from "../../assets/user.jpg"

function Nav() {

    const { sidebarOpen, setSidebarOpen } = useSidebaarContext()

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <nav className='w-full bg-white py-4 px-6 shadow sticky top-0 z-20'>
            <div className="container mx-auto flex justify-between py-2">
                <div className="navbrand text-lg font-raleway font-semibold flex w-full gap-5 justify-between items-center">
                    <div className="flex gap-3 items-center md:hidden">

                        <span className={`${sidebarOpen ? 'hidden' : 'flex'}`} onClick={handleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </span>
                        <span className={`${sidebarOpen ? 'flex' : 'hidden'}`} onClick={handleSidebar}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </span>

                        <h2 className='flex md:hidden font-raleway font-semibold text-primary text-xl'>Events <span className='text-primary font-semibold'>.ng</span></h2>

                    </div>
                    <h1 className='hidden md:flex font-monteserat font-semibold pl-2 text-gray-700'>Welcome back, Olaoluwa Johnson</h1>
                </div>




                <div className='flex items-center gap-4 md:gap-6'>

                    <form className='w-[15rem] hidden md:flex'>
                        <input type="text" className='w-full py-2 px-4 bg-primary bg-opacity-15 rounded-md focus:outline-none font-light' placeholder='search' />
                    </form>

                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                        </svg>

                    </span>
                    <div className='relative flex items-center gap-1 cursor-pointer group'>

                        <div className='bg-primary h-8 w-8 rounded-full'>
                            <img src={user} className='object-cover rounded-full' alt="" />
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>

                            <nav className='hidden absolute bg-white top-full right-1 p-5 group-hover:flex rounded-b-md flex-col gap-2 shadow-md'>
                     
                                    <div className='text-sm hover:text-primary'>Account</div>
                                    <div className='text-sm hover:text-primary'>Settings</div>
                                    <div className='text-sm hover:text-primary'>Logout</div>
                            </nav>

                        {/* <div className="relative whitespace-nowrap">
                            <li className='flex items-center justify-center gap-1 nav-items group'>
                                Discover
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>

                                <nav className="hidden absolute group-hover:md:flex w-[208px] -left-8 top-full py-4 px-5 flex-col gap-3 bg-white shadow-md">
                                    <div className='sub-nav'>All Events</div>
                                    <div className='sub-nav'>Events around you</div>
                                    <div className='sub-nav'>Discover events</div>
                                    <div className='sub-nav'>Discover events</div>

                                </nav>

                            </li>
                        </div> */}

                    </div>



                </div>

            </div>
        </nav>
    )
}

export default Nav