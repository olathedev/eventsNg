import React from 'react'
import { useGetStatsQuery } from '../../features/api/apiSlice'


export default function StatCards({ stats }) {


    const {data, isLoading} = useGetStatsQuery()
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6'>
            <div className='py-5 px-5 bg-white shadow rounded flex gap-4 justify-between border border-solid'>
                <div className='h-14 w-14 flex items-center justify-center bg-white rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>

                </div>
                <div className="border-l border-gray-400"></div>
                <div className="grow flex flex-col items-center justify-center font-poppins">
                    <h2>Active Events</h2>
                    <h1 className='text-2xl font-bold pt-2'>{data?.defaultStats?.isActive || 0}</h1>
                </div>
            </div>


            <div className='py-5 px-5 bg-primary bg-opacity-25 shadow-sm rounded flex gap-4 justify-between'>
                <div className='h-14 w-14 flex items-center justify-center bg-white rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                    </svg>

                </div>
                <div className="border-l border-gray-400"></div>
                <div className="grow flex flex-col items-center justify-center font-poppins">
                    <h2>Tickets on Sale</h2>
                    <h1 className='text-2xl font-bold pt-2'>{data?.defaultStats?.tickets || 0}</h1>
                </div>
            </div>

            <div className='py-5 px-5 bg-red-600 bg-opacity-25 shadow-sm rounded flex gap-4 justify-between'>
                <div className='h-14 w-14 bg-white rounded-full flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>




                </div>
                <div className="border-l border-gray-400"></div>
                <div className="grow flex flex-col items-center justify-center font-poppins">
                    <h2>Merchs On Sale</h2>
                    <h1 className='text-2xl font-bold pt-2'>0</h1>
                </div>
            </div>
        
        </div>
    )
}
