import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object({
    title: yup.string().required("Provide event name"),
    description: yup.string().required("Provide event name"),
    location: yup.string().required("Provide event name"),
    eventDate: yup.string().required("Provide event name"),
    time: yup.string().required("Provide event name"),
    seatsAvailable: yup.string().required("Provide event name"),



}).required()

export default function AddEventModal({ handleModal }) {

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: '',
            description: '',
            location: '',
            eventDate: '',
            time: '',
            seatsAvailable: ''
        }
    })

    console.log(errors);

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className={`fixed inset-0 min-h-screen flex justify-center items-center bg-black bg-opacity-70  z-30 px-2`}>
            <div className="bg-white md:w-[40%] max-h-screen rounded overflow-auto md:-mr-10 border-b-2 border-b-primary transition duration-200 ease-in-out">
                <div className="modal-header flex gap-5 justify-between items-center px-6 py-4 border-b-2">

                    <div>
                        <h2 className="text-lg font-poppins font-semibold  opacity-80">Add new event</h2>
                    </div>

                    <div className='cursor-pointer' onClick={handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>
                </div>

                <div className="modal-body py-4 px-6">
                    <form onSubmit={handleSubmit(onSubmit)} className='container flex flex-col gap-4 font-quicksand'>

                        <div className="flex flex-col md:flex-row gap-2">
                        <div className="relative md:w-1/2">
                            <input type="text" className='w-full border border-gray-400 px-3 py-3 rounded focus:outline-none' placeholder='event name ' {...register('title')} />

                            <span className="absolute right-3 top-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>

                            </span>
                        </div>

                        <div className='relative md:w-1/2'>
                            <input type="text" className='w-full  border border-gray-400 px-3 py-3 rounded focus:outline-none' placeholder='event location ' {...register('location')} />

                            <span className='absolute right-3 top-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </span>

                        </div>
                        </div>
                       


                        <div className="flex gap-2 text-sm">
                            <input type="date" className='w-1/2  border border-gray-400 px-3 py-3 rounded focus:outline-none' placeholder='date ' {...register('date')} />

                            <input type="time" className='w-1/2 border-b  border border-gray-400 px-3 py-3 rounded focus:outline-none' placeholder='time' {...register('time')} />

                        </div>

                        <div className="flex">
                            <div className="bg-gray-200 h-20 p-6 rounded flex gap-1 cursor-pointer items-center text-sm font-poppins">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>

                                    <input type="file" className='hidden' />

                                </span>
                                <span>Upload Image</span>

                            </div>
                        </div>

                        <div>
                        <div className='flex gap-2'>
                            
                            <input type="number"  className='w-1/2 border border-gray-400 px-3 py-3 rounded focus:outline-none' placeholder='available seats' />


                            
                            <div className='w-1/2 border border-gray-400 rounded px-4 flex items-center justify-between'>
                            <select className='appearance-none py-3 focus:outline-none w-full border-n px-4' name="">
                                    <option value="" >Private event</option>
                                    <option value="">Public event</option>

                                   
                                </select>
                                
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>

                            </div>
                            </div>
                               
                        </div>
                        <p className="text-sm mt-2 text-primary">Public events are listed on events.ng and anody can find them</p>

                        </div>

                        <div className='w-full'>
                            <label>Event description</label>
                            <textarea className="w-full border border-gray-400 rounded focus:outline-none p-3" rows="2"  {...register('description')}></textarea>
                        </div>
                        
                        <div className="w-full modal-footer mt-4">
                        <button className='w-full py-3 px-4 bg-primary text-white rounded-md'>Submit</button>
                    </div>
                    </form>

                  
                </div>
            </div>
        </div>
    )
}
