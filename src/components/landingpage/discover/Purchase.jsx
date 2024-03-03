import React from 'react'

function Purchase() {
    return (
        <div className="fixed h-screen  w-full bg-black bg-opacity-60 backdrop-blur-sm z-20 flex justify-center items-center">

            <div className="bg-white md:w-[45%] overflow-auto -mt-[10rem] rounded-lg border-b-4 border-primary">
                <header className='h-[8rem] bg-gray-700 rounded-t-md purchase-modal-header flex justify-end text-primary'>

                </header>

                <div className="body  py-6 font-quicksand">
                    <h4 className='px-6 text-primary font-semibold'>Select a ticket, ticket to proceed</h4>

                    <div className='py-4'>
                        <form action="">
                            <div className="px-6 py-2 flex justify-between bg-gray-200 items-center">
                                <div className=''>
                                    <h4>Regular</h4>
                                    <p className='flex gap-2'> <span>ngn - 1500</span> <span>total - 4000</span> </p>
                                    <p>Quantity 0</p>
                                </div>
                                
                                <div className="flex flex-col items-center ">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
</svg>

                                    </span>
                                    <p>0</p>
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

                                    </span>
                                </div>
                            </div>


                            <div className="mt-8 px-6">
                            
                                <label className='py-2'>Email Adress</label>
                                <input type="text" className='p-2 border border-gray-400 rounded w-full' placeholder='e.g johndoe@gmail.com' />
                                <p className='text-sm'>Provide your email, ticket will be delivered to provided mail box</p>

                            </div>
                        </form>
                    </div>


                </div>

                <footer className='font-quicksand'>
                    <div className='flex justify-between border-y p-4 bg-gray-200'>
                        <h1 className='font-quicksand font-semibold'>TOTAL</h1>
                        <h1 className='font-quicksand font-semibold'>NGN - 4000</h1>

                    </div>

                    <div className='py-4 flex gap-4 justify-center'>
                        <button className="py-3 px-6 text-center bg-red-500 text-white rounded hover:bg-red-400 transition duration-300">Cancel</button>

                        <button className="p-3 text-center bg-secondary text-white rounded transition duration-300 flex gap-3">
                            Proceed to payment
                            <span>

                            </span>
                        </button>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Purchase