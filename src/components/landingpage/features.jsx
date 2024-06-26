import React from 'react'
import eventImg from '../../assets/events/event4.jpg'
import eventImg2 from '../../assets/hero.webp'
import dashboard from '../../assets/dashboard.png'
import perk1 from '../../assets/svgs/ud1.svg'
import perk2 from '../../assets/svgs/ud2.svg'
import perks3 from '../../assets/svgs/ud3.svg'






export default function Features() {

  const perks = [
    { title: "Managment Dashboard", text: '', img: perk2 },
    { title: "Event/ticket creating", text: '', img: perk1 },
    { title: "Merch sales", text: '', img: perks3 },
    { title: "Payment Processing", text: '', img: perk2 },
    { title: "Attende mangement", text: '', img: perk1 },
    { title: "Managment Dashboard", text: '', img: perk2 }



  ]

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

      <section className="my-6 bg-secondary rounded-md md:my-6 flex flex-col items-center justify-center text-center text-white gap-3 py-10 px-4">

        <h1 className="font-poppins text-2xl text-white md:text-4xl font-bold">Teekety for creators is  Sleeker</h1>
        <p className='md:w-1/2 text-center md:text-lg  font-quicksand'>You have a whole event Managment dashboard to yourself .</p>

        <div className='hidden md:flex flex-col md:flex-row gap-4 mt-2'>
          <button className="py-3 px-6 rounded bg-[#D3B3EB] bg-opacity-40 border border-primary  text-white font-poppins md:text-lg">Create account</button>
          <button className="py-3 px-6 rounded bg-[#D3B3EB] bg-opacity-40 border border-primary  text-white font-poppins md:text-lg">Sign in</button>

        </div>
        <div className="w-full flex justify-center mt-6">
          <img src={dashboard} alt="" className='md:w-2/3 border-2 border-primary rounded flex justify-center' />
        </div>

        <div className='flex md:hidden gap-2 mt-4'>
          <button className="py-3 px-6 rounded bg-[#D3B3EB] bg-opacity-40 border border-primary  text-white font-poppins md:text-lg">Join teekety</button>
          <button className="py-3 px-6 rounded bg-[#D3B3EB] bg-opacity-40 border border-primary  text-white font-poppins md:text-lg">Sign in</button>

        </div>
      </section>

      <section className="container mx-auto px-4 md:px-12 md:my-16 py-10">
        <header className='text-center'>
          <h1 className="text-xl md:text-3xl font-semibold font-poppins">Perks for creators</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 md:pt-16">

          {perks.map((perk, index) => (
            <div className="bg-gray-200 p-6 rounded-md flex flex-col justify-center gap-2" key={index}>
              <img src={perk.img} className='h-36 flex place-self-start' alt="" />

              <h2 className="md:text-lg font-semibold mt-4 text-start font-quicksand">{perk.title}</h2>
              <p className='font-quicksand '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et.</p>
            </div>
          ))}

        </div>
      </section>
    </main>
  )
}
