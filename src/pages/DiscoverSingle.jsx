import React from 'react'
import { useParams } from 'react-router-dom'
import eventimg from '../assets/events/event3.png'
import map from '../assets/map-placeholder.jpg'
import merch from '../assets/merchs/hoodie.jpg'
import merch2 from '../assets/merchs/shirt.jpg'



import { useFetch } from '../hooks/useFetch'

export default function DiscoverSingle() {

  const { id } = useParams()

  
  const {data: event, isPending} = useFetch(`/events/discover/${id}`)


  return (
    <div className='min-h-screen bg-[#eee] pb-8'>
       <div className="md:hidden bg-white fixed w-full bottom-0 py-6 shadow flex rounded-t-2xl justify-center">
        <button className='bg-primary text-white px-6 py-2 font-poppins rounded'>Buy ticket</button>
      </div>
      <section className="w-full max-w-full relative  bg-opacity-40" id='single-header'>
        <div className=' bg-slate-900 h-full bg-opacity-70 pt-6 pb-20 md:py-10' id=''>
          <div className='container mx-auto px-6 flex justify-between'>
            <div className="text-white font-bold font-raleway flex flex-col gap-6 justify-center">
              <h2 className='text-xl md:text-3xl font-poppins font-bold tracking-wide'>{event?.title}</h2>

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
                {event?.location}
                </p>
              </div>
                  <div>
                  <button className='bg-primary text-lg text-white px-8 py-3 font-poppins rounded-md font-semibold'>Buy ticket</button>

                  </div>

            </div>
          </div>

        </div>
      </section>


     

        <div className="mt-3 md:mt-10 container mx-auto px-4 md:px-10">
          <div className="flex flex-col-reverse md:flex-row">
              <div className="md:w-2/3">


                <div className="md:w-[95%]">
                <div className="card-one bg-white shadow rounded">
                <h1 className='text-lg md:text-xl font-poppins py-4 px-4 border-b-2 '>Event Description</h1>
                <div className="md:hidden text-primary p-4 border-b-2 flex flex-col gap-3 font-poppins mt-4">
                    <div className="flex items-center gap-4">
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
                <div className="flex gap-4">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>

                </span>

                <p className='text-lg font-raleway font-bold'>
                {event?.location}
                </p>
              </div>
                    </div>
                <div>
                <p className='font-quicksand p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odio ipsam exercitationem eos illo tenetur laudantium, molestiae perferendis dolore corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in labore facilis accusantium velit asperiores nam, impedit nesciunt alias et?</p>
                </div>
                </div>
                
                <div className="bg-white shadow rounded mt-6">
                <h1 className='text-lg md:text-xl font-poppins py-4 px-4 border-b-2 '>Ticket pricing</h1>
                <div className='p-5'>
                  <table className='w-full table-auto font-poppins'>
                      <thead className='bg-[#eee] rounded-md'>
                      <tr>
                        <th className='p-3 text-start'>Ticket type</th>
                        <th className='p-3 text-start'>Price</th>

                      </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className='p-3 text-start'>Regular</td>
                          <td className='p-3 text-start'>2000</td>
                        </tr>
                      </tbody>
                  </table>
                </div>
                </div>

                <div className="bg-white shadow rounded mt-6">
                <h1 className='text-lg md:text-xl font-poppins py-4 px-4 border-b-2 '>Merchs/swags</h1>
                  <div className="p-6 grid md:grid-cols-3 gap-4">
                  <div className="card flex flex-col bg-white shadow rounded relative group">
                    <div className="card-header h-32 max-h-32 overflow-hidden bg-gray-300 rounded-t ">
                        <img src={merch} className='object-cover h-full min-h-full w-full' alt="" />
                    </div>
                    <h4 className='absolute bg-primary bg-opacity-70 text-white backdrop-blur-sm left-0 rounded-ss top-0 p-1  text-sm font-poppins'>Out of stock</h4>

                    <div className="cardbody p-2">
                        <h4 className=''>Customized Hoodie</h4>

                        <p className='text-sm'>NGN 2000</p>
                        <p className='text-sm'>Sold - 45</p>

                        <button className='hidden group-hover:flex justify-center transition-all duration-200 ease-in-out mt-2 text-sm py-2 bg-primary w-full font-quicksand text-white rounded'>place order</button>
                    </div>
                   
                </div>
                <div className="card flex flex-col bg-white shadow rounded relative group">
                    <div className="card-header h-32 max-h-32 overflow-hidden bg-gray-300 rounded-t ">
                        <img src={merch2} className='object-cover h-full min-h-full w-full' alt="" />
                    </div>
                    <h4 className='absolute bg-primary bg-opacity-70 text-white backdrop-blur-sm left-0 rounded-ss top-0 p-1  text-sm font-poppins'>Shirt</h4>

                    <div className="cardbody p-2">
                        <h4 className=''>on sale</h4>

                        <p className='text-sm'>NGN 3000</p>
                        <p className='text-sm'>Sold - 45</p>

                        <button className='hidden group-hover:flex justify-center transition-all duration-200 ease-in-out mt-2 text-sm py-2 bg-primary w-full font-quicksand text-white rounded'>place order</button>
                    </div>
                </div>
                  </div>

                  <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                 
                  </div>
                </div>
                </div>
                
                
              </div>

              <div className="md:w-1/3">
                  <div className="flex flex-col gap-3">
                      <div className="relative md:static bottom-[5rem] image-wrapper w-full h-[12rem] md:h-[15rem] ">
                        <img src={eventimg} className='rounded-md w-full h-full object-cover' alt="" />
                      </div>

                      <div className='hidden bg-white rounded-md shadow'>
                      <div className="hidden md:flex image-wrapper w-full h-[12rem] md:h-[15rem] ">
                        <img src={map} className='rounded-md w-full h-full object-cover' alt="" />
                      </div>

                      <div className='p-4'>
                        <h2>Contact organisers</h2>
                        <p>eventorganiser@gmail.com</p>
                        <p>09067391313</p>
                      </div>
                    </div>
                      
                      

                  </div>
                  
                  
              </div>  

          </div>
        </div>


        
    </div>
  )
}
