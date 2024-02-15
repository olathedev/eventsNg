import React, { useState } from 'react'
import AddEventModal from '../../components/dashboard/AddEventModal'
import event from "../../assets/event.jpg"
import EventsTable from '../../components/dashboard/EventsTable'

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
        <div className="container mx-auto h-screen px-4 md:px-6 my-8">

            {modal && (
                <AddEventModal handleModal={handleModal} />

            )}

            <div className="header w-full  flex flex-col gap-3 justify-between md:flex-row md:px-6">
                <h1 className="text-xl md:text-2xl font-raleway font-semibold">Event Management</h1>

                <div className=' opacity-60'>


                    Dashboard/<span className='text-primary'>Event Management</span>

                </div>

            </div>

           <EventsTable handleModal={handleModal} />
        </div>
    )
}
