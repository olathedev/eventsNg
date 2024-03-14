import React from 'react'

export const Header = ({data, handleSp, page}) => {

  const style = "text-primary border-b-2 border-primary pb-1"

  const tabs = [
    {title: "Details"},
    {title: "Tickets"},
    {title: "GuestList"},
    {title: "Sales"}


  ]

  return (

    <header className='details-header'>
    <div className='bg-primary bg-opacity-40 py-6 px-10 flex justify-between'>
        <div>
          <h1 className='text-xl'>{data?.event?.title}</h1>

          <p className='my-2 items-center font-quicksand'>
            Created 4 days ago
            </p>
            <span className='bg-green-500 bg-opacity-60 py-1 px-4 rounded-full text-white text-sm '>online</span>

        </div>

        <div className=''>
            <button className='py-2 px-4 bg-primary text-white font-quicksand rounded-md text-sm'>Take offline</button>
        </div>
    </div>

    <div className='bg-white py-5 shadow font-quicksand font-semibold '>

       <div className="flex justify-around cursor-pointer ">

          {tabs.map((tab, index) => (
            <div key={index} className={`${page === tab.title ? style : 'text-gray-400'}`} onClick={() => handleSp(tab.title)}>{tab.title}</div>
          ))}
         

       </div>
    </div>

    </header>
  )
}
