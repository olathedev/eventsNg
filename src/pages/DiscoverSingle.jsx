import React from 'react'
import { useParams } from 'react-router-dom'
import eventimg from '../assets/discover.jpg'

export default function DiscoverSingle() {

    const {id} = useParams()

  return (
    <div className='min-h-screen'>
       <section className="w-full relative h-24  bg-opacity-40" id='single-header'>
            <div className='bg-black h-full bg-opacity-45' id=''>
                my baby marad
            </div>

            <div className="img px-6 ">
                <img src={eventimg} className='top-10 border- border-primary absolute h-[20rem]' alt="" />
            </div>
       </section>


       <div className="bg-white fixed w-full bottom-0 py-6 shadow flex rounded-t-2xl justify-center">
        Ozomba mbadiwe
       </div>
    </div>
  )
}
