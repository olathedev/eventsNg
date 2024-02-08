import React from 'react'

export default function Hero() {
    return (
        <section className="container mx-auto hero mt-16">
            <div className='flex flex-col items-center gap-3'>
                <div className="bg-primary text-primary font-semibold font-monteserat bg-opacity-30 px-6 py-2 rounded-full flex items-center gap-4">
                    Create and send tickets sharp 🚀
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-6">
                        <path fillRule="evenodd" d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
                    </svg>

                </div>
                <div className="flex justify-center items-center">
                    <h1 className='text-primary text-6xl md:max-w-[60%] text-center font-raleway font-bold leading-relaxed'> Event Listing and Ticketing  Made Easy
                        for Creators</h1>
                </div>
            </div>
        </section>
    )
}
