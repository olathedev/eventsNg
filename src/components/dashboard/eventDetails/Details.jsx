import React from 'react'

export const Deatils = ({ page, data }) => {
  return (
    <div className={`${page === 'Details' ? 'flex flex-col md:flex-row' : 'hidden'} gap-8 container`}>
      <div className="md:w-1/3">
        <img src={data?.event?.image} className='rounded w-full max-w-full' alt="" />
      </div>

      <div className="md:w-2/3 ">
        <h2 className='text-lg'>Event details</h2>
        <form className='py-4 font-quicksand'>
          <div className="flex items-center gap-3">

            <div className='flex flex-col grow'>

              <label className='text-sm'>Event name</label>
              <input type="text" className='py-3 px-3 border rounded  ' value={data?.event.title} />

            </div>
            <div className='flex flex-col grow'>

              <label className='text-sm'>Location</label>
              <input type="text" className='py-3 px-3 border rounded grow ' value={data?.event.location} />

            </div>

          </div>

          <div className="flex items-center gap-3 my-5">

            <div className='flex flex-col grow'>

              <label className='text-sm'>Event date</label>
              <input type="date" className='py-3 px-3 border rounded  ' value={data?.event.eventDate} />

            </div>
            <div className='flex flex-col grow'>

              <label className='text-sm'>Event time </label>
              <input type="time" className='py-3 px-3 border rounded grow ' value={data?.event.time} />

            </div>

          </div>


          <div className="flex items-center gap-3 my-5">

            <div className='flex flex-col grow'>

              <label className='text-sm'>Event type</label>
              <input type="text" className='py-3 px-3 border rounded  ' value={data?.event.eventDate} />

            </div>
            <div className='flex flex-col grow'>

              <label className='text-sm'>Number of seats</label>
              <input type="text" className='py-3 px-3 border rounded grow ' value={data?.event.time} />

            </div>

          </div>

          <div className="my w-full">
            <textarea name="" rows="4" className='w-full border focus:outline-none p-3 rounded' value={data?.event.description}></textarea>
          </div>


          <div className="w-full mt-8 py-3 border-t">
            <button className='py-3 px-6 bg-primary rounded-md text-white'>Save changes</button>

          </div>
        </form>
      </div>
    </div>
  )
}
