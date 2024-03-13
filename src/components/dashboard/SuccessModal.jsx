import React from 'react'
import rocket from '../../assets/rocket-lg.svg'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../features/activeStates/successModalSlice'

export const SuccessModal = ({type, text, details}) => {

    const dispatch = useDispatch()
  return (
    <div className='fixed bg-black min-h-screen inset-0 bg-opacity-60 flex justify-center items-center z-20 font-quicksand px-4'>
        <div className="bg-white md:w-[28%] flex justify-center py-6 rounded px-4">

            <div className="flex flex-col items-center gap-2">
            <img src={rocket} className='h-24' alt="" />
            <h2 className='font-semibold py-1 text-green-500'>Yay! Success</h2>
            <p className='text-center font-poppins text-sm text-gray-400'>Your new event was created successfully, now create a ticket so people can access your event</p>

            <div className="flex gap-2 mt-2">
            <button className='py-2 px-4 bg-primary text-white rounded text-sm'>create ticket</button>
            <button className='p-y-2 px-6 text-sm bg-gray-300 rounded' onClick={() => dispatch(closeModal())}>skip</button>
            </div>
           

            </div>
            

        </div>
    </div>
  )
}
