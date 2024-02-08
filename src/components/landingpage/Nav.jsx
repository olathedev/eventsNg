import React from 'react'

export default function Nav() {
    return (

        <nav className='py-4 md:pt-8 md:pb-4'>
            <div className="container mx-auto flex justify-between items-center">
                <div className="nav-brand font-raleway text-2xl font-semibold">Events<span className='text-primary font-bold'>.ng</span></div>

                <div>
                    <ul className='flex items-center gap-4 font-poppins'>
                        <li className='nav-items'>Home</li>

                        <div className="relative whitespace-nowrap">
                        <li className='flex items-center justify-center gap-1 nav-items group'>
                            Discover
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>

                            <nav className="hidden absolute group-hover:md:flex w-[208px] -left-8 top-full py-4 px-5 flex-col gap-3 bg-white shadow-md">
                                <div className='sub-nav'>Discover events</div>
                                <div className='sub-nav'>Discover events</div>
                                <div className='sub-nav'>Discover events</div>
                                <div className='sub-nav'>Discover events</div>

                            </nav>

                        </li>  
                        </div>
                       

                        <li className='nav-items'>Products</li>
                        <li className='nav-items'>About</li>
                        <li className='nav-items'>Faq</li>


                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                        <button className="bg-primary py-3 px-6 font-poppins text-white rounded">Login</button>
                        <button className="bg-gray-200 py-3 px-6 font-poppins text-black rounded">Sign     up</button>

                        {/* <button className="bg-primary py-2 px-4">Login</button> */}

                </div>

            </div>
        </nav>

    )
}
