import React from 'react'

export const AddticketModal = ({ modalOpen, handleModal }) => {
    return (
        <div className={`${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed w-full bg-black min-h-screen bg-opacity-50 flex justify-center items-center z-20 transition-opacity ease-in-out duration-300`}>
            <div className="bg-white w-[30rem] -ml-[15rem] -mt-[4rem] font-quicksand rounded pb-4">
                <header className='bg-gray-100 p-4 rounded-t font-semibold  flex justify-between'>
                    <h3 className='text-lg text-center'>Add new ticket</h3>
                    <span className='cursor-pointer' onClick={handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                        </svg>

                    </span>
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
                            <input type="number" className='py-2.5 px-3 border border-gray-300 w-full rounded' placeholder='limit' />

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
                        <textarea name="" id="" rows="2" className='focus:outline-none border border-gray-300 rounded p-3'></textarea>
                    </form>
                </div>
            </div>
        </div>
    )
}
