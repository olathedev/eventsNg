import React from 'react'
import heroImg from '../../assets/homepage.png'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <section className="container hero mx-auto hero py-20 px-4 text-white">
            <div className='flex flex-col items-center gap-3 md:gap-4'>
                <div className="bg-[#D3B3EB] bg-opacity-20 border border-primary  text-primary text-sm font-semibold font-monteserat px-4 md:px-6 py-1 md:py-1 rounded-xl flex items-center gap-2">
                  <span className='hidden md:flex'>Experience</span>Seamless Event ticketing 🚀
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-6">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>

                </div>
                <div className="flex justify-center items-center mt-2 md:mt-4">
                    <h1 className='text-3xl md:text-6xl md:max-w-[70%] text-center font-poppins font-extrabold md:leading-[4.5rem]'> Event listing and ticketing  made easy
                      <span className='text-primary'> for creators</span></h1>
                </div>

                <div className='font-poppins text-white mt-2 md:mt-4 md:w-[60%] text-center md:text-xl'>
                    <p>Teekety is an event ticketing platform.
                        Create live or virtual events, sell tickets and collect payments on the go.</p>
                </div>

                <div className='flex gap-2 md:gap-4 mt-4'>
                <Link to='/discover'>  <button className="bg-primary py-3 px-4 md:py-4 md:px-10 font-poppins text-white md:text-lg rounded-md">Find Event</button> </Link>
                <Link to='/login'>  <button className="bg-[#D3B3EB] bg-opacity-40 border border-primary px-4 py-3 md:py-4 md:px-10 font-poppins text-white md:text-lg rounded-md">Create an event</button></Link>

                </div>


                {/* <div className="img">
                    <img src={heroImg} alt="" />
                </div> */}
            </div>
        </section>
    )
}
