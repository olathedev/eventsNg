import React from 'react'
import LandingLayout from './LandingLayout'
import Hero from '../components/landingpage/Hero'

export default function Discover() {
  return (
    <div className='w-full bg-[#eee] min-h-screen'>

        <div className='relative h-[26rem] md:h-[19rem]'>
        <div className='flex flex-col items-center' id='discover-header'>
        <div className="w-full bg-primary bg-opacity-60 px-4  py-20 flex flex-col gap-4 md:items-center justify-center md:text-center">
            <h2 className='text-white text-xl md:text-3xl font-raleway font-semibold'>Find your next Events </h2>
            <p className='font-quicksand md:text-lg text-white md:w-[40%]'>Dont sit bored this weekend, find public events happening around and purchase tickets on the go</p>
           
        </div>

        <div className="absolute bottom-0 w-[90%] md:w-[70%] searchbox bg-white px-4 rounded-md shadow-lg font-quicksand border border-solid">
            <form className='flex flex-col md:flex-row '>
                <div className='border-b md:border-r md:w-2/4'>
                    <input type="text" name="" className='p-5 w-full' placeholder='Event name' />
                </div>

                <div className='border-b md:border-r md:w-1/4'>
                    <input type="text" name="" className='p-5 w-full' placeholder='City' />
                </div>

                <div className='border-b grow'>
                    <input type="text" name="" className='p-5 w-full' placeholder='Category' />
                </div>
            </form>
</div>
   </div>
        </div>
 
   </div>
  )
}
