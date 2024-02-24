import React from 'react'

export default function () {
  return (
    <section className='w-full bg-green-500 bg-opacity-20 py-16'>
        <div className="container mx-auto flex justify-between items-center px-8">
            <div className='w-[45%] flex justify-between flex-col gap-3'>
                <h1 className='text-3xl font-poppins font-bold text-primary tracking-wider'>Teekety</h1>
                <div className="">
                    <button className='bg-slate-900 rounded text-white p-3 font-quicksand font-semibold'>Buy me coffe</button>
                </div>
            </div>

            <div className="w-[55%] flex justify-around">
               <div className=''>
                    <h2 className='font-poppins font-semibold '>Products</h2>
                    <ul className='flex flex-col gap-1 mt-2 text-sm'>
                        <li>Ticketing</li>
                        <li>Merch Sells</li>
                        <li>Logistics</li>
                        <li>Event Planner</li>




                    </ul>
               </div>

               <div className=''>
                    <h2 className='font-poppins font-semibold '>Compnay</h2>
                    <ul className='flex flex-col gap-1 mt-2 text-sm'>
                        <li>About us</li>
                        <li>FAQ</li>
                        <li>contact Developer</li>
                        <li>Blog</li>




                    </ul>
               </div>

               <div className=''>
                    <h2 className='font-poppins font-semibold '>Socials</h2>
                    <ul className='flex flex-col gap-1 mt-2 text-sm'>
                        <li>Facebbok</li>
                        <li>x</li>
                        <li>Instagram</li>
                        <li>linkedIn</li>




                    </ul>
               </div>
            </div>

        
        </div>
    </section>
  )
}
