import React from 'react'

export const Ticket = ({data}) => {
  return (
    <section className='ticket-selection flex justify-center w-full py-10 px-4'>
    <div className="bg-white w-full md:w-[40%] rounded-md shadow-md">
        <div className="card-header p-4 bg-secondary rounded-t-md text-white">
            <h1 className='font-poppins text-lg text-center'>Select ticket</h1>
        </div>

        <div className='py-10 px-4 md:px-6 flex flex-col gap-5 font-poppins'>

            <div className="flex items-center justify-between">
                <div>
                <h3 className='font-quicksand font-semibold'>Regular</h3>
                <p className='text-primary text-sm'>#4000</p>
                </div>
                
                <div>
               
                <form action="">
                    <input type="number" className='w-14 border border-black p-1 text-center rounded' value='0' />
                </form>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div>
                <h3 className='font-quicksand font-semibold'>Vip</h3>
                <p className='text-primary text-sm'>#10, 000</p>
                </div>
                
                <div>
               
                <form action="">
                    <input type="number" className='w-14 border border-black p-1 text-center rounded' value='0' />
                </form>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div>
                <h3 className='font-quicksand font-semibold'>Vip</h3>
                <p className='text-primary text-sm'>#10, 000</p>
                </div>
                
                <div>
               
                <form action="">
                    <input type="number" className='w-14 border border-black p-1 text-center rounded' value='0' />
                </form>
                </div>
            </div>

        </div>
        </div>    
</section>

  )
}
