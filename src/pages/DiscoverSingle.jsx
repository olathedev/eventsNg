import React from 'react'
import { useParams } from 'react-router-dom'
import eventimg from '../assets/discover.jpg'

export default function DiscoverSingle() {

  const { id } = useParams()



  return (
    <div className='min-h-screen bg-[#eee]'>
       <div className="md:hidden bg-white fixed w-full bottom-0 py-6 shadow flex rounded-t-2xl justify-center">
        <button className='bg-primary text-white px-6 py-2 font-poppins rounded'>Buy ticket</button>
      </div>
      <section className="w-full max-w-full relative  bg-opacity-40" id='single-header'>
        <div className=' bg-slate-900 h-full bg-opacity-70 pt-6 pb-20 md:py-10' id=''>
          <div className='container mx-auto px-6 flex justify-between'>
            <div className="text-white font-bold font-raleway flex flex-col gap-8 justify-center">
              <h2 className='text-xl md:text-3xl font-poppins font-extrabold'>Jos food festival & Jos foodlum awards</h2>

              <div className="hidden md:flex gap-6 text-lg">
                <div className="flex gap-4 ">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>

                  </span>

                  <p>Sunday, February 25 2024</p>
                </div>

                <div className="flex gap-4">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>

                  </span>

                  <p>Sunday, February 25 2024</p>
                </div>
              </div>

            </div>

            <div className="hidden w-1/3 text-white md:flex flex-col gap-4">
              <div className="flex gap-4">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                </span>

                <p className='text-lg font-raleway font-bold'>
                  Ahmed Musa Neighbour (Event Hall) along Patrick Yakowa Way, Kaduna
                </p>
              </div>

        <button className='bg-primary text-lg text-white px-6 py-4 font-raleway rounded-md'>Buy ticket</button>

            </div>
          </div>

        </div>
      </section>


     

        <div className="mt-10 container mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3"></div>
              <div className="md:w-1/3  h-32">
                  <div className="flex flex-col">
                      <div className="relative md:static bottom-[7rem] image-wrapper w-full h-[6rem] md:h-[10rem] ">
                        <img src={eventimg} className='rounded-md' alt="" />
                      </div>
                  </div>
              </div>

              <div>
                
              </div>
          </div>
        </div>


        
    </div>
  )
}
