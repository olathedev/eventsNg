import React from 'react'


export default function DashboardDt() {

    const registeredUsers = [
        {
          id: 1,
          name: "John Doe",
          email: "johndoe@example.com",
         
          // Add more details if needed (e.g., company, role, status)
        },
        {
          id: 2,
          name: "Jane Smith",
          email: "janesmith@example.com",
       
          // Add more details if needed
        },
        {
          id: 3,
          name: "Michael Brown",
          email: "michaelbrown@example.com",
         
          // Add more details if needed
        },
        // Add more users as needed
      ];

      
    return (
        <div className='w-full bg-white shadow pt-6 px-4 text-sm'>

            <h3 className='pb-4 px-4'>Recent ticket purchases</h3>
            <div className="overflow-x-auto mx-auto">
  <table className="table-auto w-full borderless">
    <thead>
      <tr>
        <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Name</th>
        <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Email</th>
        <th className="px-4 py-2 text-left font-medium text-gray-500 tracking-wider">Type</th>
      </tr>
    </thead>
    <tbody>
      {registeredUsers.map((user) => (
        <tr key={user.id} className="border-b">
          <td className="px-4 py-4 text-gray-700">
            {user.name}
          </td>
          <td className="px-4 py-4 text-gray-700">
            {user.email}
          </td>
         
          <td className="px-4 py-4 text-right text-green-500">
            Regular
             </td>
             </tr>
             ))}
             </tbody>
             </table>

             </div>
        </div>
    )
}
