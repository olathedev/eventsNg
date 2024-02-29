import React from 'react'
import eventImg from '../../assets/events/event4.jpg'

export default function Features() {
  return (
    <section className='container mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center  gap-6 md:gap-16 mt-4 py-10'>
      <div className="md:w-1/2 flex flex-col md:gap-2">

        <div>
        <p className="text-sm font-quicksand text-primary font-semibold">Global reach</p>
        <h2 className="text-2xl md:text-4xl font-poppins font-bold md:leading-[3rem]">Your public events gets a larger audience with Teekety </h2>
        </div>
        

        <p className="pt-4 md:w-2/3  text-lg font-poppins text-gray-600 leading-[2rem]">
          Lorem ipsum  Repellendus minus at maiores laborum nesciunt quas. Animi iusto numquam asperiores ullam. Lorem .
        </p>

        <div className='pt-2'>
          <button className="py-3 px-6 rounded bg-primary text-white font-poppins text-lg">See events</button>

        </div>
      </div>

      <div className="md:w-1/2">
        <img src={eventImg} className='rounded-md' alt="" />
      </div>
    </section>
  )
}
