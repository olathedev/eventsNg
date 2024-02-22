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
        <div className='w-full bg-white shadow px-4 text-sm'>

<div className="flex justify-between">
                
                
            </div>
            <div className="w-full max-w-full overflow-x-auto mx-auto flex flex-col gap-6">

                <table className='mt-10 w-full table-auto font-raleway'>
                    <thead className=''>
                        <tr className='text-left bg-[#F9F6FF]'>
                            <th className='p-4'>
                                <div className="flex items-center gap-2">
                                    Event
                                   
                                </div>


                            </th>

                           
                            <th className='p-4 '>Tickets</th>
                        


                        </tr>
                    </thead>

                    <tbody className='font-poppins'>
                        <tr className='border-b'>
                            <td className="py-5 px-4 text-sm">Jos tech fest. </td>
                           
                            <td className='py-5 px-4 text-sm'>2</td>

                          
                        </tr>

                        <tr className='border-b'>
                            <td className="py-5 px-4 text-sm">Tech crunch disrupt. </td>
                         
                            <td className='py-5 px-4 text-sm'>1</td>

                        </tr>
                        <tr className='border-b'>
                            <td className="py-5 px-4 text-sm">Jos tech fest. </td>
                           
                            <td className='py-5 px-4 text-sm'>2</td>

                          
                        </tr>

                        <tr className='border-b'>
                            <td className="py-5 px-4 text-sm">Tech crunch disrupt. </td>
                         
                            <td className='py-5 px-4 text-sm'>1</td>

                        </tr>
                        <tr className='border-b'>
                            <td className="py-5 px-4 text-sm">Jos tech fest. </td>
                           
                            <td className='py-5 px-4 text-sm'>2</td>

                          
                        </tr>

                       
                        
                    </tbody>

                   

                </table>
                    
               
            </div>
        </div>
    )
}
