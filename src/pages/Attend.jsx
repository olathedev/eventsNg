import React from 'react'

export default function Attend() {

    const formSteps = [
        {step: 1, title: 'Select ticket'},
        {step: 2, title: 'Your details'},
        {step: 3, title: 'Confirmation'},

    ]

  return (
    <div className='min-h-screen pt-10 mx-auto bg-[#eee]'>
        
        <section className='' id='container mx-auto w-full multi-stepForm'>
            <header className='flex items-center justify-evenly px-4 md:px-10'>

                {formSteps.map(step => (
                    <div className='flex flex-col items-center'>
                    <div className='h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white'>
                        {step.step}
                    </div>
                    <p className='font-quicksand py-1 font-semibold text-primary text-sm'>{step.title}</p>
                    </div>
                ))}
                
            
                
            </header>

            <section className='ticket-selection flex justify-center w-full py-10 px-4'>
                <div className="bg-white w-full md:w-[40%] rounded shadow-md">
                    <div className="card-header p-4 bg-primary bg-opacity-70 text-white border-b-4">
                        <h1 className='font-poppins text-lg text-center'>Select ticket</h1>
                    </div>

                    <div className='py-10 px-4 md:px-6 flex flex-col gap-5 font-poppins'>

                        <div className="flex items-center justify-between">
                            <div>
                            <h3 className='font-quicksand font-semibold'>Regular</h3>
                            <p className='text-primary text-sm'>#4000</p>
                            </div>
                            
                            <div>
                           
                            <form action="">
                                <input type="number" className='w-14 border border-black p-1 text-center rounded' value='0' />
                            </form>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                            <h3 className='font-quicksand font-semibold'>Vip</h3>
                            <p className='text-primary text-sm'>#10, 000</p>
                            </div>
                            
                            <div>
                           
                            <form action="">
                                <input type="number" className='w-14 border border-black p-1 text-center rounded' value='0' />
                            </form>
                            </div>
                        </div>

                    </div>
                    </div>    
            </section>
        </section>


        <section className='container mx-auto flex justify-center px-3'>

            <div className="w-[70%]"></div>
            <button className="hidden py-2 px-6 border border-primary rounded font-quicksand font-semibold">Back</button>
            <button className="py-2 px-6 bg-primary text-white rounded font-quicksand font-semibold">Next</button>

        </section>

    </div>
  )
}
