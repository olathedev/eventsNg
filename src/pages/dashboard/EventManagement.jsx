import React, { useState } from 'react'
import AddEventModal from '../../components/dashboard/AddEventModal'
import event from "../../assets/event.jpg"

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
        <div className="container mx-auto h-screen px-4 md:px-6 mt-8">

            {modal && (
                <AddEventModal handleModal={handleModal} />

            )}

            <div className="header w-full  flex flex-col gap-3 justify-between md:flex-row md:px-6">
                <h1 className="text-xl md:text-2xl font-raleway font-semibold">Event Management</h1>

                <div className=''>
                    <button className='border border-primary py-2 px-3 text-primary rounded-md flex f items-center gap-2' onClick={handleModal}>
                        Create Event
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                        </svg>

                    </button>
                </div>

            </div>

            <div className="event-table mt-10">
                <div className="overflow-x-auto mx-auto">
                    <table className="table-auto w-full borderless border rounded-md">
                        <thead className='bg-white'>
                            <tr>
                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Event</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">created at</th>

                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Cover Image</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Tickets</th>

                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gray-200'>
                            {registeredUsers.map((user) => (
                                <tr key={user.id} className="border-b">
                                    <td className="px-4 py-4 text-gray-700">
                                        {user.name}
                                    </td>
                                    <td className="px-4 py-4 text-gray-700">
                                        {user.email}
                                    </td>
                                    <td className="px-4 py-4 text-gray-700">
                                        <img src={event} className='h-14 rounded' alt="" />
                                    </td>

                                    <td className="px-4 py-4 text-gray-700">
                                        5
                                    </td>
                                    <td className="px-4 py-4 flex gap-2">
                                        <span className="text-sm p-2 bg-black rounded text-white cursor-pointer">add ticket</span>
                                        <span className="text-sm p-2 bg-red-600 rounded text-white cursor-pointer">edit</span>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot className='bg-white'>
                            <tr>
                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Event</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">created at</th>

                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Cover Image</th>
                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Tickets</th>

                                <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Actions</th>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
        </div>
    )
}
