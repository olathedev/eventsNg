import React, { useState } from 'react'
import { Ticket } from '../../components/landingpage/checkout/Ticket'
import { Details } from '../../components/landingpage/checkout/Details'

export default function Attend() {

    const formSteps = [
        {step: 1, title: 'Ticket selection'},
        {step: 2, title: 'Your details'},
        {step: 3, title: 'Confirmation'},

    ]

    const [activeStep, setActiveStep] = useState(1)

  return (
    <div className='min-h-screen pt-10 mx-auto bg-[#eee]'>
        
        <section className='' id='container mx-auto w-full multi-stepForm'>
            <header className='flex items-center justify-between md:justify-evenly px-6 md:px-2'>

                {formSteps.map(step => (
                    <div className='flex flex-col items-center'>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center  ${activeStep == step.step ? 'bg-primary text-white' : 'border border-primary text-primary'}`}>
                        {step.step}
                    </div>
                    <p className='font-quicksand py-1 font-semibold text-primary text-sm'>{step.title}</p>
                    </div>
                ))}
                
            
                
            </header>

            {activeStep === 1 && (
          <Ticket />

            )} 

{activeStep === 2 && (
          <Details />

            )} 
        </section>


        <section className='w-[60%] mx-auto flex justify-between px-3'>

          
            <button className="py-2 px-6 border border-[#3F3649] rounded font-quicksand font-semibold" onClick={() => setActiveStep(activeStep -1)}>Back</button>
            <button className="py-2 px-6 bg-primary text-white rounded font-quicksand font-semibold" onClick={() => setActiveStep(activeStep +1)}>Next</button>
           
        </section>

    </div>
  )
}
