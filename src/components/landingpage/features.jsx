import React from 'react'
import eventImg from '../../assets/events/event4.jpg'
import eventImg2 from '../../assets/hero.webp'



export default function Features() {
  return (

    <main className='container mx-auto px-6 md:px-12'>


    <section className=' flex flex-col md:flex-row md:items-center  gap-6 md:gap-16 mt-4 py-10'>
      <div className="md:w-1/2 flex flex-col md:gap-2">

        <div>
        <p className="text-sm font-quicksand text-primary font-semibold md:text-base">Global reach</p>
        <h2 className="text-2xl md:text-4xl font-poppins font-bold md:leading-[3rem]">Your public events gets a larger audience with Teekety </h2>
        </div>
        

        <p className="pt-4 md:w-2/3  md:text-lg font-poppins text-gray-600 md:leading-[2rem]">
          Lorem ipsum  Repellendus minus at maiores laborum nesciunt quas. Animi iusto numquam asperiores ullam. Lorem .
        </p>

        <div className='pt-2'>
          <button className="py-3 px-6 rounded bg-primary text-white font-poppins md:text-lg">Explore events</button>

        </div>
      </div>

      <div className="md:w-1/2">
        <img src={eventImg} className='rounded-xl' alt="" />
      </div>

     
    </section>
    <section className="my-2 md:my-6 flex flex-col-reverse md:flex-row md:items-center gap-6 md:gap-16 md:py-10">

      <div className="md:w-1/2 bg-primary bg-opacity-40 rounded-t-md p-4 h-[20rem]">
        <img src={eventImg2} alt="" className='w-full flex items-center' />
      </div>
        <div className="md:w-1/2 flex flex-col md:gap-2">
        <div>
        <p className="text-sm font-quicksand text-primary font-semibold md:text-base">purchase tickets</p>
        <h2 className="text-2xl md:text-4xl font-poppins font-bold md:leading-[3rem]">Purchase and pay for event tickets seamlesly </h2>
        </div>
        

        <p className="pt-4 md:w-2/3  md:text-lg font-poppins text-gray-600 md:leading-[2rem]">
          Lorem ipsum  Repellendus minus at maiores laborum nesciunt quas. Animi iusto numquam asperiores ullam. Lorem .
        </p>
        <div className='pt-2'>
          <button className="py-3 px-6 rounded bg-primary text-white font-poppins md:text-lg">Explore events</button>

        </div>
        </div>
      </section>

    <section className="my-6 bg-secondary rounded h-[20rem] md:my-6 flex flex-col items-center justify-center text-center text-white gap-3 py-10 px-4">

        <h1 className="font-raleway text-xl text-white md:text-4xl font-bold">Teekety for creators is  Sleeker</h1>
        <p className='md:w-1/2 text-center md:text-lg  font-quicksand'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque minus, voluptatibus sint animi .</p>

        <div className='flex flex-col md:flex-row gap-4 mt-2'>
        <button className="py-3 px-6 rounded bg-[#D3B3EB] bg-opacity-40 border border-primary  text-white font-poppins md:text-lg">Create account</button>
        <button className="py-3 px-6 rounded bg-[#D3B3EB] bg-opacity-40 border border-primary  text-white font-poppins md:text-lg">Sign in</button>

        </div>
        

</section>
    </main>
  )
}
