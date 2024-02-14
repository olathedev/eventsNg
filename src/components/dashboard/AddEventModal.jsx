import React from 'react'

export default function AddEventModal({handleModal}) {
    return (
        <div className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-20`}>
            <div className="bg-white md:w-[30%] -mt-24 rounded md:-mr-10 border-b-2 border-b-primary transition-all duration-200 ease-in-out">
                <div className="modal-header flex gap-5 justify-between items-center px-4 py-4 border-b-2">

                    <div>
                        <h2 className="text-lg font-poppins">Add new event</h2>
                        <p className='text-primary'>* Youre about to create an event</p>
                    </div>

                    <div className='cursor-pointer' onClick={handleModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>
                </div>

                <div className="modal-body py-20">

                </div>
            </div>
        </div>
    )
}
