import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { qauntityState } from '../../../features/ticket/ticketSlice'
import { PaystackButton } from 'react-paystack'

function Purchase({ data, handleModal }) {

    const { total, qauntity } = useSelector((state) => state.ticket)
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const publicKey = "pk_test_159c4bef5e90aece54e68bdd886503525e911112"
    const amount = 1000000 // Remember, set in kobo!

    const componentProps = {
        email,
        amount,
        metadata: {
            name: 'oladev',
            phone: '08126325584',
        },
        publicKey,
        text: "Proceed to payment",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    }

    return (
        <div className="fixed h-screen w-full bg-black bg-opacity-60 md:py-6 backdrop-blur-sm z-20 flex justify-center items-center">

            <div className="bg-white w-full h-screen pb-6 md:max-h-screen md:h-auto md:w-[45%] overflow-auto -mt-[10rem] z-40 md:rounded-lg border-y-4 border-primary">
                <header className='h-[8rem] bg-gray-700 rounded-t-md purchase-modal-header flex justify-end text-primary'>

                </header>

                <div className="p-4 flex">
                    <div className="md:hidden bg-primary bg-opacity-30 py-1 px-4 rounded flex gap-1 items-center" onClick={handleModal}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z" clipRule="evenodd" />
                            </svg>

                        </span>
                        Back
                    </div>
                </div>
                <div className="body  py-3 font-quicksand">
                    <h4 className='px-6 text-secondary font-semibold text-lg text-center'>Ticket Selection</h4>

                    <div className='py-4 my-4'>
                        <form action="">

                            {data?.ticket.length < 1 && (
                                <div className='text-center py-4 bg-gray-200'>
                                    No ticket availabe for this event
                                </div>
                            )}

                            {data?.ticket.length > 0 && (

                                <div>
                                    <div className="flex flex-col gap-3">


                                        <form className="px-6 py-2 flex justify-between  items-center">
                                            <div>
                                                <select className='py-2 px-8 appearance-none rounded border border-primary focus:outline-none '>
                                                    {data?.ticket?.map(t => (
                                                        <option value="">{t.ticketType}</option>

                                                    ))}

                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                                        </svg>

                                                    </span>


                                                </select>
                                            </div>
                                            <div className="py-2 px-3 border border-primary rounded text-primary flex items-center gap-2 cursor-pointer">

                                                <span onClick={() => dispatch(qauntityState("DECREMENT"))}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                        <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
                                                    </svg>

                                                </span>
                                                <span className='font-poppins'>{qauntity}</span>
                                                <span onClick={() => dispatch(qauntityState("INCREMENT"))}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                    </svg>

                                                </span>


                                            </div>

                                        </form>



                                    </div>

                                    <div className="mt-8 px-6">

                                        <label className='py-2'>Email Adress</label>
                                        <input type="text" className='p-2 border border-gray-400 rounded w-full' placeholder='e.g johndoe@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <p className='text-sm'>Ticket will be delivered here</p>

                                    </div>
                                </div>
                            )}
                        </form>
                    </div>


                </div>

                <footer className='font-quicksand mt-10 relative top-10 md:top-2 md:mt-6'>
                    <div className='flex justify-between border-y p-4 bg-[#6645D5] text-white'>
                        <h1 className='font-quicksand md:font-semibold'>Total</h1>
                        <h1 className='font-quicksand md:font-semibold'>NGN - {total}</h1>

                    </div>

                    <div className='py-4 flex gap-4 justify-center mt-4 md:mt-1'>
                        <button className="py-3 px-6 text-center bg-gray-300 rounded hover:bg-red-400 transition duration-300" onClick={handleModal}>Cancel</button>
                        <PaystackButton {...componentProps} className='p-3 text-center bg-primary text-white rounded transition duration-300 flex gap-3' />

                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Purchase