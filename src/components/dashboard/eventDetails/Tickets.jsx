import React from 'react'

export const Tickets = ({page, data}) => {
  return (
    <section className={`${page === 'Tickets' ? 'container mx-auto' : 'hidden'} gap-8`}>
     
        <div className="flex justify-center">
            <div className="bg-gray-400 py-1 px-3 text-sm font-quicksand rounded bg-opacity-30 border border-primary">
                teekety is free for free events, if you're charging guests a fee we'll charge a percenatage value as transaction fee
            </div>

            
        </div>

        <div className='mt-8'>
                {/* <header className='flex justify-between items-center'>
                    <h2 className='text-xl font-semibold text-gray-600 font-raleway'>Tickets</h2>

                    <button className='py-2 px-4 bg-primary text-white rounded font-quicksand font-semi'>Add ticket</button>
                </header> */}

                <div className="flex justify-center">
                    <div className="bg-primary bg-opacity-30 p-10 flex flex-col items-center w-full rounded">
                        <h3 className='text-lg md:text-xl  py-2 font-semibold font-quicksand'>Let create tickets</h3>
                        <p className='font-quicksand text-gray-700'>You don't have any tickets created yet, create your first ticket - it will only take 30-seconds</p>
                        <button className="my-6 py-3 px-6 bg-gray-100 rounded flex gap-1 items-center">
                            Add ticket
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
</svg>

                            </span>
                        </button>
                    </div>
                </div>
            </div>
    </section>
  )
}
