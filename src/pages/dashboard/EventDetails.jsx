import React from 'react'

function EventDetails() {
  return (
    <div className='min-h-screen px-4 md:px-10'>
        <header className='py-4 flex justify-between'>
        <h1 className="text-lg md:text-xl font-poppins  font-semibold">Event Details</h1>

<div className=' opacity-60'>


    Dashboard/Event<span className='text-primary'>/Event Details</span>

</div>
        </header>

        <section className='mt-6'>
            <div className="flex justify-end gap-6">
                <button className='py-2 px-6 text-white bg-secondary rounded'>Edit</button>
                <button className='py-2 px-6 text-[#f70000] border border-[#f70000] rounded'>Take offline</button>
    
            </div>
        </section>
    </div>
  )
}

export default EventDetails