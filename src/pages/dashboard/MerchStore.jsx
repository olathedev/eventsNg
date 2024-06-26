import React from 'react'
import image1 from '../../assets/merchs/ankara.jpg'
import image2 from '../../assets/merchs/shirt.jpg'
import image3 from '../../assets/merchs/hoodie.jpg'


export default function MerchStore() {


    const merchs = [
        { name: "Aso ebi", event: "Party with Olori ebi", price: "4000", image: image1 },
        { name: "T-shirt", event: " Lagos tech Fest", price: "10000", image: image2 },
        { name: "Cap", event: "Freshers party", price: "4000", image: image3 },
        { name: "shirt", event: "Lagos Creators Hangout", price: "4000", image: image1 },
        { name: "Bikini's", event: "Jays Pool pary", price: "2500", image: image2 },
        { name: "Totes Bag", event: "Quava conference", price: "1000", image: image3 },
        { name: "Gele yaya", event: "Party with Olori ebi", price: "4000", image: image1 },
        { name: "Hills", event: "Party with Olori ebi", price: "4000", image: image1 }


    ]

    return (
        <div className='container mx-auto px-6 py-4 h-screen'>
            <div className="header flex justify-between">
                <h3 className='text-2xl font-poppins'>Merch Store</h3>

                <div>
                    <button className='border border-primary py-2 px-3 text-primary rounded-md flex f items-center gap-2'>
                        Add Merch
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                        </svg>

                    </button>
                </div>
            </div>

            <section className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6">

                {merchs.map((merch, index) => (
                <div className="card flex flex-col bg-white shadow rounded relative" key={index}>
                    <div className="card-header h-32 max-h-32 overflow-hidden bg-gray-300 rounded-t ">
                        <img src={merch.image} className='object-cover h-full min-h-full w-full' alt="" />
                    </div>
                    <h4 className='absolute bg-primary bg-opacity-70 text-white backdrop-blur-sm left-0 rounded-ss top-0 p-1  text-sm font-poppins'>{merch.event}</h4>

                    <div className="cardbody p-2">
                        <h4 className=''>{merch.name}</h4>

                        <p className='text-sm'>NGN {merch.price}</p>
                        <p className='text-sm'>Sold - 45</p>

                        <p className='mt-2 text-sm'>Details</p>
                    </div>
                </div>
            ))}

            </section>
        </div>
    )
}
