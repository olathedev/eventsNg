import React from 'react'

export default function Tickets({data}) {
  return (
    <div className="bg-white shadow rounded mt-6">
    <h1 className='text-lg md:text-xl font-poppins py-4 px-4 border-b-2 '>Ticket pricing</h1>
    <div className='p-5'>
      <table className='w-full table-auto font-poppins'>
        <thead className='bg-[#eee] rounded-md'>
          <tr>
            <th className='p-3 text-start'>Ticket type</th>
            <th className='p-3 text-start'>Price</th>

          </tr>
        </thead>

        <tbody>


          {
            data?.ticket.map(t => (
              <tr key={t._id}>
                <td className='p-3 text-start'>{t.ticketType}</td>
                <td className='p-3 text-start'>{t.price}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  </div>
  )
}
