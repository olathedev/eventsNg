import React from 'react'

export const Details = ({data}) => {
  return (

    <section className='your details w-full flex justify-center py-10 px-4'>

    <div className="md:w-[50%] bg-white shadow rounded">

        <header className="bg-secondary py-4 px-6 rounded-t text-white">
           <h2 className="font-raleway">Your Details</h2>
        </header>

        <form className='px-6 py-10 flex flex-col gap-6 font-quicksand'>
            <div className="flex flex-col md:flex-row gap-4">
                <input type="text" className='md:w-1/2  border rounded py-3 px-3 border-gray-400' placeholder='firstname' />
                <input type="text" className='md:w-1/2 border rounded py-3 px-3 border-gray-400' placeholder='Lastname' />

            </div>


            <div>
                <label className='text-sm text-primary'>*your ticket will be delivered to the provided email, makesure it valid</label>
            <input type="email" className='border rounded py-3 px-3 border-gray-400 w-full' placeholder='Email' />

            </div>

            
        </form>

    </div>

</section>
  )
}
