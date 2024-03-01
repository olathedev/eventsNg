import React from 'react'

export default function () {
  return (
    <section className='w-full bg-primary bg-opacity-20 py-10'>
        <div className="container mx-auto flex flex-col-reverse gap-10 md:flex-row justify-between md:items-center px-8">
            <div className='w-[45%] flex justify-between flex-col gap-3'>
                <h1 className='text-xl md:text-3xl font-raleway font-bold text-primary tracking-wider'>Teekety</h1>
                <div className="">
                    <button className='bg-slate-900 rounded text-white p-2 font-quicksand font-semibold text-sm md:text-base'>Buy me coffee</button>
                </div>
            </div>

            <div className="md:w-[55%] flex gap-6 justify-around">
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
