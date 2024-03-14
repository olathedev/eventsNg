import React from 'react'

export const AddticketModal = () => {
  return (
    <div className='fixed w-full bg-black min-h-screen bg-opacity-50 flex justify-center items-center z-20'>
            <div className="bg-white w-[30rem] -ml-[15rem] -mt-[4rem] font-quicksand rounded pb-4">
                <header className='bg-gray-100 p-4 rounded-t font-semibold  '>
                    <h3 className='text-lg text-center'>Add new ticket</h3>
                </header>
                <h2 className='p-4 text-sm'>What type of Ticket are you creating?</h2>
                <div className='flex gap-5 justify-evenly'>

                    <button className='py-2 px-6 border border-primary rounded text-white bg-primary bg-opacity-70'>Free</button>
                    <button className='py-2 px-6 border border-primary rounded'>Paid</button>
                    <button className='py-2 px-6 border border-primary rounded'>Invite only</button>

                   
                </div>

                <div className="body pt-6 px-6 ">
                    <form className='flex flex-col gap-3'>
                        <input type="text" className='py-2.5 px-3 border border-gray-300 w-full rounded' placeholder='Ticket name ' />

                        <div className="flex gap-3">
                        <select name="" id="" className="py-2.5 px-3 border border-gray-300 w-full rounded focus:outline-none">
                            <option value="">--No of ticket available--</option>
                            <option value="">Limited</option>
                            <option value="">Unlimited</option>


                        </select>
                        <input type="text" className='py-2.5 px-3 border border-gray-300 w-full rounded' placeholder='Ticket name ' />

                        </div>

                        <div className="flex gap-3">
                        <select name="" id="" className="py-2.5 px-3 border border-gray-300 w-full rounded focus:outline-none">
                            <option value="" className='text-sm'>--Ticket limit--</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>



                        </select>
                        <input type="number" className='py-2.5 px-3 border border-gray-300 w-full rounded' placeholder='Price(NGN)  ' />

                        </div>

                        <label htmlFor="" className='text-sm mt-3'>Ticket details</label>
                        <textarea name="" id="" rows="3" className='focus:outline-none border border-gray-300 rounded'></textarea>
                    </form>
                </div>
            </div>
        </div>
  )
}
