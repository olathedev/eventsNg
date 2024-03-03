import React from 'react'

function Purchase() {
    return (
        <div className="fixed h-screen  w-full bg-black bg-opacity-60 backdrop-blur-sm z-10 flex justify-center items-center">

            <div className="bg-white md:w-[45%] -mt-[10rem] rounded-lg">
                <header className='h-[10rem] bg-gray-700 rounded-t-lg purchase-modal-header flex justify-end text-primary'>

                </header>

                <div className="body px-4 py-6 font-quicksand">
                    <h4 className='text-primary font-semibold'>Select a ticket, ticket to proceed</h4>

                    <div className='py-4'>
                        <form action="">
                            <div className="flex items-center">

                                <input type="checkbox" className='py-3 border' name="" id="" />

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

                        <button className="p-3 text-center bg-primary text-white rounded hover:bg-primary hover:text-white transition duration-300 flex gap-3">
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