import React, { useState } from 'react'
import AddEventModal from '../../components/dashboard/AddEventModal'
import event from "../../assets/event.jpg"
import EventsTable from '../../components/dashboard/EventsTable'
import Events from '../../components/dashboard/Events'
import event1 from '../../assets/events/event1.png'

export default function EventManagement() {

    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }


    const registeredUsers = [
        {
            id: 1,
            name: "Lagos Tech fest",
            email: "4th Jan 2024",

            // Add more details if needed (e.g., company, role, status)
        },
        {
            id: 2,
            name: "Party with olori ebi",
            email: "4th Jan 2024",


            // Add more details if needed
        },
        {
            id: 3,
            name: "Quava conference",
            email: "4th Jan 2024",


            // Add more details if needed
        },
        // Add more users as needed
    ];

    return (
        <div className="container bg-white mx-auto min-h-screen px-4 md:px-6 py-8">

            {modal && (
                <AddEventModal handleModal={handleModal} />

            )}

            <div className="header w-full  flex flex-col gap-3 justify-between md:flex-row md:px-6">
                <h1 className="text-xl md:text-2xl font-raleway font-semibold">Event Management</h1>

                <div className=' opacity-60'>


                    Dashboard/<span className='text-primary'>Event Management</span>

                </div>

                {/* <button className='md:hidden bg-primary py-3 px-3 mt-3 text-white rounded-md flex justify-center items-center gap-2' onClick={handleModal}>
                    Create Event
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button> */}
            </div>

            {/* <EventsTable handleModal={handleModal} /> */}
            <Events handleModal={handleModal} />
        </div>
    )
}
