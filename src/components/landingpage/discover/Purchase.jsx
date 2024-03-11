import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { qauntityState, setPrice, setTicket } from '../../../features/ticket/ticketSlice'
import { PaystackButton } from 'react-paystack'

function Purchase({ data, handleModal }) {

    const { qauntity, ticketType: ticket, ticketPrice:price } = useSelector((state) => state.ticket)
    const [step, setStep] = useState(1)

    const [email, setEmail] = useState('')
    const [firtname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [total, setTotal] = useState(0)



    const handleTicket = (e) => {
        const selectedId = e.target.value
        const selectedTicket = data.ticket.find((ticket) => ticket._id === selectedId)
        console.log(selectedId);
        console.log(selectedTicket);
        if(selectedTicket) {
            dispatch(setTicket(selectedTicket.ticketType))
            dispatch(setPrice(selectedTicket.price))
        }else{
            dispatch(setTicket(""))
            dispatch(setPrice(0))

        }
    }




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
        <div className="fixed h-screen w-full bg-black bg-opacity-80 md:py-6 z-20 flex justify-center items-center">

            <div className="bg-white w-full h-screen pb-2 md:max-h-screen md:h-auto md:w-[40%] overflow-auto -mt-[9rem] z-40 md:rounded-lg border-primary">
                <header className='relative  h-[8rem] bg-gray-700 rounded-t-md flex justify-end text-primary '>
                    <img src={data?.event?.image} className='w-full h-full object-cover border-b-2 border-primary' alt="" />

                    <div className="bg-primary absolute h-9 w-9 text-white rounded-full right-4 top-3 flex items-center justify-center cursor-pointer" onClick={handleModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                    </div>
                </header>

              
                <div className="body pt-10 font-quicksand md:pt-3 ">
                    <h4 className='px-6 text-secondary font-semibold text-lg text-center border-b pb-4'>Ticket Selection</h4>

                    <div className='pt-4 my-4'>
                        <form action="">

                            {data?.ticket.length < 1 && (
                                <div className='text-center py-4 bg-gray-200'>
                                    No ticket availabe for this event
                                </div>
                            )}

                            {data?.ticket.length > 0 && (



                                <div>
                                    <div className="flex flex-col gap-3 px-4">




                                        {step === 1 && (

                                            <div>
                                            <div className="flex justify-between  items-center text-sm">
                                                <div>
                                                    <select className='py-2 px-6 rounded border border-primary focus:outline-none' onChange={handleTicket}>
                                                        
                                                        <option value="">--select ticket---</option>

                                                        {data?.ticket?.map(t => (
                                                            
                                                            <option value={t._id} key={t._id}>{t.ticketType}</option>

                                                        ))}
                                                            
                                                            



                                                    </select>

                                                </div>

                                             



                                                <div className="py-2 px-2 border border-primary rounded text-primary flex items-center gap-2 cursor-pointer">

                                                    <span onClick={() => dispatch(qauntityState("DECREMENT"))}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path fillRule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clipRule="evenodd" />
                                                        </svg>

                                                    </span>
                                                    <span className='font-poppins'>{qauntity} </span>
                                                    <span onClick={() => dispatch(qauntityState("INCREMENT"))}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                            <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                        </svg>

                                                    </span>


                                                </div>

                                                
                                            </div>
                                            
                                            <div className='px-3 py-4 border border-dashed border-gray-300 bg-gray-100 mt-8  rounded text-sm'>
                                            <h4 className='py-1 font-semibold'>Purchase summary</h4>

                                                            <div className='py-2 flex flex-col gap-1'>
                                                            <p>Ticket: {ticket}</p>
                                            <p>For: {qauntity} Persons/person</p>

                                                            <p className='font-semibold'>Total: {price * qauntity}</p>
                                                            </div>
                                            
                                            
                            </div>
                                            </div>
                                        )}


                                        {step == 2 && (
                                            <div className="text-sm">

                                                <div className='w-full flex gap-4 mb-4'>
                                                    <input type="text " className='p-3 border border-gray-300 rounded w-1/2' placeholder='Firstname' />
                                                    <input type="text " className='p-3 border border-gray-300 rounded w-1/2' placeholder='lastname' />
                                                </div>


                                                <input type="tel" className='p-3 mb-3 border border-gray-300 rounded w-full' placeholder='Phone number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                                                <input type="text" className='p-3 border border-gray-300 rounded w-full' placeholder='Email adress' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <p className='text-sm py-1 text-primary'>Ticket will be delivered here</p>

                                            </div>
                                        )}





                                    </div>



                                </div>
                            )}
                        </form>
                    </div>


                </div>

                <footer className='font-quicksand mt-10 md:mt-1'>
                   

                    {step === 1 && (

                        <div className='py-4 px-4 flex gap-6 justify-center mt-4 md:mt-1'>

                            <button className="w-full p-3 text-center bg-primary text-white rounded transition duration-300" disabled={qauntity < 1 || ticket === ""} onClick={() => setStep(2)}>Proceed</button>
                            {/* <PaystackButton {...componentProps} className='p-3 text-center bg-primary text-white rounded transition duration-300 flex gap-3' /> */}

                        </div>
                    )}

                    {step === 2 && (

                        <div className='py-4 flex gap-6 justify-center mt-4 md:mt-1'>
                            <button className="py-3 px-6 text-center text-white bg-secondary rounded transition duration-300" onClick={() => setStep(1)}>Back</button>


                            <PaystackButton {...componentProps} className='p-3 text-center bg-primary text-white rounded transition duration-300 flex gap-3' />

                        </div>
                    )}
                </footer>
            </div>

        </div>
    )
}

export default Purchase