import React from 'react'
import heroImg from '../../assets/homepage.png'

export default function Hero() {
    return (
        <section className="container mx-auto hero mt-10 px-4">
            <div className='flex flex-col items-center gap-3 md:gap-4'>
                <div className="bg-primary text-primary text-sm font-semibold font-monteserat bg-opacity-30 px-4 md:px-6 py-1 md:py-2 rounded-full flex flex-shrink items-center gap-4">
                   Seamless Event ticketing 🚀
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-6">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>

                </div>
                <div className="flex justify-center items-center md:mt-4">
                    <h1 className='text-slate-900 text-4xl md:text-6xl md:max-w-[70%] text-center font-poppins font-extrabold md:leading-normal'> Event Listing and Ticketing  Made Easy
                        for Creators</h1>
                </div>

                <div className='font-poppins text-gray-700 mt-4 md:w-[60%] text-center md:text-xl'>
                    <p>Events.ng is an event ticketing platform for experiences in Nigeria.
                        Create live or virtual events, sell tickets and collect payments on the go.</p>
                </div>

                <div className='flex gap-3 mt-4'>
                    <button className="bg-primary py-3 px-2 md:py-4 md:px-10 font-monteserat text-white md:text-lg rounded-md">Find your next Event</button>
                    <button className="bg-gray-200 px-2 py-3 md:py-4 md:px-10 font-raleway font-semibold text-black md:text-lg rounded-md">Create an event</button>

                </div>


                <div className="img">
                    <img src={heroImg} alt="" srcset="" />
                </div>
            </div>
        </section>
    )
}
