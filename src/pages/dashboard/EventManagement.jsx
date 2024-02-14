import React, { useState } from 'react'
import AddEventModal from '../../components/dashboard/AddEventModal'

export default function EventManagement() {

    const [ modal, setModal ]= useState(false)

    const handleModal = () => {
        setModal(!modal)
    }

    return (
        <div className="container mx-auto h-screen px-4 md:px-6 mt-8">

            {modal && (
            <AddEventModal handleModal={handleModal} />

            )}
        
            <div className="header w-full  flex flex-col gap-3 justify-between md:flex-row md:px-6">
                <h1 className="text-2xl font-raleway md:font-semibold">Event Management</h1>

                <div className=''>
                <button className='border border-primary py-3 px-3 text-primary rounded-md flex f items-center gap-2' onClick={handleModal}>
                    Create Event
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>

                </button>
                </div>
                
            </div>
        </div>
    )
}
