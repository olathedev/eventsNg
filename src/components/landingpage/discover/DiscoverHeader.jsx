import axios from 'axios'
import React, { useState } from 'react'

export default function DiscoverHeader() {

   
    

    return (
        <div className='relative h-[26rem] md:h-[19rem]'>
            <div className='flex flex-col items-center' id='discover-header'>
                <div className="w-full bg-black bg-opacity-60 px-4  py-20 flex flex-col gap-4 md:items-center justify-center md:text-center">
                    <h2 className='text-white text-2xl md:text-4xl font-poppins font-semibold'>Find your next Events </h2>
                    <p className='font-quicksand md:text-xl text-white md:w-[40%]'>Dont sit bored this weekend, find public events happening around and purchase tickets on the go</p>

                </div>

                <div className="absolute bottom-0 w-[90%] md:w-[70%] searchbox bg-white rounded-md shadow-lg font-quicksand md:text-lg">
                    <form className='flex flex-col md:flex-row '>
                        <div className='border-b md:border-r md:grow'>
                            <input type="text" name="" className='rounded-t-md rounded-l-md p-4 w-full' placeholder='Event name' />
                        </div>

                        <div className='border-b md:border-r md:w-[30%]'>
                            <input type="text" name="" className='p-4 w-full' placeholder='City' />
                        </div>

                        <div className='border-b md:w-[30%] flex gap-6 items-center px-3 '>
                            <select defaultValue="option1" className='appearance-none py-3 focus:outline-none w-full border-n px-4'>
                                <option value="option1" className='text-gray-300'>All</option>
                                <option value="option2">Tech</option>
                                <option value="option2">Music</option>
                                <option value="option2">Gaming</option>
                                <option value="option2">Arts and Culture</option>
                                <option value="option2">Business</option>
                                <option value="option2">Carrer</option>


                                <option value="option3">LifeStyle</option>
                            </select>

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>

                            </div>
                        </div>

                        <div className="bg-primary py-2 flex justify-center md:justify-end rounded-b md:rounded-r-md px-3 items-center text-white gap-1">
                            <p>Search</p>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>


                            </span>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
